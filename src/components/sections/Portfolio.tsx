/**  
 * Portfolio.tsx  
 * A grid gallery to showcase past work; images include SEO-friendly alt text.
 */  
import React from 'react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

/**
 * Portfolio
 * Responsive image grid with name and short description.
 */
export function Portfolio() {
  const items = [
    {
      name: 'Sportswear Women',
      desc: 'Legging dan sports bra performa tinggi.',
      src: 'https://pub-cdn.sider.ai/u/U0W8HK2EWKL/web-coder/68fc1f47584c7e7f6063c0af/resource/dbba6cce-6483-4980-b7c0-ed3afb25bd73.jpg',
      alt: 'Pabrik pakaian olahraga wanita Bandung - Cassia Konveksi',
    },
    {
      name: 'Sportswear Men',
      desc: 'Jersey dan training top breathable.',
      src: 'https://pub-cdn.sider.ai/u/U0W8HK2EWKL/web-coder/68fc1f47584c7e7f6063c0af/resource/a66569c4-4d9f-4832-b13c-d143a4c6bb34.jpg',
      alt: 'Pabrik pakaian olahraga pria Bandung - Cassia Konveksi',
    },
    {
      name: 'Muslimah Dress dan Gamis',
      desc: 'Potongan jatuh, detail rapi.',
      src: 'https://pub-cdn.sider.ai/u/U0W8HK2EWKL/web-coder/68fc1f47584c7e7f6063c0af/resource/f9997d9c-4308-45e0-9587-7ffba61e2e98.jpg',
      alt: 'Konveksi pakaian Muslimah Bandung - Cassia Konveksi',
    },
    {
      name: 'Hijab dan Rok Plisket',
      desc: 'Lipit konsisten dan nyaman dipakai.',
      src: 'https://pub-cdn.sider.ai/u/U0W8HK2EWKL/web-coder/68fc1f47584c7e7f6063c0af/resource/20c25568-6ff2-43a0-8c6b-5329915b3a5f.jpg',
      alt: 'Plisket hijab dan rok - Cassia Konveksi Bandung',
    },
    {
      name: 'Uniform dan Workwear',
      desc: 'Kuat, fungsional, siap produksi.',
      src: 'https://pub-cdn.sider.ai/u/U0W8HK2EWKL/web-coder/68fc1f47584c7e7f6063c0af/resource/5372130f-cd0c-468a-97fa-84ef42e21852.jpg',
      alt: 'Konveksi seragam kerja Bandung - Cassia Konveksi',
    },
    {
      name: 'Jacket dan Outer',
      desc: 'Hoodie dan windbreaker presisi.',
      src: 'https://pub-cdn.sider.ai/u/U0W8HK2EWKL/web-coder/68fc1f47584c7e7f6063c0af/resource/ed37dcf7-8740-4f8d-a904-03025f5faa1a.jpg',
      alt: 'Konveksi jaket dan outer Bandung - Cassia Konveksi',
    },
  ]

  return (
    <section id="portfolio" className="bg-zinc-950 border-t border-zinc-900">
      <Container className="py-16 md:py-20">
        <SectionHeading
          title="Portofolio"
          subtitle="Cuplikan hasil produksi untuk brand olahraga, Muslimah, dan kategori lainnya."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <figure
              key={it.name}
              className="group overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/60"
            >
              <div className="aspect-[4/3]">
                <img
                  src={it.src}
                  className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                  alt={it.alt}
                />
              </div>
              <figcaption className="px-4 py-3 text-zinc-300 text-sm">
                <div className="font-medium text-zinc-100">{it.name}</div>
                <div className="text-zinc-400">{it.desc}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Portfolio