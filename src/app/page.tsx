import Link from 'next/link'

// ─── Section data ────────────────────────────────────────────────────────────

const checklistSections = [
  { icon: '🖥', color: '#8b5cf6', bg: 'rgba(139,92,246,0.12)', title: "Your App's Interface", sub: 'Mobile, loading states, error messages, branding' },
  { icon: '⚙️', color: '#22d3ee', bg: 'rgba(34,211,238,0.10)', title: 'How Your App Works', sub: 'Secrets, env vars, email, validation, error handling' },
  { icon: '🗄', color: '#22c55e', bg: 'rgba(34,197,94,0.10)', title: 'Your Database', sub: 'Supabase RLS, data safety, backups, performance' },
  { icon: '🔐', color: '#f59e0b', bg: 'rgba(245,158,11,0.10)', title: 'Login & User Accounts', sub: 'Auth flows, password reset, OAuth, permissions' },
  { icon: '💳', color: '#ef4444', bg: 'rgba(239,68,68,0.10)', title: 'Taking Payments', sub: 'Stripe setup, webhooks, test mode, subscriptions' },
  { icon: '🛡', color: '#6366f1', bg: 'rgba(99,102,241,0.10)', title: 'Keeping It Safe', sub: 'HTTPS, no exposed keys, rate limiting, CAPTCHA' },
  { icon: '📡', color: '#f97316', bg: 'rgba(249,115,22,0.10)', title: 'Knowing When Things Break', sub: 'Sentry, uptime monitoring, analytics' },
  { icon: '📋', color: '#ec4899', bg: 'rgba(236,72,153,0.10)', title: 'Legal & Compliance', sub: 'Privacy policy, ToS, GDPR, cookie consent' },
  { icon: '🔍', color: '#14b8a6', bg: 'rgba(20,184,166,0.10)', title: 'Getting Found Online', sub: 'SEO basics, OG images, page speed, sitemaps' },
  { icon: '🚀', color: '#eab308', bg: 'rgba(234,179,8,0.10)', title: 'Before You Go Live', sub: 'Custom domain, end-to-end testing, final env check' },
  { icon: '📈', color: '#10b981', bg: 'rgba(16,185,129,0.10)', title: 'After Launch', sub: 'Getting first users, feedback, Product Hunt, Reddit' },
  { icon: '🌐', color: '#7c3aed', bg: 'rgba(124,58,237,0.10)', title: 'Deployment', sub: 'Hosting, auto-deploy, staging, CDN, rollback' },
  { icon: '🧪', color: '#ec4899', bg: 'rgba(236,72,153,0.10)', title: 'Testing Your App', sub: 'Manual, mobile, slow network, automated testing' },
]

const painPoints = [
  { icon: '🔓', text: 'Your Supabase tables are wide open — anyone can read or delete your users\' data' },
  { icon: '🔑', text: 'Your API keys are hardcoded and visible in the repo' },
  { icon: '💸', text: 'Your Stripe webhook isn\'t verified — payments can be spoofed' },
  { icon: '📵', text: 'Your app breaks on mobile but you only tested on desktop' },
  { icon: '🕳', text: 'There\'s no error tracking — you\'ll hear about bugs from angry users, not logs' },
  { icon: '📄', text: 'No privacy policy — one complaint and you\'re in legal trouble' },
]

const faqs = [
  {
    q: 'Is this for technical or non-technical builders?',
    a: 'Both — but it\'s written for people building with AI tools like Lovable, Base44, Bolt, and Supabase. Every item is explained in plain English with no jargon. You don\'t need to know how to code to understand what needs to happen.',
  },
  {
    q: 'How is this different from a random checklist I could find online?',
    a: 'Most checklists are vague and outdated. This one is built around the actual stack vibe coders use — Supabase, Stripe, Vercel, Resend, Sentry. Every item has a plain-English explanation and a tool suggestion. It\'s opinionated and practical.',
  },
  {
    q: 'Do I need to complete every single item?',
    a: 'No. Items are tagged as Must, Recommended, or Optional. The app tracks your "Launch Readiness Score" based on the must-haves. You\'ll know exactly when you\'re ready to ship — and what\'s safe to skip for now.',
  },
  {
    q: 'Is this a one-time purchase?',
    a: 'Yes. Pay once, use it on every project you build — forever. No subscriptions, no seat limits, no recurring fees.',
  },
  {
    q: 'What if I\'ve already launched — is this still useful?',
    a: 'Absolutely. Most post-launch issues come from security gaps, missing monitoring, or compliance blind spots. Running through the checklist on a live app is just as valuable.',
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e2e8f0' }}>

      {/* Background glows */}
      <div aria-hidden style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-10%', left: '20%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '40%', right: '-5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(10,10,15,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 17, letterSpacing: '-0.02em', color: '#fff' }}>
            App Building Blueprint
          </span>
          <Link href="/checklist" style={{
            fontFamily: 'var(--font-space-mono)', fontSize: 13, fontWeight: 700,
            color: '#0a0a0f', background: 'linear-gradient(90deg, #a78bfa, #22d3ee)',
            padding: '8px 20px', borderRadius: 8, textDecoration: 'none',
            letterSpacing: '0.02em',
          }}>
            Get the Blueprint →
          </Link>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '100px 24px 80px' }}>
        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-syne)', fontWeight: 800, textAlign: 'center',
          fontSize: 'clamp(42px, 7vw, 80px)', lineHeight: 1.05, letterSpacing: '-0.03em',
          margin: '0 0 24px',
        }}>
          <span style={{ color: '#fff' }}>Ship your app</span>
          <br />
          <span style={{ background: 'linear-gradient(135deg, #c4b5fd 0%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            without missing a thing.
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{
          textAlign: 'center', color: '#94a3b8', fontSize: 'clamp(16px, 2.5vw, 19px)',
          lineHeight: 1.7, maxWidth: 520, margin: '0 auto 12px',
        }}>
          The production checklist for builders who ship right.
        </p>
        <p style={{
          textAlign: 'center', color: '#475569', fontSize: 'clamp(14px, 2vw, 16px)',
          lineHeight: 1.6, maxWidth: 520, margin: '0 auto 48px',
          fontFamily: 'var(--font-space-mono)',
        }}>
          13 sections · 100+ items · Nothing missing.
        </p>

        {/* Preview card */}
        <div style={{ marginTop: 48, maxWidth: 780, margin: '48px auto 0' }}>
          <div style={{
            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20, padding: '28px 32px', backdropFilter: 'blur(10px)',
          }}>
            {/* Score bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div>
                <span style={{ fontFamily: 'var(--font-space-mono)', fontSize: 11, color: '#64748b', letterSpacing: '0.08em' }}>LAUNCH READINESS</span>
                <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 32, color: '#22d3ee', marginTop: 2 }}>86%</div>
              </div>
              <div style={{
                fontFamily: 'var(--font-space-mono)', fontSize: 12, fontWeight: 700,
                color: '#22d3ee', background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)',
                padding: '8px 16px', borderRadius: 99,
              }}>
                Almost there! 🔥
              </div>
            </div>
            {/* Bar */}
            <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 99, overflow: 'hidden', marginBottom: 24 }}>
              <div style={{ height: '100%', width: '86%', background: 'linear-gradient(90deg, #7c3aed, #22d3ee)', borderRadius: 99 }} />
            </div>
            {/* Mini section pills */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[
                { label: '✓ UI', done: true }, { label: '✓ Backend', done: true },
                { label: '✓ Database', done: true }, { label: '✓ Auth', done: true },
                { label: '✓ Payments', done: true }, { label: '○ Security', done: false },
                { label: '○ Monitoring', done: false }, { label: '✓ Legal', done: true },
              ].map((p) => (
                <span key={p.label} style={{
                  fontFamily: 'var(--font-space-mono)', fontSize: 11,
                  color: p.done ? '#a78bfa' : '#475569',
                  background: p.done ? 'rgba(167,139,250,0.1)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${p.done ? 'rgba(167,139,250,0.2)' : 'rgba(255,255,255,0.06)'}`,
                  padding: '4px 10px', borderRadius: 6,
                }}>
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA — below preview card */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
          <Link href="/checklist" style={{
            fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 16,
            color: '#0a0a0f', background: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
            padding: '16px 40px', borderRadius: 12, textDecoration: 'none',
            display: 'inline-block', letterSpacing: '-0.01em',
          }}>
            Get the Blueprint →
          </Link>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontFamily: 'var(--font-space-mono)', fontSize: 11, letterSpacing: '0.1em', color: '#64748b', textTransform: 'uppercase' }}>The problem</span>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 48px)', letterSpacing: '-0.03em', color: '#fff', margin: '12px 0 16px' }}>
            Most vibe-coded apps aren&apos;t<br />ready to ship.
          </h2>
          <p style={{ color: '#64748b', fontSize: 16, maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
            Building fast doesn&apos;t mean you&apos;re ready to ship.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {painPoints.map((p) => (
            <div key={p.text} style={{
              display: 'flex', gap: 16, alignItems: 'flex-start',
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(239,68,68,0.12)',
              borderRadius: 14, padding: '20px 22px',
            }}>
              <span style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{p.icon}</span>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: 14, lineHeight: 1.6 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What's Inside ────────────────────────────────────────────────── */}
      <section id="whats-inside" style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontFamily: 'var(--font-space-mono)', fontSize: 11, letterSpacing: '0.1em', color: '#64748b', textTransform: 'uppercase' }}>What&apos;s inside</span>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 48px)', letterSpacing: '-0.03em', color: '#fff', margin: '12px 0 16px' }}>
            Every layer. Nothing missing.
          </h2>
          <p style={{ color: '#64748b', fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            Every layer of your app covered — from UI to deployment, nothing skipped.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
          {checklistSections.map((s, i) => (
            <div key={s.title} style={{
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 14, padding: '20px 22px',
              transition: 'border-color 0.2s',
            }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20,
                }}>
                  {s.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontFamily: 'var(--font-space-mono)', fontSize: 10, color: '#475569', letterSpacing: '0.06em' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 15, color: '#e2e8f0', margin: '0 0 5px', letterSpacing: '-0.01em' }}>
                    {s.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>
                    {s.sub}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section id="pricing" style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '100px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontFamily: 'var(--font-space-mono)', fontSize: 11, letterSpacing: '0.1em', color: '#64748b', textTransform: 'uppercase' }}>Pricing</span>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 48px)', letterSpacing: '-0.03em', color: '#fff', margin: '12px 0 16px' }}>
            One price. Yours forever.
          </h2>
          <p style={{ color: '#64748b', fontSize: 16, maxWidth: 400, margin: '0 auto', lineHeight: 1.6 }}>
            No subscription, no account needed.
          </p>
        </div>

        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(167,139,250,0.25)',
            borderRadius: 20, padding: '40px',
            boxShadow: '0 0 60px rgba(124,58,237,0.1)',
          }}>
            {/* Badge */}
            <div style={{ marginBottom: 24 }}>
              <span style={{
                fontFamily: 'var(--font-space-mono)', fontSize: 11, letterSpacing: '0.08em',
                color: '#a78bfa', border: '1px solid rgba(167,139,250,0.3)',
                padding: '5px 14px', borderRadius: 99, background: 'rgba(139,92,246,0.08)',
              }}>
                ONE-TIME PURCHASE
              </span>
            </div>

            {/* Price */}
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 56, color: '#fff', letterSpacing: '-0.04em' }}>$19</span>
            </div>
            <p style={{ color: '#64748b', fontSize: 14, margin: '0 0 32px', lineHeight: 1.5 }}>
              Pay once. Use it on every project you build, forever.
            </p>

            {/* Feature list */}
            <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                '13 sections covering every layer of your app',
                '100+ actionable checklist items',
                'Must / Recommended / Optional tagging',
                'Launch Readiness Score (tracks your progress)',
                'Plain-English explanations + tool suggestions',
                'Works for any stack — especially Supabase + Stripe',
                'Lifetime access + all future updates',
              ].map((f) => (
                <div key={f} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: '#22d3ee', flexShrink: 0, fontSize: 16, marginTop: 1 }}>✓</span>
                  <span style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/checklist" style={{
              display: 'block', textAlign: 'center',
              fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 17,
              color: '#0a0a0f', background: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
              padding: '18px 32px', borderRadius: 12, textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}>
              Get the Blueprint →
            </Link>
            <p style={{ textAlign: 'center', color: '#475569', fontSize: 12, margin: '14px 0 0', fontFamily: 'var(--font-space-mono)' }}>
              Instant access · No account needed
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto', padding: '0 24px 100px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ fontFamily: 'var(--font-space-mono)', fontSize: 11, letterSpacing: '0.1em', color: '#64748b', textTransform: 'uppercase' }}>FAQ</span>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 40px)', letterSpacing: '-0.03em', color: '#fff', margin: '12px 0 16px' }}>
            Questions
          </h2>
          <p style={{ color: '#64748b', fontSize: 16, maxWidth: 420, margin: '0 auto', lineHeight: 1.6 }}>
            Everything you need to know before you decide.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {faqs.map((faq) => (
            <details key={faq.q} style={{
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 12, overflow: 'hidden',
            }}>
              <summary style={{
                padding: '20px 24px', cursor: 'pointer', listStyle: 'none',
                fontFamily: 'var(--font-syne)', fontWeight: 600, fontSize: 15,
                color: '#e2e8f0', letterSpacing: '-0.01em',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                {faq.q}
                <span style={{ color: '#475569', fontSize: 20, flexShrink: 0, marginLeft: 16 }}>+</span>
              </summary>
              <div style={{ padding: '0 24px 20px', color: '#94a3b8', fontSize: 14, lineHeight: 1.7 }}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '36px 24px',
        fontFamily: 'var(--font-space-mono)',
        fontSize: 12,
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ color: '#334155' }}>
            © {new Date().getFullYear()} App Building Blueprint
          </span>
          <a href="mailto:support@appbuildingblueprint.com" style={{ color: '#475569', textDecoration: 'none' }}>support@appbuildingblueprint.com</a>
        </div>
      </footer>

    </div>
  )
}
