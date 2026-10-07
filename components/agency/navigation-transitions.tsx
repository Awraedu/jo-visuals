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
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

type PendingNavigation = {
  pathname: string
  hash: string
  complete: () => void
}

type DocumentWithViewTransitions = Document & {
  startViewTransition?: (update: () => void | Promise<void>) => { finished: Promise<void> }
}

type NavigationContextValue = (href: string) => void

const NavigationTransitionContext = createContext<NavigationContextValue | null>(null)

type ProviderProps = {
  children: ReactNode
}

export function NavigationTransitionProvider({ children }: ProviderProps) {
  const router = useRouter()
  const pathname = usePathname()
  const pendingNavigation = useRef<PendingNavigation | null>(null)

  useLayoutEffect(() => {
    const pending = pendingNavigation.current
    if (!pending || pending.pathname !== pathname) return

    const frame = window.requestAnimationFrame(() => {
      if (!pending.hash) {
        pending.complete()
        return
      }

      const targetId = decodeURIComponent(pending.hash.slice(1))
      const target = document.getElementById(targetId)

      if (!target) {
        pending.complete()
        return
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' })
        pending.complete()
        return
      }

      gsap.registerPlugin(ScrollToPlugin)
      const headerOffset = document.querySelector<HTMLElement>('.site-header')?.offsetHeight ?? 0
      gsap.to(window, {
        duration: 0.86,
        ease: 'power3.inOut',
        overwrite: 'auto',
        scrollTo: { y: target, offsetY: headerOffset + 12, autoKill: true },
        onComplete: pending.complete,
        onInterrupt: pending.complete,
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname])

  const navigate = useCallback(
    (href: string) => {
      const destination = new URL(href, window.location.href)

      if (destination.origin !== window.location.origin) {
        window.location.assign(href)
        return
      }

      pendingNavigation.current?.complete()

      let resolveNavigation = () => {}
      let timeoutId = 0
      let isComplete = false
      const routeReady = new Promise<void>((resolve) => {
        resolveNavigation = resolve
      })

      const complete = () => {
        if (isComplete) return
        isComplete = true
        window.clearTimeout(timeoutId)
        if (pendingNavigation.current?.complete === complete) pendingNavigation.current = null
        resolveNavigation()
      }

      pendingNavigation.current = {
        pathname: destination.pathname,
        hash: destination.hash,
        complete,
      }
      timeoutId = window.setTimeout(complete, 3200)

      const destinationHref = `${destination.pathname}${destination.search}${destination.hash}`
      const push = () => startTransition(() => router.push(destinationHref, { scroll: false }))
      const transitionDocument = document as DocumentWithViewTransitions
      const startViewTransition = transitionDocument.startViewTransition?.bind(document)

      if (
        !startViewTransition ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        push()
        return
      }

      try {
        const transition = startViewTransition(async () => {
          push()
          await routeReady
        })
        void transition.finished.catch(() => undefined)
      } catch {
        push()
      }
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
}

export function TransitionLink({ href, onClick, target, download, ...props }: TransitionLinkProps) {
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
    navigate(`${destination.pathname}${destination.search}${destination.hash}`)
  }

  return <Link href={href} target={target} download={download} {...props} onClick={handleClick} />
}

export function RouteAwareLink({
  href,
  children,
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
    <TransitionLink href={destination} {...props}>
      {children}
    </TransitionLink>
  )
}

export type TransitionLinkNativeProps = Omit<TransitionLinkProps, 'href'>

export function HomeAnchor({ href, children, ...props }: TransitionLinkNativeProps & { href: string; children: ReactNode }) {
  const pathname = usePathname()
  const destination = pathname === '/' ? href : `/${href.replace(/^\\//, '')}`

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
