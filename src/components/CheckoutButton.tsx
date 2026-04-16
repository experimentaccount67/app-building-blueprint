'use client'

import { CSSProperties, ReactNode } from 'react'

interface CheckoutButtonProps {
  style?: CSSProperties
  children: ReactNode
}

export default function CheckoutButton({ style, children }: CheckoutButtonProps) {
  const handleClick = () => {
    const tally = (window as any).Tally
    if (tally) {
      tally.openPopup('EkbKKr')
    }
  }

  return (
    <button
      onClick={handleClick}
      style={{ cursor: 'pointer', border: 'none', padding: 0, background: 'none', ...style }}
    >
      {children}
    </button>
  )
}
