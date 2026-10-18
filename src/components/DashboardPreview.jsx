import React, { useState, useEffect, useRef } from 'react'

const PROJECTS = [
  { id: 'all',              label: 'All projects' },
  { id: 'notification-api', label: 'notification-api' },
  { id: 'auth-service',     label: 'auth-service' },
  { id: 'flit-web',         label: 'flit-web' },
  { id: 'cron-worker',      label: 'cron-worker' },
]

const SEED_LOGS = [
  { id: 1,  ts: '10:42:31.221', level: 'ERROR', msg: 'Payment webhook failed: timeout after 30s',           project: 'notification-api' },
  { id: 2,  ts: '10:42:29.004', level: 'WARN',  msg: 'Rate limit approaching: 820/1000 req/min',            project: 'auth-service' },
  { id: 3,  ts: '10:42:27.881', level: 'INFO',  msg: 'User session created for user_9f3a2c',                project: 'auth-service' },
  { id: 4,  ts: '10:42:25.112', level: 'INFO',  msg: 'Build deployed to production — v1.4.2',               project: 'flit-web' },
  { id: 5,  ts: '10:42:22.003', level: 'ERROR', msg: 'DB connection pool exhausted, retrying...',           project: 'cron-worker' },
  { id: 6,  ts: '10:42:19.447', level: 'INFO',  msg: 'Cron job scheduled_report completed in 812ms',        project: 'cron-worker' },
  { id: 7,  ts: '10:42:17.901', level: 'WARN',  msg: 'Slow query detected: 2100ms on users table',          project: 'auth-service' },
  { id: 8,  ts: '10:42:14.338', level: 'INFO',  msg: 'Webhook received from Stripe — event: charge.ok',     project: 'notification-api' },
]

const LIVE_LOGS = [
  { ts: '10:42:34.512', level: 'INFO',  msg: 'New deployment queued for review',                    project: 'flit-web' },
  { ts: '10:42:37.004', level: 'ERROR', msg: 'Email delivery failed for user@example.com',          project: 'notification-api' },
  { ts: '10:42:40.218', level: 'WARN',  msg: 'Memory usage above 80% threshold',                   project: 'cron-worker' },
  { ts: '10:42:43.776', level: 'INFO',  msg: 'API key rotated successfully for auth-service',       project: 'auth-service' },
  { ts: '10:42:46.001', level: 'ERROR', msg: 'Unhandled promise rejection in worker process',       project: 'cron-worker' },
]

function Badge({ level }) {
  const cls = level === 'INFO' ? 'badge badge-info' : level === 'WARN' ? 'badge badge-warn' : 'badge badge-error'
  return <span className={cls}>{level}</span>
}

function LogRow({ log, isNew }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        padding: '0.5rem 1rem',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        opacity: isNew ? 0 : 1,
        animation: isNew ? 'slide-in-row 0.4s ease forwards' : undefined,
        background: isNew ? 'rgba(34,211,238,0.025)' : 'transparent',
        transition: 'background 0.8s ease',
      }}
    >
      <span style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace', fontSize: '0.625rem', flexShrink: 0, paddingTop: '2px', minWidth: '76px' }}>
        {log.ts}
      </span>
      <Badge level={log.level} />
      <span style={{ color: 'rgba(255,255,255,0.6)', flex: 1, fontFamily: 'monospace', fontSize: '0.6875rem', lineHeight: 1.5 }}>
        {log.msg}
      </span>
      <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '0.625rem', flexShrink: 0, fontFamily: 'monospace' }}>
        {log.project}
      </span>
    </div>
  )
}

export default function DashboardPreview() {
  const [logs, setLogs] = useState(SEED_LOGS)
  const [newIds, setNewIds] = useState(new Set())
  const [activeProject, setActiveProject] = useState('all')
  const [activeFilter, setActiveFilter] = useState('All')
  const [search, setSearch] = useState('')
  const liveIdx = useRef(0)

  useEffect(() => {
    const iv = setInterval(() => {
      const raw = LIVE_LOGS[liveIdx.current % LIVE_LOGS.length]
      liveIdx.current++
      const log = { ...raw, id: Date.now() }
      setLogs(prev => [log, ...prev.slice(0, 11)])
      setNewIds(prev => new Set([...prev, log.id]))
      setTimeout(() => setNewIds(prev => { const n = new Set(prev); n.delete(log.id); return n }), 1200)
    }, 3500)
    return () => clearInterval(iv)
  }, [])

  const displayed = logs.filter(l => {
    if (activeProject !== 'all' && l.project !== activeProject) return false
    if (activeFilter === 'Errors' && l.level !== 'ERROR') return false
    if (activeFilter === 'Warnings' && l.level !== 'WARN') return false
    if (search && !l.msg.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <section
      id="preview"
      className="fade-section"
      style={{ padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2.5rem)' }}
      aria-label="Dashboard preview"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.875rem' }}>
            Product Preview
          </p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1.1 }}>
            Everything in{' '}
            <span className="text-gradient-cyan">one view</span>
          </h2>
        </div>

        {/* Dashboard window */}
        <div
          className="dashboard-window"
          role="img"
          aria-label="Flit log dashboard interface"
        >
          {/* Title bar */}
          <div style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0.625rem 1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="terminal-dot" style={{ background: '#ef4444' }} aria-hidden="true" />
            <span className="terminal-dot" style={{ background: '#f59e0b' }} aria-hidden="true" />
            <span className="terminal-dot" style={{ background: '#22c55e' }} aria-hidden="true" />
            <span style={{ flex: 1 }} />
            <span style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.15)', fontFamily: 'monospace' }}>flit.dev/dashboard</span>
          </div>

          <div style={{ display: 'flex', height: '460px' }}>
            {/* Sidebar */}
            <aside style={{ width: '176px', flexShrink: 0, borderRight: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)', padding: '0.875rem 0', overflowY: 'auto' }} aria-label="Project list">
              <div style={{ padding: '0 0.75rem', marginBottom: '0.375rem' }}>
                <span style={{ fontSize: '0.5625rem', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Projects</span>
              </div>
              {PROJECTS.map(p => (
                <button
                  key={p.id}
                  onClick={() => setActiveProject(p.id)}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '0.4375rem 0.75rem',
                    fontSize: '0.6875rem',
                    fontFamily: 'monospace',
                    color: activeProject === p.id ? '#ffffff' : 'rgba(255,255,255,0.28)',
                    background: activeProject === p.id ? 'rgba(255,255,255,0.06)' : 'transparent',
                    border: 'none',
                    borderLeft: activeProject === p.id ? '2px solid rgba(255,255,255,0.4)' : '2px solid transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                  aria-pressed={activeProject === p.id}
                >
                  {p.label}
                </button>
              ))}
            </aside>

            {/* Main */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              {/* Toolbar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.625rem 0.875rem', borderBottom: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
                {/* Search */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '6px', padding: '0.375rem 0.75rem' }}>
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/><path d="M11 11l3 3" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  <input
                    type="search"
                    placeholder="Search logs..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={{ background: 'none', border: 'none', outline: 'none', color: 'rgba(255,255,255,0.5)', fontSize: '0.6875rem', fontFamily: 'monospace', width: '100%' }}
                    aria-label="Search logs"
                  />
                </div>
                {/* Filters */}
                <div style={{ display: 'flex', gap: '3px' }} role="tablist" aria-label="Log level filters">
                  {['All', 'Errors', 'Warnings'].map(f => (
                    <button
                      key={f}
                      role="tab"
                      aria-selected={activeFilter === f}
                      onClick={() => setActiveFilter(f)}
                      style={{
                        fontSize: '0.625rem',
                        fontWeight: 500,
                        padding: '0.3rem 0.625rem',
                        borderRadius: '5px',
                        border: '1px solid',
                        borderColor: activeFilter === f ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)',
                        background: activeFilter === f ? 'rgba(255,255,255,0.08)' : 'transparent',
                        color: activeFilter === f ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.25)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Column headers */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.4rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: '0.5625rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, flexShrink: 0 }}>
                <span style={{ minWidth: '76px', flexShrink: 0 }}>Time</span>
                <span style={{ width: '44px', flexShrink: 0 }}>Level</span>
                <span style={{ flex: 1 }}>Message</span>
                <span>Project</span>
              </div>

              {/* Log rows */}
              <div style={{ flex: 1, overflowY: 'auto' }} role="log" aria-live="polite" aria-label="Log entries">
                {displayed.map(log => (
                  <LogRow key={log.id} log={log} isNew={newIds.has(log.id)} />
                ))}
                {displayed.length === 0 && (
                  <div style={{ padding: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.15)', fontSize: '0.8rem' }}>
                    No logs match the current filter.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-row {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
