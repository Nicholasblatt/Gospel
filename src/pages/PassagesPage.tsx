import { ScriptureChip } from "../components/ScriptureChip";
import { GOSPEL_PASSAGE_GROUPS } from "../content/gospelPassages";

export function PassagesPage() {
  return (
    <div className="container prose">
      <h1 className="h1">Key Gospel Passages</h1>
      <p className="lede">
        Every passage used in the Story page, with a plain-English way to
        explain it to someone who’s unchurched. Verse chips link to ESV.
      </p>

      <div className="passageGroups">
        {GOSPEL_PASSAGE_GROUPS.map((g) => (
          <section key={g.id} className="passageGroup">
            <h2 className="h2">{g.title}</h2>
            <p className="muted">{g.subtitle}</p>

            <div className="passageList">
              {g.passages.map((p) => (
                <details key={p.id} className="qa">
                  <summary className="qaQ">{p.reference}</summary>
                  <div className="qaA">
                    <div className="row gap" style={{ marginBottom: 10 }}>
                      <ScriptureChip label={p.reference} url={p.esvUrl} />
                    </div>

                    <div style={{ marginBottom: 12 }}>
                      <strong>Plain-English explanation:</strong>
                      <ul>
                        {p.explain.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}


