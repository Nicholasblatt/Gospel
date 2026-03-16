import { useEffect, useMemo, useState } from "react";
import { ScriptureChip } from "../components/ScriptureChip";
import { GOSPEL_PASSAGE_GROUPS } from "../content/gospelPassages";

type FlatPassage = {
  key: string;
  groupId: string;
  groupTitle: string;
  reference: string;
  esvUrl: string;
  explain: string[];
  sources?: string[];
};

export function PassagesPage() {
  const [query, setQuery] = useState("");
  const [groupId, setGroupId] = useState<string>("all");
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  const groups = useMemo(
    () => [{ id: "all", title: "All categories" }, ...GOSPEL_PASSAGE_GROUPS],
    [],
  );

  // Reset paging + open item when changing filters.
  useEffect(() => {
    setVisibleCount(24);
    setOpenKey(null);
  }, [query, groupId]);

  // When searching, always search globally (category filter becomes irrelevant).
  useEffect(() => {
    if (query.trim() && groupId !== "all") setGroupId("all");
  }, [query, groupId]);

  const all: FlatPassage[] = useMemo(() => {
    const out: FlatPassage[] = [];
    for (const g of GOSPEL_PASSAGE_GROUPS) {
      for (const p of g.passages) {
        out.push({
          key: `${g.id}:${p.id}`,
          groupId: g.id,
          groupTitle: g.title,
          reference: p.reference,
          esvUrl: p.esvUrl,
          explain: p.explain,
          sources: (p as unknown as { sources?: string[] }).sources,
        });
      }
    }
    return out;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let base = all;
    if (!q && groupId !== "all") {
      base = all.filter((p) => p.groupId === groupId);
    }

    if (!q) return base;

    return base.filter((p) => {
      if (p.reference.toLowerCase().includes(q)) return true;
      if (p.groupTitle.toLowerCase().includes(q)) return true;
      return p.explain.some((x) => x.toLowerCase().includes(q));
    });
  }, [all, query, groupId]);

  const visible = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount],
  );

  return (
    <div className="container prose">
      <h1 className="h1">Key Gospel Passages</h1>
      <p className="lede">
        Search and browse passages by category. Explanations are plain-English
        summaries drawn from Puritan-era theology and classic Reformed teaching.
      </p>

      <div className="qaControls">
        <div className="qaControlsRow">
          <div className="qaControlsMain">
            <label className="srOnly" htmlFor="psearch">
              Search passages
            </label>
            <input
              id="psearch"
              className="input"
              placeholder="Search (e.g., “justified”, “covenant”, “baptism”, “resurrection”)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <label className="srOnly" htmlFor="pcat">
              Filter by category
            </label>
            <select
              id="pcat"
              className="qaSelect"
              value={groupId}
              disabled={Boolean(query.trim())}
              onChange={(e) => setGroupId(e.target.value)}
            >
              <option value="all">All categories</option>
              {GOSPEL_PASSAGE_GROUPS.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.title}
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
        {visible.map((p) => (
          <details key={p.key} className="qa" open={openKey === p.key}>
            <summary
              className="qaQ"
              onClick={(e) => {
                e.preventDefault();
                setOpenKey((prev) => (prev === p.key ? null : p.key));
              }}
            >
              {p.reference}{" "}
              <span className="muted" style={{ fontWeight: 600 }}>
                · {p.groupTitle}
              </span>
            </summary>
            <div className="qaA">
              <div className="row gap" style={{ marginBottom: 10 }}>
                <ScriptureChip label={p.reference} url={p.esvUrl} />
              </div>

              <div style={{ marginBottom: 12 }}>
                <strong>Explanation:</strong>
                <ul>
                  {p.explain.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              {p.sources?.length ? (
                <div style={{ marginBottom: 6 }}>
                  <strong>Sources:</strong>
                  <ul>
                    {p.sources.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </details>
        ))}

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


