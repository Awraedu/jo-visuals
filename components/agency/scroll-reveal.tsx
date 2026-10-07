'use client'

import { useEffect } from 'react'

export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      root.classList.add('has-js')
      elements.forEach((element) => element.classList.add('is-visible'))
      return () => root.classList.remove('has-js')
    }

    root.classList.add('has-js')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -48px 0px', threshold: 0.08 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      root.classList.remove('has-js')
    }
  }, [])

  return null
}
