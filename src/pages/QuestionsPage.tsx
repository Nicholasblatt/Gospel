import { useMemo, useState } from "react";

type Q = { q: string; a: string };

const QUESTIONS: Q[] = [
  {
    q: "What is the gospel in one sentence?",
    a: "The gospel is the good news that God saves sinners through the life, death, and resurrection of Jesus Christ—received by repentance and faith.",
  },
  {
    q: "Why does God care about sin?",
    a: "Because God is holy and just; sin is rebellion against His rightful rule, not merely “mistakes.” Justice matters because God’s character is righteous.",
  },
  {
    q: "Can’t I be “good enough”?",
    a: "No. God’s standard is perfection, and our best works can’t erase guilt. Salvation must be grace, not wages.",
  },
  {
    q: "What does it mean to repent?",
    a: "Repentance is a real turning from sin to God—an inward change of mind that produces a new direction of life.",
  },
  {
    q: "What is saving faith?",
    a: "Saving faith is trusting in Christ Himself—His person and finished work—not trust in your effort, rituals, or a vague spirituality.",
  },
];

export function QuestionsPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return QUESTIONS;
    return QUESTIONS.filter(
      (item) =>
        item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="container prose">
      <h1 className="h1">Questions</h1>
      <p className="lede">
        Search common questions from unbelievers and new Christians.
      </p>

      <div className="searchRow">
        <label className="srOnly" htmlFor="qsearch">
          Search questions
        </label>
        <input
          id="qsearch"
          className="input"
          placeholder="Search (e.g., “repent”, “faith”, “good enough”)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="qaList">
        {filtered.map((item) => (
          <details key={item.q} className="qa">
            <summary className="qaQ">{item.q}</summary>
            <div className="qaA">{item.a}</div>
          </details>
        ))}
        {filtered.length === 0 ? (
          <div className="muted">No matches. Try a broader search.</div>
        ) : null}
      </div>
    </div>
  );
}


