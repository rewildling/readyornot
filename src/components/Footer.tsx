"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          <a href="https://321.readyornot.ai">Newsletter Archive</a> ·{" "}
          A <a href="https://dunderblixem.com">Dunder Blixem</a> project
        </p>
      </div>

      <style jsx>{`
        .footer {
          padding: 3rem 0;
          border-top: 1px solid var(--gray-light);
          text-align: center;
          background: var(--white);
        }

        .footer-container {
          max-width: 680px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .footer p {
          font-size: 0.9rem;
          color: var(--gray);
        }

        .footer a {
          color: var(--black);
          text-decoration: none;
        }

        .footer a:hover {
          color: var(--red);
        }
      `}</style>
    </footer>
  );
}
