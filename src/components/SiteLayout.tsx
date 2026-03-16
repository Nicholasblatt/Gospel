import { NavLink, Outlet } from "react-router-dom";

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? "navLink navLinkActive" : "navLink";

export function SiteLayout() {
  return (
    <div className="appShell">
      <header className="header">
        <div className="headerInner">
          <NavLink to="/" className="brand" aria-label="Home" title="Home">
            <svg
              className="brandIcon"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1V22H4a1 1 0 0 1-1-1V10.5z"
                fill="currentColor"
              />
            </svg>
          </NavLink>
          <nav className="nav">
            <NavLink to="/story" className={linkClassName}>
              The Story
            </NavLink>
            <NavLink to="/questions" className={linkClassName}>
              Questions
            </NavLink>
            <NavLink to="/passages" className={linkClassName}>
              Passages
            </NavLink>
            <NavLink to="/about" className={linkClassName}>
              About
            </NavLink>
            <NavLink to="/resources" className={linkClassName}>
              Resources
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footerInner">
          <div className="muted">
            Built to present the gospel clearly. Please see About and Resources
            for more information.
          </div>
        </div>
      </footer>
    </div>
  );
}


