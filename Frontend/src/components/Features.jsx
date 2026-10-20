import React from 'react'

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4h16v4H4zM4 10h16v4H4zM4 16h10v4H4z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Centralized logs',
    description: 'Send logs from every deployment into one place. Vercel, Render, Railway, VPS, custom apps — all unified in one stream.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <path d="M16.5 16.5l4 4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Search and filter instantly',
    description: 'Find errors by project, log level, time range, or message content. Full-text search. Results in milliseconds.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <path d="M8 12h8M8 8h4M8 16h6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Built for developers',
    description: 'One API key. One tiny SDK. Zero complicated setup. Start shipping logs in under 5 minutes, no config required.',
  },
]

export default function Features() {
  return (
    <section
      className="fade-section"
      style={{ padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2.5rem)' }}
      aria-label="Features"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p
            style={{
              fontSize: '0.6875rem',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '0.875rem',
            }}
          >
            Why Flit
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            Stop context switching.{' '}
            <span className="text-gradient">Start shipping.</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '14px',
            overflow: 'hidden',
          }}
        >
          {FEATURES.map((f, i) => (
            <article
              key={f.title}
              style={{
                background: '#000000',
                padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                transition: 'background 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.025)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#000000' }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
                aria-hidden="true"
              >
                {f.icon}
              </div>

              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  letterSpacing: '-0.025em',
                  marginBottom: '0.625rem',
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.38)',
                  lineHeight: 1.65,
                  fontWeight: 400,
                }}
              >
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
