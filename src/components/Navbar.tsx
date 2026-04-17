'use client'

import React from 'react'
import CheckoutButton from '@/components/CheckoutButton'

const links = [
  { label: 'Features', href: '#' },
  { label: 'About',    href: '#' },
  { label: 'Pricing',  href: '#' },
  { label: 'FAQ',      href: '#' },
]

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false)
  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold)
  }, [threshold])
  React.useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])
  React.useEffect(() => { onScroll() }, [onScroll])
  return scrolled
}

export default function Navbar() {
  const scrolled = useScroll(10)

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, width: '100%',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      transition: 'background 0.2s, border-color 0.2s',
    }}>
      <nav style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 24px',
        height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Branding */}
        <a href="/" style={{
          fontFamily: 'var(--font-syne)', fontWeight: 800,
          fontSize: 14, letterSpacing: '-0.02em',
          color: '#fff', display: 'inline-block',
          transform: 'scaleX(0.85)', transformOrigin: 'left',
          whiteSpace: 'nowrap', textDecoration: 'none',
          padding: '6px 10px', borderRadius: 6,
          transition: 'box-shadow 0.15s, background 0.15s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(167,139,250,0.12)'
          e.currentTarget.style.boxShadow = '0 0 18px rgba(167,139,250,0.4)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.boxShadow = 'none'
        }}
        onMouseDown={e => {
          e.currentTarget.style.background = 'rgba(167,139,250,0.22)'
          e.currentTarget.style.boxShadow = '0 0 28px rgba(167,139,250,0.6)'
        }}
        onMouseUp={e => {
          e.currentTarget.style.background = 'rgba(167,139,250,0.12)'
          e.currentTarget.style.boxShadow = '0 0 18px rgba(167,139,250,0.4)'
        }}
        >
          App Building Blueprint
        </a>

        {/* Links — hidden on mobile */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 4 }}>
          {links.map(link => (
            <a key={link.label} href={link.href} style={{
              fontFamily: 'var(--font-syne)', fontSize: 13, fontWeight: 600,
              color: 'rgba(226,232,240,0.7)', textDecoration: 'none',
              padding: '6px 12px', borderRadius: 6,
              transition: 'color 0.15s, background 0.15s',
              letterSpacing: '-0.01em',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#e2e8f0'
              e.currentTarget.style.background = 'rgba(167,139,250,0.12)'
              e.currentTarget.style.boxShadow = '0 0 12px rgba(167,139,250,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(226,232,240,0.7)'
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.boxShadow = 'none'
            }}
            onMouseDown={e => {
              e.currentTarget.style.background = 'rgba(167,139,250,0.2)'
              e.currentTarget.style.boxShadow = '0 0 18px rgba(167,139,250,0.4)'
            }}
            onMouseUp={e => {
              e.currentTarget.style.background = 'rgba(167,139,250,0.12)'
              e.currentTarget.style.boxShadow = '0 0 12px rgba(167,139,250,0.25)'
            }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <CheckoutButton style={{
          fontFamily: 'var(--font-syne)', fontSize: 13, fontWeight: 700,
          color: '#0a0a0f', background: 'linear-gradient(90deg, #a78bfa, #22d3ee)',
          padding: '7px 16px', borderRadius: 8,
          letterSpacing: '-0.01em', whiteSpace: 'nowrap',
        }}>
          Get the Blueprint →
        </CheckoutButton>

      </nav>
    </header>
  )
}
