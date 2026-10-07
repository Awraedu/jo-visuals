import { ArrowUpRight, Plus } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Branding & visual identity',
    summary: 'Build a clear, recognizable system that works everywhere.',
    description:
      'We shape the strategy and visual language behind your business, then make it practical to use—from the first brand guide to the smallest social profile. The work can serve a company, product, person, service, place, employer, or digital platform.',
    deliverables: [
      'Corporate & employer branding',
      'Product identity & packaging',
      'Personal & service branding',
      'Retail & place branding',
      'Digital identity systems',
      'Brand guidelines & rollout',
    ],
  },
  {
    number: '02',
    title: 'Advertising & print',
    summary: 'Carry one strong idea across every customer touchpoint.',
    description:
      'We design campaign-ready advertising and print pieces with the same care as the brand itself—thoughtful in concept, consistent in execution, and prepared for where they will appear.',
    deliverables: [
      'Business cards & stationery',
      'Flyers & brochures',
      'Company profile decks',
      'Banners & signage',
      'Digital advertising creative',
      'Print-ready artwork',
    ],
  },
  {
    number: '03',
    title: 'Social media & production',
    summary: 'Create content people want to watch, share, and remember.',
    description:
      'From social strategy and day-to-day management to polished short-form video, we make platform-native work that feels like your brand. Add motion graphics, kinetic type, and campaign production when the story calls for more.',
    deliverables: [
      'Social media management',
      'Content strategy & calendars',
      'Photo & video content creation',
      'Short-form video editing',
      'Motion graphics & kinetic type',
      'Campaigns, publishing & reporting',
    ],
  },
]

export function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="page-container services-layout">
        <div className="services-intro reveal">
          <p className="eyebrow eyebrow--light">What we do</p>
          <h2 className="section-title" id="services-title">
            One clear story.<br />
            Every <em>touchpoint.</em>
          </h2>
          <p className="services-intro__copy">
            Brand systems, advertising, and social production—connected by one thoughtful creative
            direction.
          </p>
          <a className="services-link" href="#investment">
            Explore packages &amp; pricing <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="service-list">
          {services.map((service, index) => (
            <details className="service-item reveal" key={service.number} open={index === 0}>
              <summary className="service-summary">
                <span className="service-number">{service.number}</span>
                <span className="service-summary__main">
                  <span className="service-title">{service.title}</span>
                  <span className="service-summary__copy">{service.summary}</span>
                </span>
                <Plus className="service-toggle" aria-hidden="true" />
              </summary>
              <div className="service-content">
                <p>{service.description}</p>
                <ul>
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
