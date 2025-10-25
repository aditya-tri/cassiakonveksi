/**  
 * Services.tsx  
 * Services grid showcasing Cassia core offerings: CMT and Plisket, with flexibility highlights.
 */  
import React from 'react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Scissors, Shirt, Ruler, Boxes, Sparkles } from 'lucide-react'

/** Service item definition */  
interface Service {
  /** Title of service */
  title: string
  /** Description */
  desc: string
  /** Icon component */
  icon: React.ReactNode
  /** Tag text */
  tag?: string
}

/**
 * Services
 * Displays key services using cards with dark theme styling.
 */
export function Services() {
  const services: Service[] = [
    {
      title: 'CMT (Cut, Make, Trim)',
      desc: 'Layanan CMT end-to-end: cutting sesuai marker, sewing presisi, trimming &amp; finishing rapi.',
      icon: <Scissors className="h-5 w-5 text-emerald-500" />,
      tag: 'Utama',
    },
    {
      title: 'Plisket',
      desc: 'Plisket rok dan hijab dengan ketebalan dan jarak lipit konsisten, cocok untuk koleksi Muslimah.',
      icon: <Ruler className="h-5 w-5 text-emerald-500" />,
      tag: 'Spesialis',
    },
    {
      title: 'Pakaian Olahraga',
      desc: 'Produksi activewear pria &amp; wanita (legging, bra, jersey) dengan material performa.',
      icon: <Shirt className="h-5 w-5 text-emerald-500" />,
    },
    {
      title: 'Jaket &amp; Outer',
      desc: 'Jaket, hoodie, windbreaker hingga outer ringan dengan detail rapi dan QC berlapis.',
      icon: <Boxes className="h-5 w-5 text-emerald-500" />,
    },
    {
      title: 'Busana Muslimah',
      desc: 'Gamis, dress, rok, tunik, dan hijab. Fleksibel dari sampling sampai produksi massal.',
      icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
    },
  ]

  const highlights = [
    'MOQ fleksibel',
    'Lead time realistis',
    'Pengadaan aksesori opsional',
    'Support grading size',
  ]

  return (
    <section id="services" className="bg-zinc-950 border-t border-zinc-900">
      <Container className="py-16 md:py-20">
        <SectionHeading
          title="Layanan Cassia"
          subtitle="Solusi produksi CMT &amp; Plisket untuk brand olahraga, Muslimah, hingga jaket."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="border-zinc-800 bg-zinc-900/60">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="p-2 rounded-md bg-zinc-800">{s.icon}</div>
                <CardTitle className="text-zinc-100">{s.title}</CardTitle>
                {s.tag ? (
                  <Badge variant="outline" className="ml-auto border-emerald-700 text-emerald-400">
                    {s.tag}
                  </Badge>
                ) : null}
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-sm">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <span
              key={h}
              className="text-xs px-2 py-1 rounded border border-zinc-800 bg-zinc-900 text-zinc-300"
            >
              {h}
            </span>
          ))}
          <a
            href="#contact"
            className="text-xs px-2 py-1 rounded border border-emerald-700 text-emerald-400 hover:bg-emerald-950/30"
          >
            Konsultasi kebutuhan Anda →
          </a>
        </div>
      </Container>
    </section>
  )
}

export default Services