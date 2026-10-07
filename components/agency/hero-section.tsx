import Image from 'next/image'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="hero page-container" id="top" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow reveal">
            <span className="availability-dot" aria-hidden="true" />
            Independent brand + social studio
          </p>
          <h1 className="hero-title reveal" id="hero-title">
            We make<br />
            brands <em>matter.</em>
          </h1>
          <p className="hero-description reveal">
            The big-picture brand thinking and scroll-stopping social to make your next chapter
            impossible to ignore.
          </p>
          <div className="hero-actions reveal">
            <a className="button button--dark" href="#work">
              See what we make <ArrowDown aria-hidden="true" />
            </a>
            <a className="simple-link" href="#contact">
              Have a good idea? <span>Let&apos;s talk.</span>
            </a>
          </div>
          <div className="hero-footnote reveal">
            <span>From first thought</span>
            <span className="hero-footnote__line" aria-hidden="true" />
            <span>to the whole feed</span>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="hero-image-frame">
            <Image
              alt="Amber citrus bottle and fresh fruit on a bright chartreuse studio set"
              className="hero-image"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 46vw"
              src="/images/hero-campaign.png"
            />
            <div className="hero-image-note">
              <span>Good things</span>
              <span>are in motion <ArrowUpRight aria-hidden="true" /></span>
            </div>
            <div className="hero-stamp" aria-hidden="true">
              <span>MADE TO</span>
              <strong>matter</strong>
              <span>✳ GOODFORM ✳</span>
            </div>
          </div>
          <div className="hero-caption">
            <span>Creative direction / 2026</span>
            <span>01 — 03</span>
          </div>
        </div>
      </div>
    </section>
  )
}
