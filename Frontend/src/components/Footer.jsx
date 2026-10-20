import React from 'react'
import FlitLogo from './FlitLogo'

const LINKS = [
  { label: 'Twitter / X', href: 'https://twitter.com' },
  { label: 'GitHub',      href: 'https://github.com' },
  { label: 'Contact',     href: 'mailto:hello@flit.dev' },
]

export default function Footer() {
  return (
    <footer
      style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 5vw, 2.5rem)' }}
      aria-label="Footer"
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FlitLogo size={20} />
            <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.9375rem', letterSpacing: '-0.025em' }}>Flit</span>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '-0.01em' }}>
            Built for developers who want logging to be simple.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.1)' }}>© 2026 Flit</p>
        </div>

        {/* Links */}
        <nav aria-label="Footer links">
          <ul style={{ display: 'flex', gap: '0.125rem', listStyle: 'none', padding: 0, margin: 0, flexWrap: 'wrap' }}>
            {LINKS.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'block',
                    padding: '0.4rem 0.75rem',
                    borderRadius: 6,
                    fontSize: '0.8125rem',
                    color: 'rgba(255,255,255,0.28)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.28)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
