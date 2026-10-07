import { ArrowUpRight } from 'lucide-react'

const engagements = [
  {
    label: 'PACKAGE A',
    tone: 'paper',
    title: 'Brand launch & visual identity',
    goal: 'For a new business or a brand ready for a thoughtful reset.',
    deliverables: [
      'Complete identity system: logo, typography, color palette, and brand book',
      'Stationery and collateral: business cards, email signatures, and letterheads',
      'Social media kit: templates, cover banners, and profile assets',
    ],
  },
  {
    label: 'PACKAGE B',
    tone: 'acid',
    title: 'Digital production & video',
    goal: 'For campaigns that need high-impact, high-craft content.',
    deliverables: [
      'Motion graphics and visual effects, from 2D/3D to titles and lower thirds',
      'Short-form video editing, pacing, kinetic typography, and audio polish',
      'Promotional edits for corporate stories, brand films, and commercials',
    ],
  },
  {
    label: 'PACKAGE C',
    tone: 'ink',
    title: 'Full creative retainer',
    goal: 'For growing brands that need a consistent creative partner.',
    deliverables: [
      'A dedicated monthly production quota across video, static, and motion content',
      'Campaign ad design with ongoing creative strategy iterations',
      'Monthly performance reviews and a considered visual refresh',
    ],
  },
]

const retainers = [
  {
    name: 'Basic',
    audience: 'Startups & small businesses',
    price: '15,000–25,000',
    features: ['8 graphics and copywriting', '2 social platforms', '8 Reels / TikTok videos', 'Profile optimization'],
  },
  {
    name: 'Standard',
    audience: 'Growing businesses & brands',
    price: '40,000–75,000',
    featured: true,
    features: ['12 graphics', '12 Reels / TikTok videos', '1 shoot session', 'Ad boosting'],
  },
  {
    name: 'Premium',
    audience: 'Corporations & high-growth brands',
    price: '90,000–180,000+',
    features: ['16+ content posts', '16+ videos and motion graphics', '2 shoot sessions', 'Full management'],
  },
]

const brandRates = [
  {
    name: 'Corporate branding',
    focus: 'Vision, mission, core identity, stationery, and company profile',
    price: '50,000–85,000',
  },
  {
    name: 'Product branding',
    focus: 'Naming concept, packaging, palette, feature graphics, and print-ready artwork',
    price: '30,000–55,000',
    detail: 'per product line',
  },
  {
    name: 'Personal branding',
    focus: 'Personal identity, portfolio, profile optimization, and content templates',
    price: '20,000–35,000',
  },
  {
    name: 'Service branding',
    focus: 'Customer experience, service menus, brochures, and trust-building collateral',
    price: '45,000–60,000',
  },
  {
    name: 'Retail & environmental',
    focus: 'Space graphics, wayfinding, signage, storefront, and vehicle templates',
    price: '40,000–60,000',
  },
  {
    name: 'Digital branding',
    focus: 'Website UI/UX system, social setup, motion templates, and ad assets',
    price: '40,000–70,000',
  },
  {
    name: 'Employer branding',
    focus: 'Employee value proposition, culture assets, and recruitment campaigns',
    price: '55,000–75,000',
  },
]

export function InvestmentSection() {
  return (
    <section className="investment-section section-padding" id="investment" aria-labelledby="investment-title">
      <div className="page-container">
        <div className="section-intro investment-heading reveal">
          <div>
            <p className="eyebrow">Packages &amp; pricing</p>
            <h2 className="section-title" id="investment-title">
              A strong brand.<br />
              <em>A smart next step.</em>
            </h2>
          </div>
          <p className="section-intro__aside">
            Start with the piece you need today, or bring us in as your creative partner for the long
            run. Every engagement connects strategy to the work people actually see.
          </p>
        </div>

        <div className="offer-grid">
          {engagements.map((engagement) => (
            <article className={`offer-card offer-card--${engagement.tone} reveal`} key={engagement.label}>
              <div className="offer-card__top">
                <span>{engagement.label}</span>
                <span>JO VISUALS</span>
              </div>
              <h3>{engagement.title}</h3>
              <p className="offer-card__goal">{engagement.goal}</p>
              <ul>
                {engagement.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
              <a className="offer-card__link" href="#contact">
                Talk through this package <ArrowUpRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="retainer-block" aria-labelledby="retainer-title">
          <div className="investment-subhead reveal">
            <div>
              <p className="eyebrow">Monthly social &amp; digital</p>
              <h3 id="retainer-title">Content that keeps showing up.</h3>
            </div>
            <p>Ongoing content and channel support, sized for where your business is now.</p>
          </div>

          <div className="retainer-grid">
            {retainers.map((retainer, index) => (
              <article
                className={`retainer-card${retainer.featured ? ' retainer-card--featured' : ''} reveal`}
                key={retainer.name}
              >
                <div className="retainer-card__top">
                  <span>0{index + 1}</span>
                  <span>MONTHLY RETAINER</span>
                </div>
                <h4>{retainer.name}</h4>
                <p className="retainer-card__audience">{retainer.audience}</p>
                <p className="retainer-card__price">
                  <span>ETB</span>
                  <strong>{retainer.price}</strong>
                  <span>/ month</span>
                </p>
                <ul className="retainer-card__features">
                  {retainer.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="retainer-card__link" href="#contact">
                  Enquire about {retainer.name} <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="brand-rates" aria-labelledby="brand-rates-title">
          <div className="brand-rates__intro reveal">
            <p className="eyebrow eyebrow--light">Standalone identity packages</p>
            <h3 id="brand-rates-title">
              Build the right<br />
              <em>kind of brand.</em>
            </h3>
            <p>Focused identity work for the business, product, place, or people behind your next move.</p>
          </div>
          <dl className="brand-rates__list">
            {brandRates.map((rate) => (
              <div className="brand-rates__row reveal" key={rate.name}>
                <dt>
                  <strong>{rate.name}</strong>
                  <span>{rate.focus}</span>
                </dt>
                <dd>
                  <span>ETB</span>
                  <strong>{rate.price}</strong>
                  {rate.detail && <span className="brand-rates__detail">{rate.detail}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="investment-footnote reveal">
          Prices are shown in Ethiopian birr. Final scope and quotation are confirmed together before
          work begins. <a href="#contact">Tell us what you need <ArrowUpRight aria-hidden="true" /></a>
        </p>
      </div>
    </section>
  )
}
