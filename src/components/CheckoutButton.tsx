'use client'

import { CSSProperties, ReactNode } from 'react'

interface CheckoutButtonProps {
  style?: CSSProperties
  children: ReactNode
}

export default function CheckoutButton({ style, children }: CheckoutButtonProps) {
  const handleClick = () => {
    const paddle = (window as any).Paddle
    if (!paddle) {
      console.error('Paddle not loaded yet')
      return
    }

    paddle.Checkout.open({
      items: [
        {
          priceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_ID!,
          quantity: 1,
        },
      ],
      settings: {
        successUrl: `${window.location.origin}/success`,
      },
    })
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
