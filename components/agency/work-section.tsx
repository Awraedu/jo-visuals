import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { TransitionLink } from '@/components/agency/navigation-transitions'
import { projects } from '@/components/agency/project-data'

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
          <article className={`work-card ${project.className} reveal`} key={project.slug}>
            <TransitionLink
              className="work-card__media"
              href={`/work/${project.slug}`}
              sharedElementId={project.slug}
              data-flip-id={project.slug}
              aria-label={`View the ${project.name} case study`}
            >
              <Image
                alt={project.imageAlt}
                className="work-card__image"
                fill
                sizes={project.className === 'work-card--wide' ? '(max-width: 760px) 100vw, 64vw' : '(max-width: 760px) 100vw, 52vw'}
                src={project.image}
              />
              <span className="work-card__index">0{index + 1} / 03</span>
              <span className="work-card__arrow" aria-hidden="true"><ArrowUpRight /></span>
            </TransitionLink>
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
        Concept work, made in-house. Each case study shows the strategy, creative process, and a social-first content direction.
      </p>
    </section>
  )
}
