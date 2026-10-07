import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Everyday heat',
    discipline: 'Product identity · Packaging · Campaign',
    image: '/images/work-sunday.png',
    alt: 'Chili crisp jars and red peppers on a butter-yellow set',
    className: 'work-card--featured',
    note: 'Food & drink / studio concept.',
  },
  {
    name: 'Soft ritual',
    discipline: 'Digital branding · Art direction · Social',
    image: '/images/work-forme.png',
    alt: 'Minimal cream and cobalt skincare bottles with green pear and leaves',
    className: 'work-card--aside',
    note: 'Beauty / brand world study.',
  },
  {
    name: 'Main character',
    discipline: 'Fashion campaign · Social production',
    image: '/images/work-play.png',
    alt: 'Fashion campaign portrait against a vivid lime and coral set',
    className: 'work-card--wide',
    note: 'Style / campaign concept.',
  },
]

export function WorkSection() {
  return (
    <section className="work-section section-padding page-container" id="work" aria-labelledby="work-title">
      <div className="section-intro reveal">
        <div>
          <p className="eyebrow">A visual playground</p>
          <h2 className="section-title" id="work-title">
            A few brand worlds,<br />
            <em>taking shape.</em>
          </h2>
        </div>
        <p className="section-intro__aside">
          Studio-made concept studies showing how identity, art direction, and digital production can
          work together.
        </p>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <article className={`work-card ${project.className} reveal`} key={project.name}>
            <a className="work-card__media" href="#contact" aria-label={`Talk with us about work like ${project.name}`}>
              <Image
                alt={project.alt}
                className="work-card__image"
                fill
                sizes={project.className === 'work-card--wide' ? '(max-width: 760px) 100vw, 64vw' : '(max-width: 760px) 100vw, 52vw'}
                src={project.image}
              />
              <span className="work-card__index">0{index + 1} / 03</span>
              <span className="work-card__arrow" aria-hidden="true"><ArrowUpRight /></span>
            </a>
            <div className="work-card__caption">
              <div>
                <h3>{project.name}</h3>
                <p>{project.discipline}</p>
              </div>
              <span className="work-card__note">{project.note}</span>
            </div>
          </article>
        ))}
      </div>
      <p className="work-footnote reveal">
        Concept work, made in-house. Every identity is shaped around the business it belongs to.
      </p>
    </section>
  )
}
