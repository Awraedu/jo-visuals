import { ArrowUpRight, Plus } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Brand strategy',
    summary: 'Find the thing that makes you, unmistakably you.',
    description:
      'We get curious about your people, your category, and the opportunity hiding in plain sight—then turn it into a clear point of view your whole team can use.',
    deliverables: ['Positioning & purpose', 'Audience & insight', 'Naming & messaging', 'Brand architecture'],
  },
  {
    number: '02',
    title: 'Visual identity',
    summary: 'Build a world people want to step into.',
    description:
      'A flexible identity with enough character to stand out and enough smarts to work everywhere—from the tiny avatar to the big, beautiful launch.',
    deliverables: ['Logo & visual system', 'Color & typography', 'Art direction', 'Guidelines & rollout'],
  },
  {
    number: '03',
    title: 'Social & growth',
    summary: 'Turn the brand into a reason to stop scrolling.',
    description:
      'We make social feel like you, not everybody else: platform-native content, a thoughtful publishing rhythm, and marketing built to move the right numbers.',
    deliverables: ['Social strategy & calendars', 'Content production', 'Community & publishing', 'Paid campaigns & reporting'],
  },
]

export function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="page-container services-layout">
        <div className="services-intro reveal">
          <p className="eyebrow eyebrow--light">What we do</p>
          <h2 className="section-title" id="services-title">
            One team.<br />
            The <em>whole</em><br />
            picture.
          </h2>
          <p className="services-intro__copy">
            From the first big question to your next best-performing post, we connect every piece.
          </p>
          <a className="services-link" href="#contact">
            See how we can help <ArrowUpRight aria-hidden="true" />
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
