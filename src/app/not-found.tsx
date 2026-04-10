import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0f',
      color: '#e2e8f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: 'var(--font-syne), sans-serif',
    }}>
      {/* Background glow */}
      <div aria-hidden style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-space-mono), monospace',
          fontSize: 11, letterSpacing: '0.2em',
          color: '#7c3aed', textTransform: 'uppercase',
          marginBottom: 20,
        }}>
          404 — Page Not Found
        </div>

        <h1 style={{
          fontFamily: 'var(--font-syne), sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(40px, 8vw, 72px)',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          margin: '0 0 20px',
        }}>
          <span style={{ color: '#fff' }}>This page</span>
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #c4b5fd 0%, #22d3ee 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            doesn&apos;t exist.
          </span>
        </h1>

        <p style={{
          color: '#64748b',
          fontSize: 16,
          lineHeight: 1.6,
          maxWidth: 360,
          margin: '0 auto 40px',
          fontFamily: 'var(--font-space-mono), monospace',
        }}>
          The link might be broken or the page may have moved.
        </p>

        <Link href="/" style={{
          fontFamily: 'var(--font-syne), sans-serif',
          fontWeight: 700,
          fontSize: 15,
          color: '#0a0a0f',
          background: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
          padding: '14px 32px',
          borderRadius: 10,
          textDecoration: 'none',
          display: 'inline-block',
          letterSpacing: '-0.01em',
        }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
