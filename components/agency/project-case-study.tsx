import Image from 'next/image'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteFooter } from '@/components/agency/contact-section'
import { SiteHeader } from '@/components/agency/site-header'
import { TransitionLink } from '@/components/agency/navigation-transitions'
import type { AgencyProject, SocialSample } from '@/components/agency/project-data'
import { projects } from '@/components/agency/project-data'

type ProjectCaseStudyProps = {
  project: AgencyProject
  nextProject: AgencyProject
}

function SocialSampleCard({
  project,
  sample,
  index,
}: {
  project: AgencyProject
  sample: SocialSample
  index: number
}) {
  return (
    <article className="social-sample" data-route-item>
      <div className={`social-sample__visual social-sample__visual--${sample.type}`}>
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(max-width: 760px) 88vw, 30vw"
          aria-hidden="true"
        />
        <span className="social-sample__shade" aria-hidden="true" />
        <span className="social-sample__meta">
          <span>{project.name}</span>
          <span>{sample.platform}</span>
        </span>
        <span className="social-sample__format">{sample.format}</span>
        <strong className="social-sample__headline">{sample.headline}</strong>
        <span className="social-sample__cta">
          {sample.cta} <ArrowUpRight aria-hidden="true" />
        </span>
        {sample.type === 'reel' && (
          <span className="social-sample__progress" aria-hidden="true">
            <span />
          </span>
        )}
        <span className="social-sample__index">0{index + 1} / 03</span>
      </div>
      <div className="social-sample__caption">
        <span>{sample.platform} / {sample.type}</span>
        <p>{sample.caption}</p>
      </div>
    </article>
  )
}

export function ProjectCaseStudy({ project, nextProject }: ProjectCaseStudyProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main className="project-page" id="main-content" data-route-enter>
        <article>
          <section className="project-hero page-container" aria-labelledby="project-title">
            <div className="project-hero__back" data-route-item>
              <TransitionLink className="project-back-link" href="/#work">
                <ArrowLeft aria-hidden="true" /> Back to selected work
              </TransitionLink>
            </div>
            <div className="project-hero__layout">
              <div className="project-hero__copy">
                <p className="eyebrow" data-route-item>
                  {project.number} / 03 · Studio concept · {project.category}
                </p>
                <h1 className="project-hero__title" id="project-title" data-route-item>
                  {project.headline}
                </h1>
                <p className="project-hero__summary" data-route-item>{project.summary}</p>
                <ul className="project-hero__capabilities" aria-label="Project capabilities" data-route-item>
                  {project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
                </ul>
              </div>
              <figure className="project-hero__media" data-flip-id={project.slug}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 62vw"
                />
                <figcaption>
                  <span>Identity · Campaign · Social</span>
                  <span>Jo Visuals / {project.number}</span>
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="project-story section-padding" aria-labelledby="project-story-title">
            <div className="page-container project-story__layout">
              <header className="project-story__heading" data-route-item>
                <p className="eyebrow">The thinking behind it</p>
                <h2 className="section-title" id="project-story-title">
                  Start with the <em>why.</em>
                </h2>
              </header>
              <div className="project-story__copy">
                <div data-route-item>
                  <span className="project-story__label">The brief</span>
                  <p>{project.brief}</p>
                </div>
                <div data-route-item>
                  <span className="project-story__label">Our direction</span>
                  <p>{project.direction}</p>
                </div>
                <div className="project-story__services" data-route-item>
                  <span className="project-story__label">What we brought together</span>
                  <ul>
                    {project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="project-process section-padding" aria-labelledby="project-process-title">
            <div className="page-container">
              <header className="project-section-heading" data-route-item>
                <p className="eyebrow">The process / {project.number}</p>
                <h2 className="section-title" id="project-process-title">
                  Thought through.<br /><em>Built to connect.</em>
                </h2>
                <p>Strategy and making stay connected from the first question to the final frame.</p>
              </header>
              <ol className="project-process__grid">
                {project.processSteps.map((step) => (
                  <li className="project-process__step" key={step.number} data-route-item>
                    <span>{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="project-social section-padding" aria-labelledby="project-social-title">
            <div className="page-container">
              <header className="project-section-heading project-section-heading--social" data-route-item>
                <p className="eyebrow">Social-first creative / sample direction</p>
                <h2 className="section-title" id="project-social-title">
                  Make the feed feel<br /><em>like the brand.</em>
                </h2>
                <p>Platform-native reel, carousel, and story concepts show how the identity can earn attention in motion.</p>
              </header>
              <div className="social-sample-grid">
                {project.socialSamples.map((sample, index) => (
                  <SocialSampleCard key={`${project.slug}-${sample.type}`} project={project} sample={sample} index={index} />
                ))}
              </div>
              <p className="project-disclosure" role="note">
                These are studio concept studies, not commissioned client campaigns. Social cards are creative previews—not published videos—and no client growth figures are implied. Live results should be added only from verified platform analytics.
              </p>
            </div>
          </section>

          <section className="project-growth section-padding" aria-labelledby="project-growth-title">
            <div className="page-container project-growth__layout">
              <header className="project-growth__heading" data-route-item>
                <p className="eyebrow eyebrow--light">Marketing built to learn</p>
                <h2 className="section-title" id="project-growth-title">
                  Growth is a<br /><em>repeatable system.</em>
                </h2>
                <p>We turn strong creative into a rhythm: make a clear hook, watch what people value, and use real signals to make the next cut smarter.</p>
              </header>
              <div className="project-growth__content">
                <ol className="project-growth__steps">
                  {project.growthSteps.map((step, index) => (
                    <li key={step.title} data-route-item>
                      <span>0{index + 1}</span>
                      <div><h3>{step.title}</h3><p>{step.body}</p></div>
                    </li>
                  ))}
                </ol>
                <div className="project-growth__signals" data-route-item>
                  <span className="project-story__label">Signals we would track</span>
                  <ul>
                    {project.growthSignals.map((signal) => <li key={signal}>{signal}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="project-next section-padding" aria-labelledby="project-next-title">
            <div className="page-container">
              <div className="project-next__heading" data-route-item>
                <p className="eyebrow">Keep exploring</p>
                <h2 className="section-title" id="project-next-title">Next up: <em>{nextProject.name}.</em></h2>
              </div>
              <TransitionLink
                className="project-next__link"
                href={`/work/${nextProject.slug}`}
                sharedElementId={nextProject.slug}
              >
                <span className="project-next__image" data-flip-id={nextProject.slug}>
                  <Image src={nextProject.image} alt={nextProject.imageAlt} fill sizes="(max-width: 760px) 100vw, 62vw" />
                </span>
                <span className="project-next__caption">
                  <span>{nextProject.discipline}</span>
                  <strong>{nextProject.name}</strong>
                  <ArrowUpRight aria-hidden="true" />
                </span>
              </TransitionLink>
              <div className="project-next__contact" data-route-item>
                <p>Have a project that needs a clearer story?</p>
                <TransitionLink className="button" href="/contact">
                  Let&apos;s make it matter <ArrowUpRight aria-hidden="true" />
                </TransitionLink>
              </div>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
