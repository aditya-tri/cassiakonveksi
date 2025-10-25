/**  
 * Process.tsx  
 * Visual step-by-step process (7 steps) to set clear expectations for clients.
 */  
import React from 'react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { Card, CardContent } from '../ui/card'
import { FileCheck2, Ruler, Scissors, Shirt, PackageCheck, ShieldCheck, Package, Truck } from 'lucide-react'

/** Step item shape */  
interface Step {
  /** Step title */
  title: string
  /** Short description */
  desc: string
  /** Icon node */
  icon: React.ReactNode
}

/**
 * Process
 * Outlines the production flow to improve transparency and trust.
 */
export function Process() {
  const steps: Step[] = [
    { title: '1. Sampling', desc: 'Tinjau desain & buat prototipe agar sesuai ekspektasi.', icon: <Ruler className="h-5 w-5 text-emerald-500" /> },
    { title: '2. Cutting', desc: 'Pemotongan kain presisi menurut pola & spesifikasi.', icon: <Scissors className="h-5 w-5 text-emerald-500" /> },
    { title: '3. Jahit', desc: 'Operator terampil menjahit dengan detail & konsistensi.', icon: <Shirt className="h-5 w-5 text-emerald-500" /> },
    { title: '4. Finishing', desc: 'Obras, overdeck, trimming benang, dan penyelesaian akhir.', icon: <PackageCheck className="h-5 w-5 text-emerald-500" /> },
    { title: '5. Quality Control', desc: 'QC menyeluruh untuk standar kualitas Cassia.', icon: <ShieldCheck className="h-5 w-5 text-emerald-500" /> },
    { title: '6. Packing', desc: 'Pengemasan rapi & aman untuk menjaga produk.', icon: <Package className="h-5 w-5 text-emerald-500" /> },
    { title: '7. Pengiriman', desc: 'Pengiriman tepat waktu sesuai alamat tujuan.', icon: <Truck className="h-5 w-5 text-emerald-500" /> },
  ]

  return (
    <section id="process" className="bg-black">
      <Container className="py-16 md:py-20">
        <SectionHeading
          title="Proses Produksi Cassia"
          subtitle="Sampling hingga pengiriman: transparan, profesional, dan berorientasi kualitas."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {steps.map((st) => (
            <Card key={st.title} className="border-zinc-800 bg-zinc-900/60">
              <CardContent className="p-6 space-y-3">
                <div className="p-2 inline-flex rounded-md bg-zinc-800">{st.icon}</div>
                <h4 className="text-zinc-100 font-medium">{st.title}</h4>
                <p className="text-zinc-400 text-sm">{st.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Process