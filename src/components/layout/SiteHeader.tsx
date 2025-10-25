/** 
 * SiteHeader.tsx
 * Sticky, responsive header with brand logo and section anchors.
 * Update: Match site-wide dark theme — dark translucent header (zinc-950) + subtle blur.
 * Add a soft capsule behind the logo to ensure visibility on dark backgrounds.
 */

import React from 'react'
import Container from '../common/Container'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'

/** Navigation item shape */
interface NavItem {
  /** Anchor href to section id (e.g., "#services") */
  href: string
  /** Visible label */
  label: string
}

/**
 * scrollToId
 * Smoothly scroll to an element by id with a top offset to account for sticky header.
 * Keeps the URL hash for react-router's HashRouter stable (i.e., "#/").
 */
function scrollToId(id: string) {
  const el = typeof document !== 'undefined' ? document.getElementById(id) : null
  if (!el) return

  // Approximate sticky header height (h-14 => 56px) + small breathing room
  const headerOffset = 64
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset

  window.scrollTo({ top, behavior: 'smooth' })

  // Preserve HashRouter route ("#/")
  try {
    const base = window.location.href.split('#')[0]
    window.history.replaceState(null, '', `${base}#/`)
  } catch {
    // no-op
  }
}

/**
 * SiteHeader
 * Displays brand logo at left, section links at center/right, and WhatsApp CTA.
 * Includes a mobile menu toggle for small screens.
 * Link clicks are intercepted to perform smooth-scroll instead of changing the hash route.
 * Visual: Dark header to match the site; logo sits on a soft capsule to ensure contrast.
 */
export default function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  /** List of section anchors for internal navigation */
  const nav: NavItem[] = [
    { href: '#services', label: 'Layanan' },
    { href: '#process', label: 'Proses' },
    { href: '#portfolio', label: 'Portofolio' },
    { href: '#contact', label: 'Kontak' },
  ]

  /** Toggle mobile drawer visibility */
  function toggle() {
    setOpen((v) => !v)
  }

  /** Close mobile drawer when a nav item is selected */
  function close() {
    setOpen(false)
  }

  /**
   * handleNavClick
   * Prevent route change, then smooth-scroll to target section id.
   */
  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) {
    e.preventDefault()
    const id = href.startsWith('#') ? href.slice(1) : href
    scrollToId(id)
    close()
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/85 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70">
      <Container className="flex h-14 items-center justify-between">
        <a href="#/" className="inline-flex items-center gap-3" aria-label="Cassia Konveksi - Beranda">
          {/* Capsule behind logo for contrast on dark navbar */}
          <span className="inline-flex items-center rounded-md ring-1 ring-white/10 bg-black/80 p-1">
            <img
              src="https://pub-cdn.sider.ai/u/U0W8HK2EWKL/web-coder/68fc1f47584c7e7f6063c0af/resource/51f4b532-788c-42d7-8a03-599b1e03d62b.png"
              alt="Logo Cassia Konveksi"
              title="Cassia Konveksi"
              className="h-8 md:h-9 w-auto object-contain"
              width={160}
              height={36}
            />
          </span>
          <span className="hidden sm:inline text-zinc-100 font-semibold tracking-tight">
            Cassia Konveksi
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={(e) => handleNavClick(e, n.href)}
              className="text-sm text-zinc-300 hover:text-white"
            >
              {n.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-emerald-600 hover:bg-emerald-500 text-white"
          >
            <a href="https://wa.me/6282297807848" target="_blank" rel="noreferrer" aria-label="WhatsApp Cassia Konveksi">
              WhatsApp
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded border border-zinc-700 bg-zinc-900/70 text-zinc-200 hover:bg-zinc-900"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={toggle}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile panel */}
      {open ? (
        <div id="mobile-nav" className="md:hidden border-t border-zinc-800 bg-zinc-950">
          <Container className="py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => handleNavClick(e, n.href)}
                className="px-2 py-2 rounded text-sm text-zinc-300 hover:text-white hover:bg-zinc-900/80"
              >
                {n.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-emerald-600 hover:bg-emerald-500 text-white"
            >
              <a href="https://wa.me/6282297807848" target="_blank" rel="noreferrer" onClick={close}>
                WhatsApp
              </a>
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
