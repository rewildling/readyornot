"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          Ready or <span>Not</span>.
        </Link>
        <nav className="nav">
          <a href="https://321.readyornot.ai" className="nav-link">
            Newsletter
          </a>
          <Link href="/work-with-me" className="nav-link">
            Work With Me
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: var(--white);
          border-bottom: 1px solid var(--gray-light);
        }

        .header-container {
          max-width: 680px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--serif);
          font-size: 1rem;
          letter-spacing: 0.05em;
          color: var(--gray);
          text-decoration: none;
        }

        .logo span {
          color: var(--red);
        }

        .nav {
          display: flex;
          gap: 1.5rem;
        }

        .nav-link {
          font-size: 0.9rem;
          color: var(--gray);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--black);
        }
      `}</style>
    </header>
  );
}
