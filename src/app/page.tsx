"use client";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Here it comes.</h1>

          <div className="hero-content">
            <p>
              Every day there&apos;s a new wave of AI tools promising to change everything. At the same time, the algorithms are slowly eating your attention, your time, and your presence with the people who matter most.
            </p>

            <p>
              Ready or Not is a space to experiment, filter the noise, and figure out what&apos;s actually worth paying attention to as we navigate entrepreneurship, parenthood, and the struggles of staying in front of an increasingly chaotic world.
            </p>
          </div>

          <a href="#subscribe" className="cta-primary">
            Follow the journey
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* The Struggle */}
      <section className="struggle">
        <div className="container">
          <h2>Here&apos;s what no one&apos;s saying out loud:</h2>

          <div className="struggle-grid">
            <div className="struggle-item">
              <p>
                <strong>You see the potential.</strong> AI could help you make more money, work fewer hours,
                finally get ahead. You want to use it.
              </p>
            </div>

            <div className="struggle-item">
              <p>
                <strong>But you also feel trapped.</strong> Every time you pick up your phone,
                something&apos;s pulling at your attention. The feeds. The notifications. The endless scroll
                that leaves you feeling emptier than when you started.
              </p>
            </div>

            <div className="struggle-item">
              <p>
                <strong>And the stakes keep rising.</strong> Jobs are shifting. Income feels fragile.
                You&apos;re watching friends and colleagues scramble to stay relevant while wondering
                if you&apos;re doing enough.
              </p>
            </div>

            <div className="struggle-item">
              <p>
                <strong>Meanwhile, the people you love are right there</strong> but you are all half present, with one foot in reality and the other distracted by the next reel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Forces */}
      <section className="forces">
        <div className="container">
          <div className="forces-intro">
            <h2>Two forces. Same technology.</h2>
            <p>One wants to help you build a life. The other wants to consume it.</p>
          </div>

          <div className="forces-comparison">
            <div className="force-card leverage">
              <div className="force-label">AI as Leverage</div>
              <h3>The upside is real</h3>
              <p>
                Used well, these tools can help you earn more, think clearer,
                work on what matters, and free up time for the people and things you love.
              </p>
            </div>

            <div className="force-card capture">
              <div className="force-label">Algorithms as Capture</div>
              <h3>So is the danger</h3>
              <p>
                Every platform is optimized to keep you scrolling, clicking, consuming.
                Your attention is the product. Your presence is the cost.
              </p>
            </div>
          </div>

          <p className="forces-punchline">Most people can&apos;t tell the difference.</p>
        </div>
      </section>

      {/* Who */}
      <section className="who">
        <div className="container">
          <div className="who-content">
            <h2>I&apos;m Dylan. Father of five. Building a life that works while the world rewrites the rules.</h2>

            <div className="who-text">
              <p>
                My oldest is 10. My youngest is in diapers. My wife works harder than anyone I&apos;ve ever met, and I owe it to all of them to figure out how to
                provide, protect, and still be <strong>present</strong>.
              </p>

              <p>
                I&apos;m a dad trying to use these tools to be better at everything that matters—<strong>without losing my soul to the screen</strong>.
              </p>

              <p>
                I&apos;m also terrified. Not for me. For my kids. What world are we handing them?
                How do I protect them from the algorithms? How do I help them develop a sense of self
                before the feeds take over?
              </p>

              <p>
                <strong>Ready or Not</strong> is me working all of this out in public.
                The experiments, the failures, the things that actually work.
                Real-time documentation from someone in the middle of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Is */}
      <section className="what">
        <div className="container">
          <h2>What you&apos;ll find here</h2>

          <ul className="what-list">
            <li>
              <strong>AI leverage:</strong> What actually helps. Tools, workflows, the stuff that moves the needle.
            </li>
            <li>
              <strong>Algorithm defense:</strong> How to protect your attention, detect manipulation, and stay human in a world designed to capture you.
            </li>
            <li>
              <strong>The integrated life:</strong> Building businesses and systems that work with your family, not against it. Presence as the ultimate metric.
            </li>
            <li>
              <strong>Real experiments:</strong> What I&apos;m actually trying in business, in parenting, and in life.
            </li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta" id="subscribe">
        <div className="container">
          <h2>Ready or <em>not</em>, here it comes.</h2>
          <p>
            If you&apos;re feeling the tension between potential and overwhelm,
            between wanting to use these tools and not wanting to lose yourself to them, you&apos;re not alone.
          </p>

          <div className="newsletter-embed">
            <a href="https://321.readyornot.ai" className="cta-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Subscribe to the Newsletter
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="newsletter-note">Free. Unsubscribe anytime. No algorithmic nonsense.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .container {
          max-width: 680px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8rem 0 4rem;
          position: relative;
          background: var(--white);
        }

        .hero .container {
          max-width: 900px;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--black), transparent);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .hero h1 {
          font-family: var(--sans);
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }

        .hero h1 em {
          font-style: normal;
          color: var(--red);
        }

        .hero-content {
          margin-bottom: 3rem;
        }

        .hero-content p {
          font-size: 1.25rem;
          color: var(--gray);
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .hero-content p:last-child {
          margin-bottom: 0;
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--black);
          color: var(--white);
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .cta-primary:hover {
          background: var(--red);
          transform: translateY(-2px);
        }

        .cta-primary svg {
          width: 20px;
          height: 20px;
          transition: transform 0.2s ease;
        }

        .cta-primary:hover svg {
          transform: translateX(4px);
        }

        /* The Struggle Section */
        .struggle {
          padding: 6rem 0;
          background: var(--black);
          color: var(--white);
        }

        .struggle h2 {
          font-family: var(--serif);
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 400;
          line-height: 1.3;
          margin-bottom: 3rem;
        }

        .struggle-grid {
          display: grid;
          gap: 2rem;
        }

        .struggle-item {
          border-left: 2px solid var(--red);
          padding-left: 1.5rem;
        }

        .struggle-item p {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.7;
        }

        .struggle-item strong {
          color: var(--white);
        }

        /* Two Forces Section */
        .forces {
          padding: 6rem 0;
          background: var(--white);
        }

        .forces-intro {
          text-align: center;
          margin-bottom: 4rem;
        }

        .forces-intro h2 {
          font-family: var(--serif);
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 400;
          margin-bottom: 1rem;
        }

        .forces-intro p {
          color: var(--gray);
          font-size: 1.1rem;
        }

        .forces-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 640px) {
          .forces-comparison {
            grid-template-columns: 1fr;
          }
        }

        .force-card {
          padding: 2rem;
          border: 1px solid var(--gray-light);
        }

        .force-card.leverage {
          border-color: var(--black);
        }

        .force-card.capture {
          background: var(--gray-light);
          border-color: transparent;
        }

        .force-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          color: var(--gray);
        }

        .force-card.leverage .force-label {
          color: var(--black);
        }

        .force-card.capture .force-label {
          color: var(--red);
        }

        .force-card h3 {
          font-family: var(--serif);
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 1rem;
        }

        .force-card p {
          color: var(--gray);
          font-size: 0.95rem;
        }

        .forces-punchline {
          text-align: center;
          margin-top: 3rem;
          font-family: var(--serif);
          font-size: 1.5rem;
          font-style: italic;
        }

        /* About / Who Section */
        .who {
          padding: 6rem 0;
          background: var(--gray-light);
        }

        .who-content {
          display: grid;
          gap: 2rem;
        }

        .who h2 {
          font-family: var(--serif);
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 400;
          line-height: 1.4;
        }

        .who-text p {
          margin-bottom: 1.5rem;
          color: var(--gray);
          font-size: 1.05rem;
        }

        .who-text p:last-child {
          margin-bottom: 0;
        }

        .who-text strong {
          color: var(--black);
        }

        /* What This Is Section */
        .what {
          padding: 6rem 0 3rem;
          background: var(--white);
        }

        .what h2 {
          font-family: var(--serif);
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 400;
          margin-bottom: 2rem;
        }

        .what-list {
          list-style: none;
          margin-bottom: 0;
        }

        .what-list li {
          padding: 1.25rem 0;
          border-bottom: 1px solid var(--gray-light);
          font-size: 1.1rem;
        }

        .what-list li:first-child {
          border-top: 1px solid var(--gray-light);
        }

        .what-list strong {
          color: var(--red);
        }

        /* Final CTA */
        .final-cta {
          padding: 4rem 0;
          text-align: center;
          background: var(--white);
        }

        .final-cta h2 {
          font-family: var(--sans);
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .final-cta h2 em {
          font-style: normal;
          color: var(--red);
        }

        .final-cta > .container > p {
          color: var(--gray);
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        .newsletter-embed {
          max-width: 480px;
          margin: 0 auto;
        }

        .newsletter-note {
          margin-top: 1rem;
          font-size: 0.85rem;
          color: var(--gray);
        }
      `}</style>
    </>
  );
}
