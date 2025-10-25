/**  
 * SectionHeading.tsx  
 * Reusable section header with title and optional subtitle and alignment.  
 */  
import React from 'react'  
import clsx from 'clsx'  
  
/** Props for SectionHeading */  
interface SectionHeadingProps {  
  /** Main title */  
  title: string  
  /** Optional subtitle */  
  subtitle?: string  
  /** Text alignment */  
  align?: 'left' | 'center'  
  /** Additional className */  
  className?: string  
}  
  
/**  
 * SectionHeading  
 * Displays a section title and an optional subtitle with consistent spacing.  
 */  
export function SectionHeading({ title, subtitle, align = 'center', className }: SectionHeadingProps) {  
  return (  
    <div className={clsx('space-y-3', align === 'center' ? 'text-center' : 'text-left', className)}>  
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">{title}</h2>  
      {subtitle ? (  
        <p className="text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>  
      ) : null}  
    </div>  
  )  
}  
  
export default SectionHeading