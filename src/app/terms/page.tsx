import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service — App Building Blueprint',
}

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e2e8f0' }}>

      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(10,10,15,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 17, letterSpacing: '-0.02em', color: '#fff', textDecoration: 'none' }}>
            App Building Blueprint
          </Link>
          <Link href="/" style={{ fontFamily: 'var(--font-space-mono)', fontSize: 12, color: '#64748b', textDecoration: 'none' }}>
            ← Back to home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '64px 24px 100px' }}>
        <span style={{ fontFamily: 'var(--font-space-mono)', fontSize: 11, letterSpacing: '0.1em', color: '#64748b', textTransform: 'uppercase' }}>Legal</span>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 48px)', letterSpacing: '-0.03em', color: '#fff', margin: '12px 0 8px' }}>
          Terms of Service
        </h1>
        <p style={{ color: '#475569', fontSize: 13, fontFamily: 'var(--font-space-mono)', marginBottom: 48 }}>Last updated: April 12, 2026</p>

        {[
          {
            title: '1. Acceptance of Terms',
            body: 'By purchasing or accessing App Building Blueprint ("the Product"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Product.',
          },
          {
            title: '2. What You\'re Buying',
            body: 'App Building Blueprint is a digital checklist web application. Upon purchase, you receive a one-time, non-exclusive license to access and use the Product for your personal or commercial projects. You are not purchasing the source code or any ownership rights.',
          },
          {
            title: '3. One-Time Purchase',
            body: 'This is a one-time purchase. There are no recurring fees or subscriptions. You will receive lifetime access to the current version of the Product and any future updates made to it.',
          },
          {
            title: '4. Permitted Use',
            body: 'You may use the Product for your own app development projects, whether personal or commercial. You may not resell, redistribute, sublicense, or share access to the Product with others who have not purchased it.',
          },
          {
            title: '5. Intellectual Property',
            body: 'All content, design, and code within App Building Blueprint is the intellectual property of App Building Blueprint. You may not copy, reproduce, or create derivative works from the Product without written permission.',
          },
          {
            title: '6. Disclaimer of Warranties',
            body: 'The Product is provided "as is" without warranties of any kind. We do not guarantee that following the checklist will result in a successful, secure, or profitable application. You use the Product at your own risk.',
          },
          {
            title: '7. Limitation of Liability',
            body: 'To the maximum extent permitted by law, App Building Blueprint shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Product.',
          },
          {
            title: '8. Changes to These Terms',
            body: 'We reserve the right to update these Terms at any time. Continued use of the Product after changes are posted constitutes your acceptance of the revised Terms.',
          },
          {
            title: '9. Contact',
            body: 'If you have questions about these Terms, contact us at support@appbuildingblueprint.com.',
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 18, color: '#e2e8f0', margin: '0 0 10px', letterSpacing: '-0.01em' }}>
              {section.title}
            </h2>
            <p style={{ color: '#94a3b8', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              {section.body}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '36px 24px', fontFamily: 'var(--font-space-mono)', fontSize: 12 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ color: '#334155' }}>© {new Date().getFullYear()} App Building Blueprint</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/privacy" style={{ color: '#475569', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/refund" style={{ color: '#475569', textDecoration: 'none' }}>Refund Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
