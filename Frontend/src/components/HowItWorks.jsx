import React from 'react'

const STEPS = [
  { number: '01', title: 'Create a project', description: 'Sign up and create a project in the Flit dashboard in seconds.' },
  { number: '02', title: 'Copy your API key',  description: 'Grab your unique API key from the project settings page.' },
  { number: '03', title: 'Send logs from your app', description: 'Use our tiny SDK or a simple HTTP call to start streaming logs.' },
]

function Tok({ c, children }) {
  const cols = {
    k: '#22d3ee',    // keyword/command
    f: '#a5b4fc',    // flag
    u: '#6ee7b7',    // url
    s: '#e2e8f0',    // string value
    v: '#fde68a',    // variable
    b: 'rgba(255,255,255,0.35)', // brace/punctuation
    m: 'rgba(255,255,255,0.18)', // muted
  }
  return <span style={{ color: cols[c] || '#e2e8f0' }}>{children}</span>
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="fade-section"
      style={{ padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2.5rem)' }}
      aria-label="How Flit works"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.875rem' }}>
            Getting started
          </p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1.1 }}>
            Up and running in{' '}
            <span className="text-gradient">minutes</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  paddingBottom: i < STEPS.length - 1 ? '2rem' : 0,
                  position: 'relative',
                }}
              >
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '19px',
                      top: '40px',
                      width: '1px',
                      bottom: 0,
                      background: 'rgba(255,255,255,0.06)',
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Step number */}
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.04em',
                    fontFamily: 'monospace',
                    zIndex: 1,
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </div>

                <div style={{ paddingTop: '0.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '0.375rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, fontWeight: 400 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Code block */}
          <div className="terminal" role="figure" aria-label="Example API request">
            {/* Bar */}
            <div className="terminal-bar">
              <span className="terminal-dot" style={{ background: '#ef4444' }} aria-hidden="true" />
              <span className="terminal-dot" style={{ background: '#f59e0b' }} aria-hidden="true" />
              <span className="terminal-dot" style={{ background: '#22c55e' }} aria-hidden="true" />
              <span style={{ marginLeft: '0.625rem', fontSize: '0.625rem', color: 'rgba(255,255,255,0.18)', fontFamily: 'monospace' }}>bash</span>
            </div>

            {/* Code */}
            <pre style={{ margin: 0, padding: '1.25rem 1.375rem', fontSize: '0.8125rem', lineHeight: 1.85, overflowX: 'auto', fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
              <Tok c="k">curl</Tok>{' '}
              <Tok c="f">-X POST</Tok>{' '}
              <Tok c="u">https://flit.dev/api/logs</Tok>{' \\\n  '}
              <Tok c="f">-H</Tok>{' '}
              <Tok c="s">"Authorization: Bearer </Tok><Tok c="v">YOUR_API_KEY</Tok><Tok c="s">"</Tok>{' \\\n  '}
              <Tok c="f">-H</Tok>{' '}
              <Tok c="s">"Content-Type: application/json"</Tok>{' \\\n  '}
              <Tok c="f">-d</Tok>{" '"}
              <Tok c="b">{"{\n    "}</Tok>
              <Tok c="s">"level"</Tok><Tok c="b">: </Tok><Tok c="s">"error"</Tok><Tok c="b">,{"\n    "}</Tok>
              <Tok c="s">"message"</Tok><Tok c="b">: </Tok><Tok c="s">"Payment webhook failed"</Tok><Tok c="b">,{"\n    "}</Tok>
              <Tok c="s">"project"</Tok><Tok c="b">: </Tok><Tok c="s">"notification-api"</Tok>
              {"\n  "}<Tok c="b">{"}"}</Tok>{"'"}
            </pre>

            {/* Footer */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '0.5rem 1.125rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} aria-hidden="true" />
              <span style={{ fontSize: '0.625rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}>Log sent successfully · 200 OK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
