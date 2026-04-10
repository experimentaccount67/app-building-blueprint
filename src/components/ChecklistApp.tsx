'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { sections, getSectionItemIds, type Tag } from '@/lib/checklistData'

// ─── Color maps ───────────────────────────────────────────────────────────────
const iconBg: Record<string, string> = {
  purple:  'rgba(124,58,237,0.18)',
  cyan:    'rgba(6,182,212,0.18)',
  green:   'rgba(16,185,129,0.18)',
  amber:   'rgba(245,158,11,0.18)',
  red:     'rgba(239,68,68,0.18)',
  indigo:  'rgba(99,102,241,0.18)',
  pink:    'rgba(236,72,153,0.18)',
  teal:    'rgba(20,184,166,0.18)',
  orange:  'rgba(251,146,60,0.18)',
  emerald: 'rgba(167,243,208,0.1)',
  yellow:  'rgba(253,224,71,0.13)',
  violet:  'rgba(196,181,253,0.13)',
}
const iconText: Record<string, string> = {
  purple:  '#a78bfa',
  cyan:    '#22d3ee',
  green:   '#34d399',
  amber:   '#fbbf24',
  red:     '#f87171',
  indigo:  '#818cf8',
  pink:    '#f472b6',
  teal:    '#2dd4bf',
  orange:  '#fb923c',
  emerald: '#6ee7b7',
  yellow:  '#fde047',
  violet:  '#c4b5fd',
}

// ─── Tag config ───────────────────────────────────────────────────────────────
const tagConfig: Record<Tag, { label: string; bg: string; text: string; border: string }> = {
  must: { label: 'required',    bg: 'rgba(239,68,68,0.1)',   text: '#f87171', border: 'rgba(239,68,68,0.25)' },
  rec:  { label: 'recommended', bg: 'rgba(245,158,11,0.1)',  text: '#fbbf24', border: 'rgba(245,158,11,0.25)' },
  opt:  { label: 'optional',    bg: 'rgba(16,185,129,0.1)', text: '#34d399', border: 'rgba(16,185,129,0.25)' },
}

const STORAGE_KEY = 'blueprint-checked'
const OPEN_KEY    = 'blueprint-open'

type FilterType = 'all' | Tag

export default function ChecklistApp() {
  const [checked, setChecked]     = useState<Set<string>>(new Set())
  const [openSections, setOpen]   = useState<Set<string>>(new Set())
  const [filter, setFilter]       = useState<FilterType>('all')
  const [mounted, setMounted]     = useState(false)

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setChecked(new Set(JSON.parse(saved)))
      const savedOpen = localStorage.getItem(OPEN_KEY)
      if (savedOpen) setOpen(new Set(JSON.parse(savedOpen)))
      // else: all sections start collapsed — intentional
    } catch {
      // all collapsed on error too
    }
    setMounted(true)
  }, [])

  // Persist checked
  useEffect(() => {
    if (!mounted) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]))
  }, [checked, mounted])

  // Persist open sections
  useEffect(() => {
    if (!mounted) return
    localStorage.setItem(OPEN_KEY, JSON.stringify([...openSections]))
  }, [openSections, mounted])

  const toggleItem = useCallback((id: string) => {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const toggleSection = useCallback((id: string) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const resetAll = () => {
    setChecked(new Set())
    localStorage.removeItem(STORAGE_KEY)
  }

  // ── Totals ──────────────────────────────────────────────────────────────────
  const totalItems = sections.reduce(
    (t, s) => t + s.groups.reduce((g, gr) => g + gr.items.length, 0), 0
  )
  const totalChecked = checked.size
  const overallPct = totalItems > 0 ? Math.round((totalChecked / totalItems) * 100) : 0

  // Launch Readiness = based on required items only (the ones that truly matter)
  const mustItemIds: string[] = []
  sections.forEach((section) => {
    section.groups.forEach((group, gi) => {
      group.items.forEach((item, ii) => {
        if (item.tag === 'must') mustItemIds.push(`${section.id}-${gi}-${ii}`)
      })
    })
  })
  const mustTotal   = mustItemIds.length
  const mustChecked = mustItemIds.filter((id) => checked.has(id)).length
  const readinessPct = mustTotal > 0 ? Math.round((mustChecked / mustTotal) * 100) : 0

  const readinessLabel =
    readinessPct === 100 ? 'Launch Ready 🚀' :
    readinessPct >= 70   ? 'Almost there!' :
    readinessPct >= 40   ? 'Getting there' :
    readinessPct >= 10   ? 'Just getting started' :
                           'Not ready yet'

  const readinessColor =
    readinessPct === 100 ? '#10b981' :
    readinessPct >= 70   ? '#22d3ee' :
    readinessPct >= 40   ? '#fbbf24' :
                           '#f87171'

  if (!mounted) return null

  return (
    <div
      style={{
        background: '#0a0a0f',
        minHeight: '100vh',
        color: '#e2e8f0',
        fontFamily: "'Syne', sans-serif",
        padding: '20px 20px 100px',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* ── Top Nav ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(10,10,15,0.9)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}>
        <div style={{
          maxWidth: 960, margin: '0 auto', padding: '0 20px',
          height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link href="/" style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15,
            color: '#fff', textDecoration: 'none', letterSpacing: '-0.02em',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ color: '#64748b', fontWeight: 400, fontSize: 13 }}>←</span>
            App Building Blueprint
          </Link>
          <Link href="/#pricing" style={{
            fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700,
            color: '#0a0a0f', background: 'linear-gradient(90deg, #a78bfa, #22d3ee)',
            padding: '7px 18px', borderRadius: 8, textDecoration: 'none',
            letterSpacing: '0.02em',
          }}>
            Get the Blueprint →
          </Link>
        </div>
      </nav>

      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
          background:
            'radial-gradient(ellipse at 20% 20%, rgba(124,58,237,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(6,182,212,0.06) 0%, transparent 60%)',
        }}
      />

      <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <header style={{ textAlign: 'center', padding: '76px 0 48px' }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11, letterSpacing: '0.3em',
            color: '#06b6d4', textTransform: 'uppercase',
            marginBottom: 16, opacity: 0.8,
          }}>
            // Full-Stack Reference
          </div>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
            fontWeight: 800, lineHeight: 1.05,
            background: 'linear-gradient(135deg, #fff 0%, #a78bfa 50%, #22d3ee 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 14,
          }}>
            App Building Blueprint
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.95rem', fontFamily: "'Space Mono', monospace" }}>
            everything your vibe-coded app is probably missing → check as you build
          </p>
        </header>

        {/* ── Launch Readiness Score ── */}
        <div style={{
          background: '#111118', border: `1px solid ${readinessPct > 0 ? readinessColor + '33' : '#1e1e2e'}`,
          borderRadius: 16, padding: '24px 28px',
          marginBottom: 24,
          display: 'flex', alignItems: 'center', gap: 28,
          transition: 'border-color 0.4s ease',
        }}>
          {/* Big score */}
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <div style={{
              fontSize: '2.8rem', fontWeight: 800, lineHeight: 1,
              color: readinessColor,
              transition: 'color 0.4s ease',
              fontFamily: "'Space Mono', monospace",
            }}>
              {readinessPct}%
            </div>
            <div style={{
              fontSize: 11, color: readinessColor, opacity: 0.8,
              fontFamily: "'Space Mono', monospace",
              marginTop: 4, whiteSpace: 'nowrap',
              transition: 'color 0.4s ease',
            }}>
              {readinessLabel}
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: 1, height: 48, background: '#1e1e2e', flexShrink: 0 }} />

          {/* Right side: bar + stats */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#64748b' }}>
                Launch readiness — required items only
              </span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#64748b' }}>
                {mustChecked} / {mustTotal} required
              </span>
            </div>
            <div style={{ height: 8, background: '#1e1e2e', borderRadius: 99, overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 99,
                background: `linear-gradient(90deg, ${readinessColor}, ${readinessPct >= 70 ? '#10b981' : readinessColor})`,
                width: `${readinessPct}%`,
                transition: 'width 0.5s ease',
              }} />
            </div>
            <div style={{
              marginTop: 10,
              fontFamily: "'Space Mono', monospace",
              fontSize: 10, color: '#475569',
            }}>
              {totalChecked} of {totalItems} total items checked
              {readinessPct < 100 && mustChecked < mustTotal && (
                <span style={{ color: '#f87171', marginLeft: 12 }}>
                  ↑ {mustTotal - mustChecked} required items left
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── Filter Bar ── */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
          {(['all', 'must', 'rec', 'opt'] as FilterType[]).map((f) => {
            const active = filter === f
            const label = f === 'all' ? 'All items' : tagConfig[f].label
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  padding: '6px 16px',
                  borderRadius: 99,
                  border: `1px solid ${active
                    ? f === 'all' ? '#7c3aed' : tagConfig[f as Tag].border
                    : '#1e1e2e'}`,
                  background: active
                    ? f === 'all' ? 'rgba(124,58,237,0.15)' : tagConfig[f as Tag].bg
                    : 'transparent',
                  color: active
                    ? f === 'all' ? '#a78bfa' : tagConfig[f as Tag].text
                    : '#64748b',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {label}
              </button>
            )
          })}
          <div style={{ flex: 1 }} />
          <button
            onClick={resetAll}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              padding: '6px 16px',
              borderRadius: 99,
              border: '1px solid #1e1e2e',
              background: 'transparent',
              color: '#64748b',
              cursor: 'pointer',
              transition: 'all 0.15s',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={e => {
              ;(e.target as HTMLButtonElement).style.borderColor = '#7c3aed'
              ;(e.target as HTMLButtonElement).style.color = '#e2e8f0'
            }}
            onMouseLeave={e => {
              ;(e.target as HTMLButtonElement).style.borderColor = '#1e1e2e'
              ;(e.target as HTMLButtonElement).style.color = '#64748b'
            }}
          >
            ↺ Reset all
          </button>
        </div>

        {/* ── Sections ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {sections.map((section) => {
            const sectionIds = getSectionItemIds(section.id)
            const sectionChecked = sectionIds.filter((id) => checked.has(id)).length
            const sectionTotal = sectionIds.length
            const sectionPct = sectionTotal > 0 ? Math.round((sectionChecked / sectionTotal) * 100) : 0
            const isOpen = openSections.has(section.id)
            const isDone = sectionChecked === sectionTotal

            // Count items matching filter
            const filteredCount = filter === 'all' ? sectionTotal :
              section.groups.reduce((t, g) => t + g.items.filter(i => i.tag === filter).length, 0)

            if (filter !== 'all' && filteredCount === 0) return null

            return (
              <div
                key={section.id}
                style={{
                  border: `1px solid ${isOpen ? 'rgba(124,58,237,0.3)' : '#1e1e2e'}`,
                  borderRadius: 16,
                  overflow: 'hidden',
                  background: '#111118',
                  transition: 'border-color 0.2s',
                }}
              >
                {/* Section Header */}
                <div
                  onClick={() => toggleSection(section.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '18px 24px',
                    cursor: 'pointer', userSelect: 'none',
                    borderBottom: isOpen ? '1px solid #1e1e2e' : '1px solid transparent',
                    transition: 'border-color 0.2s',
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: 42, height: 42, borderRadius: 11,
                    background: iconBg[section.color],
                    color: iconText[section.color],
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, flexShrink: 0,
                  }}>
                    {section.icon}
                  </div>

                  {/* Title + sub */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
                      {section.title}
                      {isDone && <span style={{ fontSize: 13 }}>✅</span>}
                    </div>
                    <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>{section.sub}</div>
                  </div>

                  {/* Per-section mini progress */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                    <div style={{ width: 80, height: 4, background: '#1e1e2e', borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        borderRadius: 99,
                        background: isDone
                          ? '#10b981'
                          : `linear-gradient(90deg, ${iconText[section.color]}, #06b6d4)`,
                        width: `${sectionPct}%`,
                        transition: 'width 0.4s ease',
                      }} />
                    </div>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 11, color: isDone ? '#10b981' : '#06b6d4',
                      minWidth: 40, textAlign: 'right',
                    }}>
                      {sectionChecked}/{sectionTotal}
                    </span>
                  </div>

                  {/* Chevron */}
                  <span style={{
                    color: '#64748b', fontSize: 13,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s',
                    display: 'inline-block', marginLeft: 4,
                  }}>
                    ▼
                  </span>
                </div>

                {/* Section Body */}
                {isOpen && (
                  <div style={{ padding: '12px 20px 20px' }}>
                    {section.groups.map((group, gi) => {
                      const visibleItems = filter === 'all'
                        ? group.items
                        : group.items.filter((i) => i.tag === filter)
                      if (visibleItems.length === 0) return null

                      return (
                        <div key={gi}>
                          <div style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: 10, letterSpacing: '0.2em',
                            textTransform: 'uppercase', color: '#64748b',
                            padding: '14px 12px 6px', opacity: 0.7,
                          }}>
                            {group.label}
                          </div>
                          {visibleItems.map((item, ii) => {
                            // Map back to the original index for stable IDs
                            const originalIdx = group.items.indexOf(item)
                            const itemId = `${section.id}-${gi}-${originalIdx}`
                            const isChecked = checked.has(itemId)
                            const tc = tagConfig[item.tag]

                            return (
                              <div
                                key={itemId}
                                onClick={() => toggleItem(itemId)}
                                style={{
                                  display: 'flex', alignItems: 'flex-start', gap: 12,
                                  padding: '10px 12px',
                                  borderRadius: 10,
                                  cursor: 'pointer',
                                  marginBottom: 2,
                                  opacity: isChecked ? 0.45 : 1,
                                  transition: 'opacity 0.2s, background 0.15s',
                                  background: 'transparent',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                              >
                                {/* Checkbox */}
                                <div style={{
                                  width: 18, height: 18, borderRadius: 5,
                                  border: isChecked ? '1.5px solid #7c3aed' : '1.5px solid #475569',
                                  background: isChecked ? '#7c3aed' : 'transparent',
                                  flexShrink: 0, marginTop: 2,
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  transition: 'all 0.18s',
                                  fontSize: 11, color: '#fff', fontWeight: 700,
                                }}>
                                  {isChecked && '✓'}
                                </div>

                                {/* Content */}
                                <div style={{ flex: 1 }}>
                                  <div style={{
                                    fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.4,
                                    textDecoration: isChecked ? 'line-through' : 'none',
                                    color: isChecked ? '#64748b' : '#e2e8f0',
                                    display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6,
                                  }}>
                                    {item.name}
                                    <span style={{
                                      fontFamily: "'Space Mono', monospace",
                                      fontSize: 10, padding: '2px 8px', borderRadius: 99,
                                      background: tc.bg, color: tc.text,
                                      border: `1px solid ${tc.border}`,
                                      letterSpacing: '0.03em',
                                    }}>
                                      {tc.label}
                                    </span>
                                  </div>
                                  <div style={{
                                    fontSize: '0.77rem', color: '#64748b',
                                    marginTop: 3, lineHeight: 1.55,
                                  }}>
                                    {item.desc}
                                  </div>
                                  {item.tools && (
                                    <div style={{
                                      marginTop: 6,
                                      display: 'inline-flex', alignItems: 'center', gap: 5,
                                      fontFamily: "'Space Mono', monospace",
                                      fontSize: 10, color: '#06b6d4',
                                      background: 'rgba(6,182,212,0.08)',
                                      border: '1px solid rgba(6,182,212,0.15)',
                                      borderRadius: 6, padding: '2px 8px',
                                    }}>
                                      🔧 {item.tools}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* ── Legend ── */}
        <div style={{
          display: 'flex', gap: 20, flexWrap: 'wrap',
          padding: '28px 0 0',
          borderTop: '1px solid #1e1e2e',
          marginTop: 32,
        }}>
          {(['must', 'rec', 'opt'] as Tag[]).map((t) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: '#64748b' }}>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10, padding: '2px 8px', borderRadius: 99,
                background: tagConfig[t].bg, color: tagConfig[t].text,
                border: `1px solid ${tagConfig[t].border}`,
              }}>
                {tagConfig[t].label}
              </span>
              <span>
                {t === 'must' ? 'must have before launch' : t === 'rec' ? 'strongly advised' : 'nice to have'}
              </span>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center', marginTop: 48,
          fontFamily: "'Space Mono', monospace",
          fontSize: 11, color: '#2d3748',
        }}>
          click any item to check it off · progress saves automatically
        </div>

      </div>
    </div>
  )
}
