import Image from 'next/image'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="hero page-container" id="top" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow reveal">
            <span className="availability-dot" aria-hidden="true" />
            Branding · advertising · digital production
          </p>
          <h1 className="hero-title reveal" id="hero-title">
            Make your<br />
            brand <em>matter.</em>
          </h1>
          <p className="hero-description reveal">
            We connect creative storytelling with strategic marketing—building distinctive identities,
            campaign-ready advertising, and digital content that helps your business grow.
          </p>
          <div className="hero-actions reveal">
            <a className="button button--dark" href="#work">
              Explore the work <ArrowDown aria-hidden="true" />
            </a>
            <a className="simple-link" href="#contact">
              Building something? <span>Let&apos;s talk.</span>
            </a>
          </div>
          <div className="hero-footnote reveal">
            <span>From first strategy</span>
            <span className="hero-footnote__line" aria-hidden="true" />
            <span>to the final frame</span>
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
              <span>Ideas, made visible</span>
              <span>Built to move <ArrowUpRight aria-hidden="true" /></span>
            </div>
            <div className="hero-stamp" aria-hidden="true">
              <span>MADE TO</span>
              <strong>move</strong>
              <span>✳ JO VISUALS ✳</span>
            </div>
          </div>
          <div className="hero-caption">
            <span>Brand systems / campaign production</span>
            <span>01 — 03</span>
          </div>
        </div>
      </div>
    </section>
  )
}
