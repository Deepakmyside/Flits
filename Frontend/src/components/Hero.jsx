import React from 'react'
import FlitLogo from './FlitLogo'

const TECH_LOGOS = [
  {
    name: 'Vercel',
    icon: (
      <svg width="14" height="14" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
        <path d="M256 48L496 464H16L256 48z"/>
      </svg>
    ),
  },
  {
    name: 'Render',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" fillOpacity="0.8"/>
        <path d="M7 12h10M12 7v10" stroke="black" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Railway',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="4" fill="black"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 1.85L2 7.25v9.5l10 5.4 10-5.4V7.25L12 1.85zm0 2.3l7.5 4.1v8.5l-7.5 4.05-7.5-4.05V8.25L12 4.15z"/>
      </svg>
    ),
  },
  {
    name: 'AWS',
    icon: (
      <svg width="16" height="10" viewBox="0 0 50 30" fill="currentColor" aria-hidden="true">
        <path d="M14 20c-4 2-8 3-12 2l2-2c3 1 6 0 9-1M36 20c4 2 8 3 12 2l-2-2c-3 1-6 0-9-1M25 25l-5-15h3l3 10 3-10h3z"/>
      </svg>
    ),
  },
  {
    name: 'Docker',
    icon: (
      <svg width="16" height="12" viewBox="0 0 24 18" fill="currentColor" aria-hidden="true">
        <path d="M2 10h3V7H2v3zm4 0h3V7H6v3zm4 0h3V7h-3v3zm4 0h3V7h-3v3zM6 6h3V3H6v3zm4 0h3V3h-3v3zm4 0h3V3h-3v3zm4 2c-1 0-2-.5-2-1 0-1 1-2 2-2s1 .5 1 1l2 1H22z"/>
      </svg>
    ),
  },
]

export default function Hero({ onGetAccess, onSeeHow }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh', background: '#000000' }}
      aria-label="Hero section"
    >
      {/* Split layout: left text, right image */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '100vh',
          position: 'relative',
        }}
        className="max-lg:grid-cols-1"
      >
        {/* ── LEFT: Text Content ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem) clamp(3rem, 5vw, 4rem)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Pill badge */}
          <div style={{ marginBottom: '2.25rem' }}>
            <span className="pill-badge">
              <span className="pill-dot" aria-hidden="true" />
              Log Aggregation Platform
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 4.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.045em',
              lineHeight: 1.05,
              color: '#ffffff',
              marginBottom: '1.25rem',
            }}
          >
            All your project logs.{' '}
            <span className="text-gradient">One place.</span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.65,
              maxWidth: '420px',
              marginBottom: '2.25rem',
              letterSpacing: '-0.01em',
              fontWeight: 400,
            }}
          >
            Flit collects logs from all your deployed projects and brings them
            into one clean, searchable dashboard. Built for developers who ship fast.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <button
              className="btn-white"
              onClick={onGetAccess}
              aria-label="Get early access to Flit"
            >
              Get early access
            </button>
            <button
              className="btn-dark"
              onClick={onSeeHow}
              aria-label="See how Flit works"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor"/>
              </svg>
              See how it works
            </button>
          </div>

          {/* Built with strip */}
          <div>
            <p
              style={{
                fontSize: '0.6875rem',
                color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 500,
                marginBottom: '0.875rem',
              }}
            >
              Works with
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {TECH_LOGOS.map(t => (
                <span key={t.name} className="tech-logo" aria-label={t.name}>
                  {t.icon}
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Hero Image ── */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
          className="max-lg:hidden"
          aria-hidden="true"
        >
          {/* Gradient fade on left edge so it blends into black */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              background: 'linear-gradient(90deg, #000000 0%, transparent 18%)',
              pointerEvents: 'none',
            }}
          />
          {/* Gradient fade on bottom */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              background: 'linear-gradient(to top, #000000 0%, transparent 25%)',
              pointerEvents: 'none',
            }}
          />
          <img
            src="/hero-visual.png"
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
        </div>
      </div>

      {/* Mobile: show image below text */}
      <div
        className="lg:hidden"
        style={{
          position: 'relative',
          height: '280px',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background: 'linear-gradient(to bottom, #000 0%, transparent 30%, #000 100%)',
            pointerEvents: 'none',
          }}
        />
        <img
          src="/hero-visual.png"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
    </section>
  )
}
