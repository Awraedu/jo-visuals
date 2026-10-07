import { BrandStorySection } from '@/components/agency/brand-story-section'
import { ContactSection, SiteFooter } from '@/components/agency/contact-section'
import { HeroSection } from '@/components/agency/hero-section'
import { InvestmentSection } from '@/components/agency/investment-section'
import { ProcessSection } from '@/components/agency/process-section'
import { ScrollReveal } from '@/components/agency/scroll-reveal'
import { ServicesSection } from '@/components/agency/services-section'
import { SiteHeader } from '@/components/agency/site-header'
import { WorkSection } from '@/components/agency/work-section'

function StudioTicker() {
  const phrases = ['Branding', 'Advertising', 'Digital production', 'Built to move brands forward']

  return (
    <div className="studio-ticker" aria-hidden="true">
      <div className="studio-ticker__track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="studio-ticker__group" key={copy}>
            {phrases.map((phrase) => (
              <span className="studio-ticker__item" key={`${copy}-${phrase}`}>
                {phrase}
                <span className="studio-ticker__spark">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function AgencyLanding() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollReveal />
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <StudioTicker />
        <BrandStorySection />
        <WorkSection />
        <ServicesSection />
        <InvestmentSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
