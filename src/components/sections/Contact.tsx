/**  
 * Contact.tsx  
 * Contact section with a simple form (no backend) and contact details.
 */  
import React, { useState } from 'react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

/**
 * Contact
 * Provides a message form (uses mailto for demo) and essential contact info.
 */
export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  /**
   * handleSubmit
   * Opens a mailto link containing the message details; replace with API in production.
   */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent('Inquiry: Cassia Konveksi - Jasa CMT & Plisket Bandung')
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:cassiamandirisejahtera@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="bg-zinc-950">
      <Container className="py-16 md:py-20">
        <SectionHeading
          title="Hubungi Cassia"
          subtitle="Kami siap membantu kebutuhan produksi apparel brand Anda."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-zinc-300">Nama</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Anda"
                className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-500"
                aria-label="Nama"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-zinc-300">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@domain.com"
                className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-500"
                aria-label="Email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-zinc-300">Pesan</label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ceritakan kebutuhan Anda..."
                className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 min-h-[120px]"
                aria-label="Pesan"
              />
            </div>
            <div className="flex gap-3">
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white">
                Kirim Pesan
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-white"
              >
                <a href="https://wa.me/6282297807848" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </form>

          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
              <div className="aspect-[4/3]">
                <img
                  src="https://pub-cdn.sider.ai/u/U0W8HK2EWKL/web-coder/68fc1f47584c7e7f6063c0af/resource/d3999d89-d208-4fed-a5f8-b376e6897d95.png"
                  className="object-cover h-full w-full"
                  alt="Lokasi pabrik Cassia Konveksi di Cibeureum, Cimahi Selatan"
                />
              </div>
            </div>
            <ul className="text-sm text-zinc-300 space-y-2">
              <li>
                Alamat:{' '}
                <a
                  className="text-emerald-400 hover:underline"
                  href="https://maps.app.goo.gl/Vv2wzSE4bGKR6kHa9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cibeureum, Cimahi Selatan (Google Maps)
                </a>
              </li>
              <li>
                Instagram:{' '}
                <a
                  className="text-emerald-400 hover:underline"
                  href="https://instagram.com/cassiakonveksi"
                  target="_blank"
                  rel="noreferrer"
                >
                  @konveksicassia
                </a>
              </li>
              <li>
                WhatsApp:{' '}
                <a
                  className="text-emerald-400 hover:underline"
                  href="https://wa.me/6282297807848"
                  target="_blank"
                  rel="noreferrer"
                >
                  +62 822-9780-7848
                </a>
              </li>
              <li>
                Email:{' '}
                <a className="text-emerald-400 hover:underline" href="mailto:cassiamandirisejahtera@gmail.com">
                  cassiamandirisejahtera@gmail.com
                </a>
              </li>
              <li>Jam: Senin–Sabtu, 09.00–18.00</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact