import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="h1">A clear telling of the Gospel of Jesus Christ.</h1>
        <p className="lede">
          Walk through the gospel story, get straight answers to some big questions,
          and dig into the key passages.
        </p>
      </section>

      <section className="homeGrid" aria-label="Main sections">
        <Link className="card cardLinkBlock homePrimary" to="/story">
          <div className="cardTitle">The Story</div>
          <div className="cardText">
            A guided walkthrough: God → man → sin → Christ → cross → resurrection
            → response.
          </div>
          <div className="cardCta">Start the Story →</div>
        </Link>

        <Link className="card cardLinkBlock homeSecondary" to="/questions">
          <div className="cardTitle">Questions</div>
          <div className="cardText">
            A plain-English question-and-answer section on key truths of the
            Christian faith.
          </div>
          <div className="cardCta">Go to Questions →</div>
        </Link>

        <Link className="card cardLinkBlock homeSecondary" to="/passages">
          <div className="cardTitle">Passages</div>
          <div className="cardText">
            Key texts from the Story and Questions—organized by category, with
            simple explanations and sources.
          </div>
          <div className="cardCta">Go to Passages →</div>
        </Link>
      </section>
    </div>
  );
}

