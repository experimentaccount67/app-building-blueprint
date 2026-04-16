'use client'

import { useState } from 'react'

export default function FooterEmail() {
  const email = 'support@appbuildingblueprint.com'
  const [copied, setCopied] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Copy to clipboard as a reliable fallback
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }).catch(() => {})
    }
    // Don't preventDefault — let the mailto: still try to open
  }

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className="footer-email"
      title="Click to copy email address"
    >
      {copied ? 'Copied to clipboard!' : email}
    </a>
  )
}
