'use client'

import { CSSProperties, ReactNode } from 'react'

interface CheckoutButtonProps {
  style?: CSSProperties
  children: ReactNode
}

export default function CheckoutButton({ style, children }: CheckoutButtonProps) {
  return (
    <button
      style={{ cursor: 'pointer', border: 'none', padding: 0, background: 'none', ...style }}
    >
      {children}
    </button>
  )
}
