import { ArrowUpRight } from 'lucide-react'

const principles = [
  {
    number: '01',
    title: 'Clarity',
    copy: 'Know what your brand stands for.',
  },
  {
    number: '02',
    title: 'Character',
    copy: 'Look and sound unmistakably yours.',
  },
  {
    number: '03',
    title: 'Consistency',
    copy: 'Show up with intent, everywhere.',
  },
]

export function BrandStorySection() {
  return (
    <section className="brand-story section-padding" id="about" aria-labelledby="brand-story-title">
      <div className="page-container brand-story__layout">
        <div className="brand-story__heading reveal">
          <p className="eyebrow">The Jo Visuals point of view</p>
          <h2 className="section-title" id="brand-story-title">
            Clear in strategy.<br />
            Distinct in <em>every frame.</em>
          </h2>
          <a className="brand-story__link" href="#services">
            Meet the capabilities <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="brand-story__body reveal">
          <p className="brand-story__lede">
            We connect creative storytelling with strategic marketing.
          </p>
          <p className="brand-story__copy">
            Jo Visuals is a full-service creative agency bringing branding, advertising, and digital
            production together. We build the story, shape the visual world, and carry it through
            every place your audience meets your business.
          </p>
          <p className="brand-story__copy">
            From brand identity and print to social media management, short-form video, and motion
            graphics, every part of the work is made to feel connected—and made to help your brand
            earn attention, trust, and room to grow.
          </p>

          <ol className="brand-story__principles" aria-label="Jo Visuals brand principles">
            {principles.map((principle) => (
              <li className="brand-story__principle" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
