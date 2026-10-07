'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  type ComponentProps,
  type MouseEvent,
  type MouseEventHandler,
  type ReactNode,
} from 'react'
import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

type FlipSnapshot = ReturnType<typeof Flip.getState>

type PendingNavigation = {
  pathname: string
  hash: string
  sharedElementId?: string
  flipState?: FlipSnapshot
}

type NavigationContextValue = (href: string, sharedElementId?: string) => void

const NavigationTransitionContext = createContext<NavigationContextValue | null>(null)

function findSharedElement(id: string) {
  return Array.from(document.querySelectorAll<HTMLElement>('[data-flip-id]')).find(
    (element) => element.dataset.flipId === id,
  )
}

type ProviderProps = {
  children: ReactNode
}

export function NavigationTransitionProvider({ children }: ProviderProps) {
  const router = useRouter()
  const pathname = usePathname()
  const pendingNavigation = useRef<PendingNavigation | null>(null)
  const previousPathname = useRef(pathname)

  useLayoutEffect(() => {
    const pathnameChanged = previousPathname.current !== pathname
    previousPathname.current = pathname
    if (!pathnameChanged) return

    gsap.registerPlugin(Flip, ScrollToPlugin)

    const pending = pendingNavigation.current?.pathname === pathname ? pendingNavigation.current : null
    pendingNavigation.current = null
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let entryStarted = false

    const animatePageEntry = () => {
      if (entryStarted) return
      entryStarted = true
      if (reduceMotion) return

      const routeItems = gsap.utils.toArray<HTMLElement>('[data-route-enter] [data-route-item]')
      if (routeItems.length) {
        gsap.fromTo(
          routeItems,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.62,
            stagger: 0.055,
            ease: 'power3.out',
            clearProps: 'opacity,transform,visibility',
          },
        )
      }

      if (pending?.sharedElementId && pending.flipState) {
        const target = findSharedElement(pending.sharedElementId)
        if (target) {
          Flip.from(pending.flipState, {
            targets: target,
            duration: 0.92,
            ease: 'power4.inOut',
            absolute: true,
            fade: true,
            scale: true,
            onComplete: () => gsap.set(target, { clearProps: 'transform,opacity,visibility' }),
          })
        }
      }
    }

    if (pending?.hash) {
      const frame = window.requestAnimationFrame(() => {
        let targetId = pending.hash.slice(1)
        try {
          targetId = decodeURIComponent(targetId)
        } catch {
          targetId = pending.hash.slice(1)
        }

        const target = document.getElementById(targetId)
        if (!target) {
          animatePageEntry()
          return
        }

        if (reduceMotion) {
          target.scrollIntoView({ behavior: 'auto', block: 'start' })
          animatePageEntry()
          return
        }

        const headerOffset = document.querySelector<HTMLElement>('.site-header')?.offsetHeight ?? 0
        gsap.killTweensOf(window)
        gsap.to(window, {
          duration: 0.88,
          ease: 'power3.inOut',
          overwrite: 'auto',
          scrollTo: { y: target, offsetY: headerOffset + 12, autoKill: true },
          onComplete: animatePageEntry,
          onInterrupt: animatePageEntry,
        })
      })

      return () => window.cancelAnimationFrame(frame)
    }

    if (pending && !pending.hash) window.scrollTo(0, 0)

    const frame = window.requestAnimationFrame(animatePageEntry)
    return () => window.cancelAnimationFrame(frame)
  }, [pathname])

  const navigate = useCallback(
    (href: string, sharedElementId?: string) => {
      const destination = new URL(href, window.location.href)

      if (destination.origin !== window.location.origin) {
        window.location.assign(destination.href)
        return
      }

      gsap.registerPlugin(Flip, ScrollToPlugin)
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const source = sharedElementId && !reduceMotion ? findSharedElement(sharedElementId) : undefined
      const flipState = source ? Flip.getState(source) : undefined
      const destinationHref = `${destination.pathname}${destination.search}${destination.hash}`

      pendingNavigation.current = {
        pathname: destination.pathname,
        hash: destination.hash,
        sharedElementId,
        flipState,
      }

      startTransition(() => router.push(destinationHref, { scroll: false }))
    },
    [router],
  )

  return (
    <NavigationTransitionContext.Provider value={navigate}>
      {children}
    </NavigationTransitionContext.Provider>
  )
}

type TransitionLinkProps = Omit<ComponentProps<typeof Link>, 'href' | 'onClick'> & {
  href: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  sharedElementId?: string
}

export function TransitionLink({
  href,
  onClick,
  target,
  download,
  sharedElementId,
  ...props
}: TransitionLinkProps) {
  const pathname = usePathname()
  const navigate = useContext(NavigationTransitionContext)

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)

    if (
      !navigate ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      (target && target !== '_self') ||
      download !== undefined
    ) {
      return
    }

    const destination = new URL(href, window.location.href)
    if (destination.origin !== window.location.origin || destination.pathname === pathname) return

    event.preventDefault()
    navigate(`${destination.pathname}${destination.search}${destination.hash}`, sharedElementId)
  }

  return <Link href={href} target={target} download={download} {...props} onClick={handleClick} />
}

export function RouteAwareLink({
  href,
  children,
  sharedElementId,
  ...props
}: Omit<TransitionLinkProps, 'href'> & { href: string; children: ReactNode }) {
  const pathname = usePathname()
  const destination = href.startsWith('#') && pathname !== '/' ? `/${href}` : href

  if (destination.startsWith('#')) {
    return (
      <a href={destination} {...props}>
        {children}
      </a>
    )
  }

  return (
    <TransitionLink href={destination} sharedElementId={sharedElementId} {...props}>
      {children}
    </TransitionLink>
  )
}

export type TransitionLinkNativeProps = Omit<TransitionLinkProps, 'href' | 'sharedElementId'>

export function HomeAnchor({
  href,
  children,
  ...props
}: TransitionLinkNativeProps & { href: string; children: ReactNode }) {
  const pathname = usePathname()
  const destination = pathname === '/' ? href : href.startsWith('#') ? `/${href}` : href

  if (destination.startsWith('#')) {
    return (
      <a href={destination} {...props}>
        {children}
      </a>
    )
  }

  return (
    <TransitionLink href={destination} {...props}>
      {children}
    </TransitionLink>
  )
}

export function useNavigationTransition() {
  return useContext(NavigationTransitionContext)
}
