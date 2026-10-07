import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Sunday Pantry',
    discipline: 'Brand strategy · Identity · Launch',
    image: '/images/work-sunday.png',
    alt: 'Chili crisp jars and red peppers on a butter-yellow set',
    className: 'work-card--featured',
    note: 'A little heat for the everyday.',
  },
  {
    name: 'Forme Botanics',
    discipline: 'Brand world · Content · Social',
    image: '/images/work-forme.png',
    alt: 'Minimal cream and cobalt skincare bottles with green pear and leaves',
    className: 'work-card--aside',
    note: 'A softer kind of skincare.',
  },
  {
    name: 'Good Day Club',
    discipline: 'Campaign · Social strategy · Growth',
    image: '/images/work-play.png',
    alt: 'Fashion campaign portrait against a vivid lime and coral set',
    className: 'work-card--wide',
    note: 'Making everyday feel like the main event.',
  },
]

export function WorkSection() {
  return (
    <section className="work-section section-padding page-container" id="work" aria-labelledby="work-title">
      <div className="section-intro reveal">
        <div>
          <p className="eyebrow">The good stuff</p>
          <h2 className="section-title" id="work-title">
            A few good ideas,<br />
            <em>out in the world.</em>
          </h2>
        </div>
        <p className="section-intro__aside">
          Thoughtful from the first sketch. Distinctive everywhere it lands.
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
      <p className="work-footnote reveal">Small teams. Big ideas. Built to show up everywhere.</p>
    </section>
  )
}
