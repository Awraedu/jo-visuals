'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function ScrollReveal() {
  const loaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
    const loader = loaderRef.current
    const root = document.documentElement
    root.classList.add('has-js')

    const context = gsap.context(() => {
      const heroElements = gsap.utils.toArray<HTMLElement>('.hero .reveal')
      const intro = gsap.timeline()

      if (loader) {
        const brand = loader.querySelector<HTMLElement>('.intro-loader__brand')
        const rule = loader.querySelector<HTMLElement>('.intro-loader__rule')
        const descriptor = loader.querySelector<HTMLElement>('.intro-loader__descriptor')

        if (brand && rule && descriptor) {
          intro
            .fromTo(brand, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.58, ease: 'power3.out' })
            .fromTo(rule, { scaleX: 0 }, { scaleX: 1, duration: 0.48, ease: 'power2.inOut' }, '-=0.12')
            .fromTo(
              descriptor,
              { autoAlpha: 0, y: 10 },
              { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out' },
              '-=0.18',
            )
            .to(loader, { clipPath: 'inset(0 0 100% 0)', duration: 0.76, ease: 'power4.inOut' }, '+=0.28')
            .set(loader, { autoAlpha: 0, display: 'none' })
            .addLabel('hero-reveal')
        }
      }

      heroElements.forEach((element, index) => {
        intro.fromTo(
          element,
          { autoAlpha: 0, y: 23 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.68,
            ease: 'power3.out',
            clearProps: 'opacity,transform,visibility',
            onComplete: () => element.classList.add('is-visible'),
          },
          `hero-reveal+=${index * 0.09}`,
        )
      })

      gsap.utils
        .toArray<HTMLElement>('.reveal')
        .filter((element) => !element.closest('.hero'))
        .forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.78,
              delay: Number(element.dataset.delay ?? 0),
              ease: 'power3.out',
              clearProps: 'opacity,transform,visibility',
              onComplete: () => element.classList.add('is-visible'),
              scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                once: true,
              },
            },
          )
        })

      const hero = document.querySelector<HTMLElement>('.hero')
      const heroImage = document.querySelector<HTMLElement>('.hero-image')

      if (hero && heroImage) {
        gsap.fromTo(
          heroImage,
          { scale: 1.04, yPercent: 0 },
          {
            scale: 1.09,
            yPercent: 4,
            ease: 'none',
            scrollTrigger: {
              trigger: hero,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.7,
            },
          },
        )
      }

      ScrollTrigger.refresh()
    }, document.body)

    const handleAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return
      }

      if (!(event.target instanceof Element)) return

      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link || link.target === '_blank') return

      const hash = link.getAttribute('href')
      const target = hash ? document.getElementById(hash.slice(1)) : null
        if (!hash || hash === '#' || !target) return

      event.preventDefault()
      if (window.location.hash !== hash) window.history.pushState(null, '', hash)

      if (event.detail === 0) {
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
        target.focus({ preventScroll: true })
      }

      const headerOffset = document.querySelector<HTMLElement>('.site-header')?.offsetHeight ?? 0
      gsap.killTweensOf(window)
      gsap.to(window, {
        duration: 1.05,
        ease: 'power3.inOut',
        overwrite: 'auto',
        scrollTo: { y: target, offsetY: headerOffset + 12, autoKill: true },
      })
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      context.revert()
      root.classList.remove('has-js')
    }
  }, [])

  return (
    <div
      className="intro-loader"
      data-intro-loader
      ref={loaderRef}
      role="status"
      aria-label="Loading Jo Visuals"
    >
      <div className="intro-loader__content">
        <span className="intro-loader__brand">
          jo visuals<span aria-hidden="true">.</span>
        </span>
        <span className="intro-loader__rule" aria-hidden="true" />
        <span className="intro-loader__descriptor">BRANDING · ADVERTISING · DIGITAL PRODUCTION</span>
      </div>
    </div>
  )
}
