import { NavLink, Outlet } from "react-router-dom";

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? "navLink navLinkActive" : "navLink";

export function SiteLayout() {
  return (
    <div className="appShell">
      <header className="header">
        <div className="headerInner">
          <NavLink to="/" className="brand">
            Gospel
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
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footerInner">
          <div className="muted">
            Built to present the gospel clearly. Not a church—talk to a faithful
            local church pastor/elder for counsel.
          </div>
        </div>
      </footer>
    </div>
  );
}


