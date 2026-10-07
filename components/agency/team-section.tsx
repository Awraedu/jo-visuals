const teamMembers = [
  {
    name: 'Esubdink',
    monogram: 'ES',
    role: 'Digital Marketing Manager',
    focus: 'Digital growth',
    bio: 'Expert in digital campaign strategy, audience targeting, social media growth, and performance analytics.',
    tone: 'acid',
  },
  {
    name: 'Yosef Mulatu',
    monogram: 'YM',
    role: 'CEO & Brand Manager',
    focus: 'Brand strategy',
    bio: 'Founder and creative force behind Jo Visuals, specializing in corporate identity, brand strategy, and creative direction.',
    tone: 'ink',
  },
  {
    name: 'Nesuwork',
    monogram: 'N',
    role: 'Marketing Manager',
    focus: 'Market growth',
    bio: 'Leads strategic market expansion, client relationships, campaign coordination, and brand awareness initiatives.',
    tone: 'coral',
  },
  {
    name: 'Ermiyas',
    monogram: 'E',
    role: 'Production Manager',
    focus: 'Production',
    bio: 'Manages high-end video editing, motion graphics workflows, visual effects, and the quality of every multimedia deliverable.',
    tone: 'stone',
  },
  {
    name: 'Abdu Razik',
    monogram: 'AR',
    role: 'Printing Manager',
    focus: 'Print & packaging',
    bio: 'Specializes in high-quality print solutions, packaging execution, branded materials, and precise color reproduction.',
    tone: 'paper',
  },
] as const

export function TeamSection() {
  return (
    <section className="team-section section-padding" id="team" aria-labelledby="team-title">
      <div className="page-container">
        <header className="section-intro team-section__intro">
          <div className="reveal">
            <p className="eyebrow">The people behind the picture</p>
            <h2 className="section-title" id="team-title">
              Different skills.<br />
              One <em>point of view.</em>
            </h2>
          </div>
          <p className="section-intro__aside reveal">
            Strategy, design, marketing, production, and print—our hands-on team brings every part
            of your brand together under one roof.
          </p>
        </header>

        <ul className="team-grid" aria-label="Jo Visuals team members">
          {teamMembers.map((member, index) => (
            <li className="team-card reveal" data-delay={(index % 3) * 0.07} key={member.name}>
              <div className={`team-card__visual team-card__visual--${member.tone}`} aria-hidden="true">
                <span className="team-card__serial">JV / 0{index + 1}</span>
                <span className="team-card__focus">{member.focus}</span>
                <span className="team-card__monogram">{member.monogram}</span>
              </div>
              <div className="team-card__details">
                <p className="team-card__role">{member.role}</p>
                <div className="team-card__name-row">
                  <h3>{member.name}</h3>
                  <span aria-hidden="true">0{index + 1}</span>
                </div>
                <p className="team-card__bio">{member.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}


