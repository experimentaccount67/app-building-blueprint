import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ textAlign: 'center', maxWidth: 520 }}>

        {/* Icon */}
        <div style={{
          width: 72, height: 72, borderRadius: '50%', margin: '0 auto 32px',
          background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32,
        }}>
          ✓
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: 'var(--font-syne)', fontWeight: 800,
          fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.03em',
          color: '#fff', margin: '0 0 16px',
        }}>
          You&apos;re all set.
        </h1>

        <p style={{ color: '#94a3b8', fontSize: 17, lineHeight: 1.7, margin: '0 0 40px' }}>
          Payment confirmed — the blueprint is yours forever.
          <br />
          Time to ship something great.
        </p>

        {/* CTA */}
        <Link href="/checklist" style={{
          display: 'inline-block',
          fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 16,
          color: '#0a0a0f', background: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
          padding: '16px 40px', borderRadius: 12, textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}>
          Open the Blueprint →
        </Link>

        <p style={{ color: '#475569', fontSize: 13, marginTop: 20, fontFamily: 'var(--font-space-mono)' }}>
          Questions?{' '}
          <a href="mailto:support@appbuildingblueprint.com" style={{ color: '#64748b', textDecoration: 'underline' }}>
            support@appbuildingblueprint.com
          </a>
        </p>
      </div>
    </div>
  )
}
