/**  
 * Home.tsx  
 * Landing page for Cassia Konveksi (Cibeureum, Cimahi Selatan) with SEO and main sections.
 */  
import React from 'react'
import SiteHeader from '../components/layout/SiteHeader'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Portfolio from '../components/sections/Portfolio'
import CTA from '../components/sections/CTA'
import Contact from '../components/sections/Contact'
import SiteFooter from '../components/layout/SiteFooter'
import SeoHead from '../components/common/SeoHead'

/**
 * HomePage
 * Assembles all sections and injects SEO metadata.
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <SeoHead
        title="CASSIA KONVEKSI BANDUNG"
        description="Jasa CMT di Bandung & Cimahi untuk sportswear, womenswear (atasan–bawahan), kaos, dan jaket. Dari sampling sampai mass production: pola presisi, finishing rapi, timeline jelas. Konsultasi cepat via WhatsApp."
        keywords={[
          'CMT Bandung',
          'Konveksi Bandung',
          'Sportswear Bandung',
          'Womenswear Bandung',
          'Kaos Bandung',
          'Jaket Bandung',
          'Konveksi Cimahi',
        ]}
      />
      <SiteHeader />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <CTA />
      <Contact />
      <SiteFooter />
    </div>
  )
}
