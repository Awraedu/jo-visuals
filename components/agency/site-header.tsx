'use client'

import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'What we do', href: '#services' },
  { label: 'Our approach', href: '#approach' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner page-container">
        <a className="wordmark" href="#top" aria-label="Goodform Studio home" onClick={closeMenu}>
          <span className="wordmark__mark" aria-hidden="true">g</span>
          <span>goodform<span className="wordmark__period">.</span></span>
          <span className="wordmark__descriptor">BRAND + SOCIAL STUDIO</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact">
            Let&apos;s talk <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        className="mobile-nav page-container"
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <a href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="mobile-nav__cta" href="#contact" onClick={closeMenu}>
          Start a project <ArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}
