import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="h1">The gospel—told live, clearly, and honestly.</h1>
        <p className="lede">
          Walk through the story and get straight answers to the big questions:
          God, sin, Christ, the cross, repentance &amp; faith, assurance, and
          what it means to follow Jesus.
        </p>
        <div className="row gap">
          <Link className="button" to="/story">
            Start the Story
          </Link>
          <Link className="button buttonGhost" to="/questions">
            Explore Questions
          </Link>
        </div>
      </section>

      <section className="cardGrid">
        <div className="card">
          <div className="cardTitle">The Story</div>
          <div className="cardText">
            A guided walkthrough: creation → fall → promise → Christ → cross →
            resurrection → response.
          </div>
          <Link className="cardLink" to="/story">
            Go to the Story →
          </Link>
        </div>
        <div className="card">
          <div className="cardTitle">Questions</div>
          <div className="cardText">
            Clear, Bible-forward answers for seekers, skeptics, and new
            Christians.
          </div>
          <Link className="cardLink" to="/questions">
            Go to Questions →
          </Link>
        </div>
        <div className="card">
          <div className="cardTitle">About</div>
          <div className="cardText">
            What this site is (and isn’t), and how to take your next steps.
          </div>
          <Link className="cardLink" to="/about">
            Go to About →
          </Link>
        </div>
      </section>
    </div>
  );
}


