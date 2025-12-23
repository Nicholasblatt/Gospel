import { useEffect, useMemo, useRef, useState } from "react";
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
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? "");
  const [progressPct, setProgressPct] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 980);
  const [seenIds, setSeenIds] = useState<Record<string, true>>({});
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const navDetailsRef = useRef<HTMLDetailsElement | null>(null);

  const ids = useMemo(() => chapters.map((c) => c.id), [chapters]);
  const activeIndex = Math.max(0, ids.indexOf(activeId));

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 980);
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    // Keep nav open on desktop; collapse by default on mobile.
    const details = navDetailsRef.current;
    if (!details) return;
    details.open = !isMobile;
  }, [isMobile]);

  useEffect(() => {
    const denom = Math.max(1, ids.length - 1);
    setProgressPct((activeIndex / denom) * 100);
  }, [activeIndex, ids.length]);

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

  useEffect(() => {
    // Stable "active chapter" selection based on scroll position.
    // This avoids IntersectionObserver flip-flopping between two chapters near the boundary.
    let raf = 0;
    const offset = 110; // header + spacing; tweak if needed

    const update = () => {
      raf = 0;
      const nodes = ids
        .map((id) => document.getElementById(id))
        .filter((n): n is HTMLElement => Boolean(n));
      if (nodes.length === 0) return;

      // If we're at the bottom of the page, force the last chapter active.
      // Without this, very tall viewports can make the last card hard to "win" the closest-to-offset check.
      const doc = document.documentElement;
      const remaining = doc.scrollHeight - (window.scrollY + window.innerHeight);
      if (remaining <= 2) {
        const last = nodes[nodes.length - 1];
        if (last && last.id !== activeId) setActiveId(last.id);
        return;
      }

      const targetY = offset;
      let best: { id: string; dist: number } | null = null;
      for (const n of nodes) {
        const r = n.getBoundingClientRect();
        const d = Math.abs(r.top - targetY);
        const id = n.id;
        if (!best || d < best.dist) best = { id, dist: d };
      }
      if (best && best.id !== activeId) setActiveId(best.id);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [activeId, ids]);

  const scrollToId = (id: string) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const el =
      scroller.querySelector<HTMLElement>(`[data-story-id='${id}']`) ??
      document.getElementById(id);
    if (!el) return;

    const doScroll = () => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Mobile: collapse first, then scroll after layout settles.
    // Otherwise the collapse changes page height and can overshoot past the intended chapter.
    if (isMobile) {
      const details = navDetailsRef.current;
      if (details?.open) {
        details.open = false;
        requestAnimationFrame(() => requestAnimationFrame(doScroll));
        return;
      }
    }

    doScroll();
  };

  const scrollToIndex = (idx: number) => {
    const id = ids[idx];
    if (id) scrollToId(id);
  };

  return (
    <div className="storyShell">
      <aside className="storyNav" aria-label="Story navigation">
        <div className="storyNavCard">
          <div className="storyNavTitle">{title}</div>
          {subtitle ? <div className="storyNavSubtitle">{subtitle}</div> : null}

          <div className="storyProgress" aria-hidden="true">
            <div
              className="storyProgressBar"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {/* Mobile: collapsible jump list (CSS shows/hides by breakpoint) */}
          <details className="storyNavDetails" ref={navDetailsRef}>
            <summary className="storyNavSummary">
              <span className="storyNavSummaryLabel">Jump to a chapter</span>
              <span className="storyNavSummaryActive" aria-hidden="true">
                {chapters[activeIndex]?.title ?? ""}
              </span>
            </summary>
            <div className="storyNavList">
              {chapters.map((c, idx) => {
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    type="button"
                    className={isActive ? "storyNavItem active" : "storyNavItem"}
                    onClick={() => scrollToIndex(idx)}
                  >
                    <span className="storyNavDot" aria-hidden="true" />
                    <span className="storyNavText">
                      <span className="storyNavItemTitle">{c.title}</span>
                      {c.subtitle ? (
                        <span className="storyNavItemSubtitle">{c.subtitle}</span>
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </details>

          {/* Desktop: always-visible list (CSS shows/hides by breakpoint) */}
          <div className="storyNavList storyNavListDesktop">
            {chapters.map((c, idx) => {
              const isActive = c.id === activeId;
              return (
                <button
                  key={c.id}
                  type="button"
                  className={isActive ? "storyNavItem active" : "storyNavItem"}
                  onClick={() => scrollToIndex(idx)}
                >
                  <span className="storyNavDot" aria-hidden="true" />
                  <span className="storyNavText">
                    <span className="storyNavItemTitle">{c.title}</span>
                    {c.subtitle ? (
                      <span className="storyNavItemSubtitle">{c.subtitle}</span>
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="storyNavButtons">
            <button
              type="button"
              className="button buttonGhost"
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
            >
              Back
            </button>
            <button
              type="button"
              className="button"
              onClick={() =>
                scrollToIndex(Math.min(ids.length - 1, activeIndex + 1))
              }
              disabled={activeIndex >= ids.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </aside>

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
              <div className="storyKicker">The Gospel</div>
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

      <div className="storyMobilePager" aria-label="Story chapter controls">
        <button
          type="button"
          className="button buttonGhost"
          onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
        >
          Back
        </button>
        <button
          type="button"
          className="button"
          onClick={() => scrollToIndex(Math.min(ids.length - 1, activeIndex + 1))}
          disabled={activeIndex >= ids.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}


