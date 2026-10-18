import React, { useState, useEffect } from 'react'
import FlitLogo from './FlitLogo'

export default function Navbar({ onJoinWaitlist }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="nav-glass"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
      aria-label="Primary navigation"
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 4vw, 2.5rem)',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            textDecoration: 'none',
          }}
          aria-label="Flit home"
        >
          <FlitLogo size={26} />
          <span
            style={{
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '1rem',
              letterSpacing: '-0.025em',
            }}
          >
            Flit
          </span>
        </a>

        {/* Right action */}
        <button
          className="btn-dark"
          onClick={onJoinWaitlist}
          style={{ fontSize: '0.875rem', padding: '0.5rem 1.125rem' }}
          aria-label="Join the Flit waitlist"
        >
          Join waitlist
        </button>
      </div>
    </nav>
  )
}
