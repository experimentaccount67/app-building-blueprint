'use client'

import Script from 'next/script'

export default function PaddleProvider() {
  return (
    <Script
      src="https://cdn.paddle.com/paddle/v2/paddle.js"
      strategy="afterInteractive"
      onLoad={() => {
        const paddle = (window as any).Paddle
        if (!paddle) return

        if (process.env.NEXT_PUBLIC_PADDLE_ENV === 'sandbox') {
          paddle.Environment.set('sandbox')
        }

        paddle.Initialize({
          token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
        })
      }}
    />
  )
}
