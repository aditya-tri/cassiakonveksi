/** 
 * Hero.tsx
 * Primary hero section with strong headline, subtext, CTAs, and visual collage.
 * Entire section is clickable (and keyboard-accessible) to scroll to the main title (H1).
 */
import React from 'react'
import Container from '../common/Container'
import { Button } from '../ui/button'

/**
 * Hero
 * Dark gradient hero with clear CTAs & quick links (Services, Process, Portfolio, Contact).
 * Interaction: Clicking anywhere on the hero background navigates smoothly to the H1.
 */
export function Hero() {
  /**
   * handleNavigate
   * Smoothly scrolls the viewport to the H1 title inside the hero.
   * Avoids updating hash because the app uses HashRouter for routing.
   */
  const handleNavigate = React.useCallback(() => {
    const el = document.getElementById('home-title')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  /** 
   * handleKeyDown
   * Allows keyboard users (Enter/Space) to trigger the same scroll.
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleNavigate()
    }
  }

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-zinc-950 to-black cursor-pointer select-none"
      role="button"
      tabIndex={0}
      aria-label="Pergi ke judul utama"
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-600 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-zinc-700 blur-3xl" />
      </div>

      <Container className="relative py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
            Cassia Konveksi • Cibeureum, Cimahi Selatan
          </div>
          <h1
            id="home-title"
            className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100"
          >
            Partner CMT andalan untuk brand olahraga dan womenswear
          </h1>
          <p className="text-zinc-400 max-w-xl">
            Pola presisi, finishing rapi, dan timeline yang bisa kamu andalkan.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-500 text-white">
              <a
                href="https://wa.me/6282297807848"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              >
                Diskusikan Kebutuhan
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-white"
            >
              <a
                href="#portfolio"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              >
                Lihat Portofolio
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-3 flex-wrap text-xs text-zinc-400">
            <a
              href="https://instagram.com/cassiakonveksi"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:text-white underline-offset-4 hover:underline"
            >
              Instagram @cassiakonveksi
            </a>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <a
              href="https://maps.app.goo.gl/Vv2wzSE4bGKR6kHa9"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:text-white underline-offset-4 hover:underline"
            >
              Lihat Lokasi Pabrik (Maps)
            </a>
          </div>

          <div className="flex items-center gap-2 flex-wrap text-xs text-zinc-400">
            <a
              href="#services"
              onClick={(e) => e.stopPropagation()}
              className="px-2 py-1 rounded border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300"
            >
              Layanan
            </a>
            <a
              href="#process"
              onClick={(e) => e.stopPropagation()}
              className="px-2 py-1 rounded border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300"
            >
              Proses
            </a>
            <a
              href="#portfolio"
              onClick={(e) => e.stopPropagation()}
              className="px-2 py-1 rounded border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300"
            >
              Portofolio
            </a>
            <a
              href="#contact"
              onClick={(e) => e.stopPropagation()}
              className="px-2 py-1 rounded border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300"
            >
              Kontak
            </a>
          </div>

          <div className="flex items-center gap-6 text-zinc-400 text-sm">
            <span>MOQ fleksibel</span>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span>Harga fair</span>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span>Kontrol kualitas menyeluruh</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
              <img
                src="https://pub-cdn.sider.ai/u/U0W8HK2EWKL/web-coder/68fc1f47584c7e7f6063c0af/resource/d0b2b5ca-16e4-46e2-ba27-c96864b07c8b.jpg"
                className="object-cover h-full w-full"
                alt="Jasa CMT Bandung Cassia - proses penjahitan"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
              <img
                src="https://pub-cdn.sider.ai/u/U0W8HK2EWKL/web-coder/68fc1f47584c7e7f6063c0af/resource/45ed756f-1abb-4a28-b071-71bcd5d0af3f.jpg"
                className="object-cover h-full w-full"
                alt="Konveksi CMT Cassia - detail mesin dan material"
              />
            </div>
          </div>
          <div className="space-y-4 pt-6">
            <div className="aspect-square overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
              <img
                src="https://pub-cdn.sider.ai/u/U0W8HK2EWKL/web-coder/68fc1f47584c7e7f6063c0af/resource/e900efc1-788c-46ef-a151-1c8e5ac9f505.jpg"
                className="object-cover h-full w-full"
                alt="Produksi pakaian olahraga Cassia"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
              <img
                src="https://pub-cdn.sider.ai/u/U0W8HK2EWKL/web-coder/68fc1f47584c7e7f6063c0af/resource/a8cb0444-3d79-44f6-838f-9054fe714666.jpg"
                className="object-cover h-full w-full"
                alt="Busana Muslimah dan plisket oleh Cassia"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
