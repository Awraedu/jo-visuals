import { ArrowUpRight } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-container contact-inner">
        <div className="contact-top reveal">
          <p className="eyebrow eyebrow--light">
            <span className="availability-dot" aria-hidden="true" />
            A few good things start here
          </p>
          <span className="contact-note">Taking on select projects for 2026</span>
        </div>
        <h2 className="contact-title reveal" id="contact-title">
          Let&apos;s make<br />
          something <em>matter.</em>
        </h2>
        <div className="contact-bottom reveal">
          <p>Have a big idea, a brand that&apos;s ready for more, or a feed that needs a little feeling?</p>
          <a
            className="contact-button"
            href="mailto:hello@goodform.studio?subject=Let%27s%20make%20something%20matter"
          >
            Tell us what you&apos;re building <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container site-footer__top">
        <a className="footer-wordmark" href="#top" aria-label="Goodform Studio, back to top">
          goodform<span>.</span>
        </a>
        <p>Full-spectrum branding.<br />Social with a point of view.</p>
        <a className="footer-email" href="mailto:hello@goodform.studio">
          hello@goodform.studio <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className="page-container site-footer__bottom">
        <span>© 2026 Goodform Studio</span>
        <span>Independent by nature. Everywhere by design.</span>
        <a href="#top">Back to the top ↑</a>
      </div>
    </footer>
  )
}
