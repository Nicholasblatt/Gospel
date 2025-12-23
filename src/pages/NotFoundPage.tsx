import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="container prose">
      <h1 className="h1">Page not found</h1>
      <p className="lede">That route doesn’t exist.</p>
      <Link className="button" to="/">
        Back home
      </Link>
    </div>
  );
}


