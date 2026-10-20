import React, { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) { setError('Please enter your email.'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("That doesn't look like a valid email."); return }
    setError('')
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1100)
  }

  return (
    <section
      id="waitlist"
      className="fade-section"
      style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 2.5rem)' }}
      aria-label="Join the waitlist"
    >
      <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 800,
            letterSpacing: '-0.045em',
            color: '#ffffff',
            lineHeight: 1.05,
            marginBottom: '1rem',
          }}
        >
          Be first to get{' '}
          <span className="text-gradient">access</span>
        </h2>

        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.65, marginBottom: '2.5rem', letterSpacing: '-0.01em' }}>
          Join the waitlist and get early access when Flit launches.
          No spam. Just one email when we're ready.
        </p>

        {submitted ? (
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.875rem',
              padding: '2rem 2.5rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px',
              minWidth: '300px',
            }}
            role="status"
            aria-live="polite"
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5 9-9" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>You're on the list!</p>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.3)' }}>We'll email you when Flit is ready.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate aria-label="Waitlist signup form">
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setError('') }}
                placeholder="you@yourapp.dev"
                required
                aria-label="Your email address"
                aria-describedby={error ? 'email-error' : undefined}
                style={{
                  flex: '1 1 240px',
                  maxWidth: '320px',
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${error ? 'rgba(239,68,68,0.4)' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: '9999px',
                  padding: '0.625rem 1.25rem',
                  color: '#ffffff',
                  fontSize: '0.9375rem',
                  outline: 'none',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.25)' }}
                onBlur={e => { e.target.style.borderColor = error ? 'rgba(239,68,68,0.4)' : 'rgba(255,255,255,0.1)' }}
              />
              <button
                type="submit"
                className="btn-white"
                disabled={loading}
                aria-label="Submit email to join waitlist"
                style={{ opacity: loading ? 0.7 : 1 }}
              >
                {loading ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 0.8s linear infinite' }} aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="#000" strokeWidth="2.5" strokeDasharray="40" strokeDashoffset="15" strokeLinecap="round"/>
                  </svg>
                ) : null}
                {loading ? 'Joining...' : 'Join waitlist'}
              </button>
            </div>
            {error && (
              <p id="email-error" role="alert" style={{ fontSize: '0.8125rem', color: '#ef4444', marginTop: '0.625rem' }}>
                {error}
              </p>
            )}
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.18)', marginTop: '1rem' }}>
              No credit card. Early access is limited.
            </p>
          </form>
        )}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
