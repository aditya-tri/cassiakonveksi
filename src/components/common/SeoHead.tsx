/** 
 * SeoHead.tsx
 * Lightweight SEO helper to set document title and meta tags without external libs.
 */

import React from 'react'

/** Props for SeoHead */
interface SeoHeadProps {
  /** Page title shown in the browser tab */
  title: string
  /** Meta description for search engines */
  description: string
  /** Comma-joined keywords for meta keywords tag */
  keywords?: string[]
}

/**
 * setOrCreateMeta
 * Ensures a meta tag (by name or property) exists and sets its content.
 */
function setOrCreateMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * SeoHead
 * Imperatively updates document head for SEO on mount/update.
 */
export default function SeoHead({ title, description, keywords }: SeoHeadProps) {
  React.useEffect(() => {
    document.title = title
    setOrCreateMeta('name', 'description', description)
    if (keywords?.length) {
      setOrCreateMeta('name', 'keywords', keywords.join(', '))
    }
    // Basic Open Graph fallbacks
    setOrCreateMeta('property', 'og:title', title)
    setOrCreateMeta('property', 'og:description', description)
  }, [title, description, keywords])

  return null
}
