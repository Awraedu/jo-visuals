const steps = [
  {
    number: '01',
    title: 'Get curious',
    copy: 'We listen closely, ask better questions, and find the opportunity worth chasing.',
  },
  {
    number: '02',
    title: 'Find your thing',
    copy: 'We shape a clear strategy and a point of view that feels unmistakably yours.',
  },
  {
    number: '03',
    title: 'Make it real',
    copy: 'We turn the big idea into a full identity, a content world, and a launch with feeling.',
  },
  {
    number: '04',
    title: 'Keep it growing',
    copy: 'We show up, learn from the response, and keep making the work work harder.',
  },
]

export function ProcessSection() {
  return (
    <section className="process-section section-padding" id="approach" aria-labelledby="process-title">
      <div className="page-container">
        <div className="process-heading reveal">
          <p className="eyebrow">Good work, good people</p>
          <h2 className="section-title" id="process-title">
            Big thinking.<br />
            <em>Good doing.</em>
          </h2>
          <p>Clear heads, open minds, and a little bit of get-up-and-go.</p>
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
