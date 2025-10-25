/**  
 * CTA.tsx  
 * Prominent call-to-action strip to nudge users to contact via WhatsApp.  
 */  
import React from 'react'  
import Container from '../common/Container'  
import { Button } from '../ui/button'  
  
/**  
 * CTA  
 * Dark strip with strong contrast and clear action.  
 */  
export function CTA() {  
  return (  
    <section className="bg-gradient-to-r from-zinc-950 to-black border-y border-zinc-900">  
      <Container className="py-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 justify-between">  
        <div>  
          <h3 className="text-zinc-100 text-xl md:text-2xl font-semibold">Siap mulai produksi?</h3>  
          <p className="text-zinc-400 text-sm">Konsultasikan desain, ukuran, dan target waktu Anda.</p>  
        </div>  
        <Button asChild className="bg-emerald-600 hover:bg-emerald-500 text-white">  
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">Chat WhatsApp Sekarang</a>  
        </Button>  
      </Container>  
    </section>  
  )  
}  
  
export default CTA