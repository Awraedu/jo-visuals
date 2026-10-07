const steps = [
  {
    number: '01',
    title: 'Discovery',
    copy: 'Research your brand position, audience, and the goals behind the work.',
  },
  {
    number: '02',
    title: 'Concept',
    copy: 'Explore moodboards, visual frameworks, and clear creative directions.',
  },
  {
    number: '03',
    title: 'Production',
    copy: 'Craft the assets, motion, edits, color, and sound with care.',
  },
  {
    number: '04',
    title: 'Delivery',
    copy: 'Receive finished work prepared for web, social, print, and broadcast.',
  },
]

export function ProcessSection() {
  return (
    <section className="process-section section-padding" id="approach" aria-labelledby="process-title">
      <div className="page-container">
        <div className="process-heading reveal">
          <p className="eyebrow">From brief to final frame</p>
          <h2 className="section-title" id="process-title">
            Thoughtful work.<br />
            <em>Good process.</em>
          </h2>
          <p>A clear path from the first question to delivery, with strategy and craft connected all the way through.</p>
        </div>
        <ol className="process-grid">
          {steps.map((step) => (
            <li className="process-step reveal" key={step.number}>
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
