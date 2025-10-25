/** 
 * SiteFooter.tsx
 * Footer dengan logo, deskripsi singkat, dan link penting. 
 * Navigasi footer kini meniru perilaku navbar: smooth-scroll ke section tanpa mengubah HashRouter route.
 */

import React from 'react'
import Container from '../common/Container'
import { Instagram, Mail, MapPin, Phone } from 'lucide-react'

/**
 * scrollToId
 * Smooth-scroll ke elemen berdasarkan id, menambahkan offset untuk sticky header.
 * Menjaga URL tetap "#/" agar tidak bentrok dengan HashRouter.
 */
function scrollToId(id: string) {
  const el = typeof document !== 'undefined' ? document.getElementById(id) : null
  if (!el) return

  const headerOffset = 64
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset

  window.scrollTo({ top, behavior: 'smooth' })

  // Pertahankan hash route "#/"
  try {
    const base = window.location.href.split('#')[0]
    window.history.replaceState(null, '', `${base}#/`)
  } catch {
    // no-op
  }
}

/**
 * handleNavClick
 * Intercept klik anchor agar tidak mengganti hash, lalu lakukan smooth-scroll.
 */
function handleNavClick(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  href: string
) {
  e.preventDefault()
  const id = href.startsWith('#') ? href.slice(1) : href
  scrollToId(id)
}

/**
 * SiteFooter
 * Menampilkan identitas brand dan kontak, plus navigasi internal dengan smooth-scroll.
 */
export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-900 bg-black text-zinc-300">
      <Container className="py-10 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <a href="#/" className="inline-flex items-center gap-2" aria-label="Cassia Konveksi - Beranda">
            <img
              src="https://pub-cdn.sider.ai/u/U0W8HK2EWKL/web-coder/68fc1f47584c7e7f6063c0af/resource/02b46e0d-a318-4440-b95e-b9e2d6b6072c.png"
              alt="Logo Cassia Konveksi - Konveksi CMT Bandung"
              title="Cassia Konveksi"
              className="h-7 w-auto object-contain"
              width={140}
              height={28}
            />
          </a>
          <p className="text-sm text-zinc-400 max-w-sm">
            Cassia Konveksi melayani Jasa CMT & Plisket di Bandung dan Cimahi. Spesialis pakaian olahraga,
            busana Muslimah, rok/gaun/gamis, dan jaket.
          </p>
        </div>

        <div>
          <h4 className="text-zinc-100 font-medium mb-3">Navigasi</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="hover:text-white"
            >
              Layanan
            </a>
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, '#process')}
              className="hover:text-white"
            >
              Proses
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, '#portfolio')}
              className="hover:text-white"
            >
              Portofolio
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hover:text-white"
            >
              Kontak
            </a>
          </nav>
        </div>

        <div>
          <h4 className="text-zinc-100 font-medium mb-3">Kontak</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-emerald-500" />
              <a href="https://wa.me/6282297807848" target="_blank" rel="noreferrer" className="hover:text-white">
                +62 822-9780-7848 (WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-500" />
              <a href="mailto:cassiamandirisejahtera@gmail.com" className="hover:text-white">
                cassiamandirisejahtera@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-emerald-500" />
              <a href="https://instagram.com/cassiakonveksi" target="_blank" rel="noreferrer" className="hover:text-white">
                @cassiakonveksi
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-500" />
              <a
                href="https://maps.app.goo.gl/Vv2wzSE4bGKR6kHa9"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Cibeureum, Cimahi Selatan (Google Maps)
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-zinc-900">
        <Container className="py-4 text-xs text-zinc-500 flex items-center justify-between flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Cassia Konveksi. All rights reserved.</span>
          <span>Jasa CMT Bandung • Konveksi Pakaian Olahraga & Muslimah</span>
        </Container>
      </div>
    </footer>
  )
}
