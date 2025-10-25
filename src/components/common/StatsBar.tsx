/**  
 * StatsBar.tsx  
 * A horizontal stat bar to show credibility highlights (years, clients, volume).  
 */  
import React from 'react'  
import Container from '../common/Container'  
  
/** Single stat item */  
interface Stat {  
  /** Stat value text */  
  value: string  
  /** Stat label text */  
  label: string  
}  
  
/**  
 * StatsBar  
 * Shows a set of key numbers with strong contrast on dark background.  
 */  
export function StatsBar() {  
  const stats: Stat[] = [  
    { value: '10+ Tahun', label: 'Pengalaman' },  
    { value: '100+ Brand', label: 'Dipercaya' },  
    { value: '50K+ Pcs', label: 'Produksi/Tahun' },  
    { value: '7-14 Hari', label: 'Lead Time Cepat' },  
  ]  
  
  return (  
    <div className="bg-zinc-900/70 border-t border-zinc-800">  
      <Container className="py-6">  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">  
          {stats.map((s) => (  
            <div key={s.label} className="text-center">  
              <div className="text-xl md:text-2xl font-semibold text-zinc-100">{s.value}</div>  
              <div className="text-zinc-400 text-sm">{s.label}</div>  
            </div>  
          ))}  
        </div>  
      </Container>  
    </div>  
  )  
}  
  
export default StatsBar