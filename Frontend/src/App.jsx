import React from 'react'
import './App.css'

export default function App() {
  return (
    <main className="landing">
      <div className="landing__backdrop" aria-hidden="true" />
      <div className="landing__veil" aria-hidden="true" />

      <div className="intro-page page-section" id="home">
        <header className="landing__header">
          <a className="brand" href="#home" aria-label="Flit home">
            <span className="brand__mark" aria-hidden="true"><i /><i /><i /></span>
            <span>flit</span>
          </a>
          <span className="header-note"><span className="header-note__line" />LOGS, FINALLY IN FOCUS</span>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="eyebrow"><span /> DEVELOPER LOG AGGREGATION</p>
            <h1 id="hero-title">Coming<br /><span>soon.</span></h1>
            <p className="hero__description">Search logs from every deployment in one calm, clear workspace</p>
            <a className="hero__cta" href="https://x.com/Deepakmyside" target="_blank" rel="noreferrer">
              Follow updates <span aria-hidden="true">↗</span>
            </a>
            <div className="sources" aria-label="Works with Vercel, Render, Railway, servers, and custom apps">
              <span>VERCEL</span><i /><span>RENDER</span><i /><span>RAILWAY</span><i /><span>YOUR SERVERS</span>
            </div>
          </div>
        </section>
        <a className="scroll-cue" href="#logs"><span className="scroll-cue__mouse"><i /></span> SCROLL TO EXPLORE</a>
      </div>

      <section className="logs-page page-section" id="logs" aria-labelledby="logs-title">
        <div className="logs-page__main">
          <div className="section-heading">
            <p className="eyebrow"><span /> THE SIGNAL, WITHOUT THE NOISE</p>
            <h2 id="logs-title">Every deploy.<br /><em>One log stream.</em></h2>
            <p>Search, filter, and follow issues across every environment from one focused view.</p>
          </div>
          <div className="log-window" aria-label="Preview of the Flit log dashboard">
          <div className="log-window__top">
            <div className="window-dots"><i /><i /><i /></div>
            <span className="window-title">flit / production-logs</span>
            <span className="live-indicator"><i /> LIVE</span>
          </div>
          <div className="log-toolbar">
            <span className="project-select"><b className="project-glyph">A</b> api-gateway <span>⌄</span></span>
            <span className="environment">PRODUCTION</span>
            <span className="log-search"><span>⌕</span> Search logs... <kbd>⌘ K</kbd></span>
            <span className="filter-button">☷ Filters <b>2</b></span>
          </div>
          <div className="log-table__head"><span>LEVEL</span><span>MESSAGE</span><span>SERVICE</span><span>TIME</span></div>
          <div className="log-row"><span className="log-level level-error">ERROR</span><code>Database connection timed out after 5000ms</code><span className="log-service">api-gateway</span><time>now</time></div>
          <div className="log-row"><span className="log-level level-warn">WARN</span><code>Retrying request · attempt 2 of 3</code><span className="log-service">worker-jobs</span><time>12s ago</time></div>
          <div className="log-row"><span className="log-level level-info">INFO</span><code>Build completed successfully in 18.4s</code><span className="log-service">web-client</span><time>48s ago</time></div>
          <div className="log-row"><span className="log-level level-info">INFO</span><code>Health check passed · status 200</code><span className="log-service">api-gateway</span><time>1m ago</time></div>
          <div className="log-window__bottom"><span>Showing 4 of 1,284 events</span><span><i /> Streaming live</span></div>
          </div>
        </div>
        <footer className="landing__footer">
          <span className="footer__copyright">© 2026 Flit</span>
          <nav className="socials" aria-label="Social links">
            <a href="https://x.com/Deepakmyside" target="_blank" rel="noreferrer" aria-label="X">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.4l7.3-8.4L1.9 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z" fill="currentColor" /></svg>
              <span>X</span>
            </a>
            <a href="#" aria-label="GitHub link placeholder">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 2.5 3.2 1.8.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.2-5.2-5.5 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.3-2.6 5.2-5.2 5.5.4.3.8 1 .8 2v2.9c0 .4.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" fill="currentColor" /></svg>
              <span>GitHub</span>
            </a>
          </nav>
        </footer>
      </section>
    </main>
  )
}
