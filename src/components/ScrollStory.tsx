import { useEffect, useRef, useState } from "react";
import { ScriptureChip } from "./ScriptureChip";

export type ScrollStoryChapter = {
  id: string;
  title: string;
  subtitle?: string;
  summary?: string;
  points?: string[];
  scriptures?: { label: string; text?: string; translation?: string; url?: string }[];
};

type Props = {
  title: string;
  subtitle?: string;
  chapters: ScrollStoryChapter[];
};

export function ScrollStory({ title, subtitle, chapters }: Props) {
  const [seenIds, setSeenIds] = useState<Record<string, true>>({});
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const sections = Array.from(
      scroller.querySelectorAll<HTMLElement>("[data-story-section='true']"),
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const id = (e.target as HTMLElement).dataset.storyId;
          if (id) {
            setSeenIds((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
          }
        }
      },
      {
        root: null,
        threshold: [0.15, 0.3],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <div className="storyShell">
      <header className="storyHeader">
        <h1 className="h1">{title}</h1>
        {subtitle ? <p className="lede">{subtitle}</p> : null}
      </header>

      <div className="storyScroller" ref={scrollerRef}>
        {chapters.map((c) => (
          <section
            key={c.id}
            className={seenIds[c.id] ? "storySection seen" : "storySection"}
            data-story-section="true"
            data-story-id={c.id}
            id={c.id}
          >
            <div className="storySectionInner">
              <h2 className="storyH2">{c.title}</h2>
              {c.subtitle ? <div className="storySub">{c.subtitle}</div> : null}
              {c.summary ? <p className="storySummary">{c.summary}</p> : null}

              {c.points?.length ? (
                <ul className="storyPoints">
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              ) : null}

              {c.scriptures?.length ? (
                <div className="storyRefs" aria-label="Scripture references">
                  {c.scriptures.map((s) => (
                    <ScriptureChip
                      key={s.label}
                      label={s.label}
                      text={s.text}
                      url={s.url}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}


