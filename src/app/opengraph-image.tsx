import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'App Building Blueprint — The checklist every vibe coder needs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0a0a0f',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 100px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Background glow — purple top-left */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: -60,
            width: 700,
            height: 700,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Background glow — cyan bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -80,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Subtle grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 36,
            padding: '8px 18px',
            borderRadius: 999,
            border: '1px solid rgba(167,139,250,0.3)',
            background: 'rgba(124,58,237,0.12)',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
              display: 'flex',
            }}
          />
          <span
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: '#a78bfa',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            101 checklist items · 13 sections
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 28,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span style={{ color: '#ffffff' }}>App Building</span>
          <span
            style={{
              backgroundImage: 'linear-gradient(90deg, #a78bfa 0%, #22d3ee 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
            }}
          >
            Blueprint
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 400,
            color: '#94a3b8',
            lineHeight: 1.4,
            maxWidth: 700,
            marginBottom: 60,
            display: 'flex',
          }}
        >
          The checklist every vibe coder needs
        </div>

        {/* Bottom bar — divider + URL */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            position: 'absolute',
            bottom: 56,
            left: 100,
            right: 100,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 1,
              background:
                'linear-gradient(90deg, rgba(167,139,250,0.5) 0%, rgba(34,211,238,0.3) 50%, transparent 100%)',
              display: 'flex',
            }}
          />
          <span
            style={{
              fontSize: 16,
              color: '#475569',
              fontWeight: 500,
              letterSpacing: '0.04em',
            }}
          >
            appbuildingblueprint.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
