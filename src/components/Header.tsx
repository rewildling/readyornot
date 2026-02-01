"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          Ready or <span style={{ color: 'var(--red)' }}>Not...</span>
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
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.25rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--sans);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--black);
          text-decoration: none;
        }

        .nav {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-size: 1rem;
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
