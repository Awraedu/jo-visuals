import { ArrowUpRight, MoveDownRight } from 'lucide-react'
import { SiteFooter } from '@/components/agency/contact-section'
import { SiteHeader } from '@/components/agency/site-header'
import { RouteAwareLink } from '@/components/agency/navigation-transitions'

const contactEmail = 'hello@jovisuals.com'

const prompts = [
  {
    number: '01',
    title: 'Where you are',
    body: 'A new idea, a growing business, or a brand ready for a sharper next chapter.',
  },
  {
    number: '02',
    title: 'Who you want to reach',
    body: 'The people you want to matter to, and what you want them to feel or do.',
  },
  {
    number: '03',
    title: 'What better looks like',
    body: 'A clearer identity, a stronger launch, a more consistent feed, or another goal entirely.',
  },
]

export function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main className="contact-page" id="main-content" data-route-enter>
        <section className="contact-page__hero" aria-labelledby="contact-page-title">
          <div className="page-container contact-page__hero-grid">
            <div className="contact-page__intro">
              <p className="eyebrow eyebrow--light" data-route-item>
                <span className="availability-dot" aria-hidden="true" />
                Start with a good conversation
              </p>
              <h1 className="contact-page__title" id="contact-page-title" data-route-item>
                Good work<br />starts with a<br /><em>hello.</em>
              </h1>
              <p className="contact-page__lead" data-route-item>
                Tell us what you&apos;re building. We&apos;ll help connect the right story, identity, and marketing to where you want to go.
              </p>
            </div>
            <aside className="contact-page__card" data-route-item>
              <span className="contact-page__card-label">PROJECT ENQUIRIES / JO VISUALS</span>
              <p>One clear note is all it takes to get moving.</p>
              <a href={`mailto:${contactEmail}?subject=Project%20enquiry%20for%20Jo%20Visuals`}>
                {contactEmail} <ArrowUpRight aria-hidden="true" />
              </a>
              <span className="contact-page__card-rule" aria-hidden="true" />
              <ul aria-label="Ways we can help">
                <li>Brand identity</li>
                <li>Social media & content</li>
                <li>Campaigns & digital production</li>
              </ul>
            </aside>
          </div>
          <div className="contact-page__scroll" aria-hidden="true">
            <span>What to include</span><MoveDownRight />
          </div>
        </section>

        <section className="contact-page__prompts section-padding" aria-labelledby="contact-prompts-title">
          <div className="page-container">
            <div className="contact-page__prompts-heading" data-route-item>
              <p className="eyebrow">A useful first note</p>
              <h2 className="section-title" id="contact-prompts-title">
                Start wherever<br />you <em>are.</em>
              </h2>
              <p>No polished brief needed. A little context helps us make the first conversation useful.</p>
            </div>
            <ol className="contact-page__prompt-grid">
              {prompts.map((prompt) => (
                <li key={prompt.number} data-route-item>
                  <span>{prompt.number}</span>
                  <h3>{prompt.title}</h3>
                  <p>{prompt.body}</p>
                </li>
              ))}
            </ol>
            <div className="contact-page__bottom" data-route-item>
              <p>Already know what you need?</p>
              <a href={`mailto:${contactEmail}?subject=Project%20enquiry%20for%20Jo%20Visuals`}>
                Write to Jo Visuals <ArrowUpRight aria-hidden="true" />
              </a>
              <RouteAwareLink href="#work">Explore selected work <ArrowUpRight aria-hidden="true" /></RouteAwareLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
