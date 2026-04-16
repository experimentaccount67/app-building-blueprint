'use client'

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void
    }
  }
}

export default function FooterEmail() {
  const handleContact = () => {
    if (typeof window !== 'undefined' && window.Tally) {
      window.Tally.openPopup('A7bzXB')
    }
  }

  return (
    <button
      onClick={handleContact}
      style={{
        background: 'none',
        border: 'none',
        color: '#64748b',
        fontFamily: 'var(--font-space-mono)',
        fontSize: 12,
        cursor: 'pointer',
        padding: 0,
        transition: 'color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.color = '#94a3b8')}
      onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
    >
      Contact
    </button>
  )
}
