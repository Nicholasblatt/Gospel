import { useEffect, useMemo, useState } from "react";
import { ScriptureChip } from "../components/ScriptureChip";
import { QUESTIONS } from "../content/questions";
import { buildEsvUrl } from "../utils/esv";

type Section = {
  id: string;
  title: string;
  start: number; // inclusive (0-based)
  end: number; // inclusive (0-based)
};

// Sections based on the question-and-answer sequence.
// Note: We intentionally make "All questions" and the final section open-ended so
// the UI stays correct even if you add more items to QUESTIONS.
const SECTIONS: Section[] = [
  { id: "all", title: "All questions", start: 0, end: 9_999 },
  { id: "god", title: "God (who He is)", start: 0, end: 5 },
  { id: "creation", title: "Creation & providence", start: 6, end: 11 },
  { id: "sin", title: "Sin & misery", start: 12, end: 19 },
  { id: "christ", title: "Christ the Redeemer", start: 20, end: 28 },
  { id: "applied", title: "Redemption applied", start: 29, end: 38 },
  { id: "law", title: "God’s law (overview)", start: 39, end: 44 },
  { id: "ten", title: "Ten Commandments", start: 45, end: 81 },
  { id: "grace", title: "Sin, grace & repentance", start: 82, end: 88 },
  { id: "means", title: "Word, sacraments & prayer", start: 89, end: 98 },
  { id: "lords-prayer", title: "The Lord’s Prayer", start: 99, end: 9_999 },
];

export function QuestionsPage() {
  const [query, setQuery] = useState("");
  const [sectionId, setSectionId] = useState<string>("all");
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  // Reset paging + open item when changing filters.
  useEffect(() => {
    setVisibleCount(24);
    setOpenKey(null);
  }, [query, sectionId]);

  // When searching, always search globally (section filter becomes irrelevant).
  useEffect(() => {
    if (query.trim() && sectionId !== "all") setSectionId("all");
  }, [query, sectionId]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    // Build an indexed list so we can slice by section ranges.
    const indexed = QUESTIONS.map((item, idx) => ({ ...item, idx }));

    if (q) {
      return indexed.filter(
        (item) =>
          item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q),
      );
    }

    const section =
      SECTIONS.find((s) => s.id === sectionId) ?? SECTIONS[0 /* all */];

    return indexed.slice(section.start, section.end + 1);
  }, [query, sectionId]);

  const visible = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount],
  );

  return (
    <div className="container prose">
      <h1 className="h1">Questions and Answers</h1>
      <p className="lede">
        Browse and search this question-and-answer section, with Scripture
        references.
      </p>

      <div className="qaControls">
        <div className="qaControlsRow">
          <div className="qaControlsMain">
            <label className="srOnly" htmlFor="qsearch">
              Search questions
            </label>
            <input
              id="qsearch"
              className="input"
              placeholder="Search (e.g., “repent”, “faith”, “baptism”, “forgive”)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <label className="srOnly" htmlFor="qsection">
              Filter by section
            </label>
            <select
              id="qsection"
              className="qaSelect"
              value={sectionId}
              disabled={Boolean(query.trim())}
              onChange={(e) => setSectionId(e.target.value)}
            >
              {SECTIONS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div className="qaMeta muted">
            Showing {Math.min(visible.length, filtered.length)} of {filtered.length}
          </div>
        </div>
      </div>

      <div className="qaList">
        {visible.map((item) => {
          const key = String(item.idx);
          return (
            <details key={key} className="qa" open={openKey === key}>
              <summary
                className="qaQ"
                onClick={(e) => {
                  // Make the accordion “single-open” for a cleaner mobile reading flow.
                  e.preventDefault();
                  setOpenKey((prev) => (prev === key ? null : key));
                }}
              >
                {item.q}
              </summary>
              <div className="qaA">
                <div style={{ marginBottom: item.refs?.length ? 10 : 0 }}>
                  {item.a}
                </div>

                {item.refs?.length ? (
                  <div>
                    <strong>Scripture:</strong>
                    <div
                      className="row gap"
                      style={{ marginTop: 8, flexWrap: "wrap" }}
                    >
                      {item.refs.map((r) => (
                        <ScriptureChip
                          key={r}
                          label={`${r} (ESV)`}
                          url={buildEsvUrl(r)}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </details>
          );
        })}

        {filtered.length === 0 ? (
          <div className="muted">No matches. Try a broader search.</div>
        ) : null}
      </div>

      {filtered.length > visible.length ? (
        <div className="qaPager">
          <button
            type="button"
            className="button buttonGhost"
            onClick={() => setVisibleCount((n) => n + 24)}
          >
            Show 24 more
          </button>
          <button
            type="button"
            className="button buttonGhost"
            onClick={() => setVisibleCount(filtered.length)}
          >
            Show all
          </button>
        </div>
      ) : null}
    </div>
  );
}
