import { ArrowUpRight } from 'lucide-react'
import { RouteAwareLink, TransitionLink } from '@/components/agency/navigation-transitions'

const contactEmail = 'hello@jovisuals.com'

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-container contact-inner">
        <div className="contact-top reveal">
          <p className="eyebrow eyebrow--light">
            <span className="availability-dot" aria-hidden="true" />
            Full service. Fully considered.
          </p>
          <span className="contact-note">Branding · advertising · digital production</span>
        </div>
        <h2 className="contact-title reveal" id="contact-title">
          Make your<br />
          next move <em>matter.</em>
        </h2>
        <div className="contact-bottom reveal">
          <p>
            Starting a business, reshaping a brand, or ready to make more of your social presence?
            Tell us what you&apos;re building.
          </p>
          <TransitionLink className="contact-button" href="/contact">
            Start a conversation <ArrowUpRight aria-hidden="true" />
          </TransitionLink>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container site-footer__top">
        <RouteAwareLink className="footer-wordmark" href="#top" aria-label="Jo Visuals, back to top">
          jo visuals<span>.</span>
        </RouteAwareLink>
        <p>Branding. Advertising.<br />Digital production.</p>
        <a className="footer-email" href={`mailto:${contactEmail}`}>
          {contactEmail} <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className="page-container site-footer__bottom">
        <span>© 2026 Jo Visuals</span>
        <span>Strategy at heart. Visuals with feeling.</span>
        <RouteAwareLink href="#top">Back to the top ↑</RouteAwareLink>
      </div>
    </footer>
  )
}
