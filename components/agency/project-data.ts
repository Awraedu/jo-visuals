export type SocialSample = {
  format: string
  title: string
  hook: string
  flow: string
  growthGoal: string
  signals: string[]
  imagePosition: string
}

export type ProjectCaseStudy = {
  slug: string
  name: string
  shortName: string
  discipline: string
  image: string
  alt: string
  note: string
  theme: 'heat' | 'ritual' | 'play'
  summary: string
  scope: string
  challenge: string
  idea: string
  strategy: string
  process: { title: string; copy: string }[]
  deliverables: string[]
  growthLoop: { title: string; copy: string; signal: string }[]
  socialSamples: SocialSample[]
}

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: 'everyday-heat',
    name: 'Everyday heat',
    shortName: 'Everyday Heat',
    discipline: 'Brand strategy · Identity · Packaging · Social',
    image: '/images/work-sunday.png',
    alt: 'Chili crisp jars and red peppers on a butter-yellow set',
    note: 'Food & drink / studio concept',
    theme: 'heat',
    summary:
      'A bold pantry brand concept built to make a small everyday ritual feel impossible to forget.',
    scope: 'Brand world, packaging & social direction',
    challenge:
      'Chili crisp has plenty of heat. The opportunity was to give the category a more ownable point of view—playful and expressive, but still at home in a real kitchen.',
    idea:
      'Everyday heat. A jar with enough character to earn its place at the center of the table, not just on the shelf.',
    strategy:
      'A warm, high-contrast visual system makes the product easy to spot. Repeatable food moments turn that identity into useful, appetite-led content people can save and share.',
    process: [
      { title: 'Find the flavor', copy: 'Map the category, the product promise, and the everyday occasions that make this jar worth reaching for.' },
      { title: 'Build the appetite', copy: 'Give the identity its own heat through confident type, a vivid palette, and packaging that reads at a glance.' },
      { title: 'Make it move', copy: 'Turn serving rituals, texture, and quick recipes into a repeatable short-form content system.' },
      { title: 'Carry it through', copy: 'Extend the brand across the pack, product photography, campaign layouts, and social templates.' },
    ],
    deliverables: ['Brand positioning & concept', 'Logo and visual identity direction', 'Packaging and label system', 'Campaign art direction', 'Short-form video storyboards', 'Social content themes'],
    growthLoop: [
      { title: 'Reach', copy: 'Open with a sensory, instantly recognizable food moment.', signal: 'Reach · 3-second views' },
      { title: 'Relevance', copy: 'Show simple ways the product fits into meals people already make.', signal: 'Watch-through · saves' },
      { title: 'Action', copy: 'Keep the product and next step clear from frame to caption.', signal: 'Profile actions · link taps' },
    ],
    socialSamples: [
      { format: '15–20 sec · Reel storyboard', title: 'The finishing spoon', hook: 'One spoonful changes the whole plate.', flow: 'Quick plate-build → chili crisp close-up → final pour → first bite.', growthGoal: 'Make the product benefit clear in the first seconds, then give viewers an idea worth saving.', signals: ['3-second hold', 'Completions', 'Saves'], imagePosition: '48% center' },
      { format: '5-frame · Carousel concept', title: 'Five ways to bring the heat', hook: 'Your everyday lunch, with one good twist.', flow: 'A familiar meal on each card, with the jar as the connecting thread.', growthGoal: 'Turn product discovery into practical inspiration people can revisit and share.', signals: ['Swipe-through', 'Saves', 'Shares'], imagePosition: '25% center' },
      { format: '3-frame · Story sequence', title: 'Pick your plate', hook: 'Where would you add a little heat?', flow: 'A quick choice prompt → serving idea → product reveal and next step.', growthGoal: 'Invite lightweight participation, then make the route from interest to product simple.', signals: ['Replies', 'Sticker taps', 'Profile visits'], imagePosition: '72% center' },
    ],
  },
  {
    slug: 'soft-ritual',
    name: 'Soft ritual',
    shortName: 'Soft Ritual',
    discipline: 'Digital branding · Art direction · Social',
    image: '/images/work-forme.png',
    alt: 'Minimal cream and cobalt skincare bottles with green pear and leaves',
    note: 'Beauty / brand world study',
    theme: 'ritual',
    summary:
      'A calm skincare concept that turns a daily routine into a distinctive, repeatable brand experience.',
    scope: 'Visual identity, product world & content direction',
    challenge:
      'In a crowded beauty feed, soft colors alone do not create distinction. The brand needed a clear visual signature and a useful reason to return to its content.',
    idea:
      'Make care a ritual. Treat the routine as a small, sensory pause—and make every product, frame, and caption feel like part of it.',
    strategy:
      'Pair considered product styling with honest, routine-led storytelling. A flexible palette and consistent framing give the brand recognition without making the content feel repetitive.',
    process: [
      { title: 'Understand the routine', copy: 'Define the audience, product role, and small everyday moments the brand can genuinely own.' },
      { title: 'Set the visual pace', copy: 'Create a calm identity system with intentional color, tactile product photography, and clear hierarchy.' },
      { title: 'Design the series', copy: 'Build repeatable video and carousel formats around texture, application, and simple routine education.' },
      { title: 'Keep it cohesive', copy: 'Translate the art direction into packaging, social templates, launch assets, and a practical content guide.' },
    ],
    deliverables: ['Audience & positioning direction', 'Identity and art direction system', 'Product launch visual language', 'Routine-led video storyboards', 'Carousel and story templates', 'Social publishing themes'],
    growthLoop: [
      { title: 'Discover', copy: 'Lead with a clean visual cue and a question that feels relevant to a real routine.', signal: 'Reach · first-frame hold' },
      { title: 'Learn', copy: 'Share focused product and routine information in short, accessible formats.', signal: 'Completion · saves' },
      { title: 'Return', copy: 'Use a consistent series format to make the next useful piece easy to recognize.', signal: 'Returning viewers · profile visits' },
    ],
    socialSamples: [
      { format: '20–30 sec · Reel storyboard', title: 'A slower start', hook: 'A quiet routine, made visible.', flow: 'Texture close-up → considered application → product in its everyday setting.', growthGoal: 'Use a tactile opening and a complete routine arc to build watch time and product understanding.', signals: ['Watch-through', 'Saves', 'Profile visits'], imagePosition: '35% center' },
      { format: '6-frame · Carousel concept', title: 'The three-step ritual', hook: 'Less noise. A routine that makes sense.', flow: 'One clear step per card, with a product role and an easy-to-follow order.', growthGoal: 'Create practical reference content with a natural save value.', signals: ['Swipe-through', 'Saves', 'Shares'], imagePosition: '55% center' },
      { format: '4-frame · Story sequence', title: 'Skin check-in', hook: 'How does your skin feel today?', flow: 'A simple audience prompt → a gentle tip → one product use case.', growthGoal: 'Make the brand feel conversational and learn which topics resonate.', signals: ['Replies', 'Sticker taps', 'Profile actions'], imagePosition: '78% center' },
    ],
  },
  {
    slug: 'main-character',
    name: 'Main character',
    shortName: 'Main Character',
    discipline: 'Fashion campaign · Social strategy · Production',
    image: '/images/work-play.png',
    alt: 'Fashion campaign portrait against a vivid lime and coral set',
    note: 'Style / campaign concept',
    theme: 'play',
    summary:
      'A confident fashion campaign concept that makes everyday styling feel expressive and made to share.',
    scope: 'Campaign identity, styling stories & social video',
    challenge:
      'Fashion content moves quickly. This concept needed a strong opening image, an ownable campaign voice, and formats that could keep the same idea fresh across a whole feed.',
    idea:
      'Make everyday feel like the main event. Build each look around a point of view, then let the person wearing it own the frame.',
    strategy:
      'A high-energy color story and direct-to-camera confidence make the campaign recognizable. Styling transitions, creator-led moments, and useful outfit breakdowns give the idea room to travel.',
    process: [
      { title: 'Set the point of view', copy: 'Clarify who the campaign is for, how the collection should feel, and what makes its styling memorable.' },
      { title: 'Create the world', copy: 'Develop a bold palette, expressive art direction, and a flexible visual language for the campaign.' },
      { title: 'Plan the moments', copy: 'Storyboard outfit reveals, transitions, close details, and creator-friendly prompts before production.' },
      { title: 'Edit for every screen', copy: 'Adapt the campaign into short-form edits, story frames, carousel styling notes, and launch assets.' },
    ],
    deliverables: ['Campaign positioning & creative idea', 'Fashion art direction system', 'Social-first video storyboards', 'Lookbook and campaign layouts', 'Carousel styling guide', 'Creator and launch content themes'],
    growthLoop: [
      { title: 'Stop', copy: 'Use an immediate visual switch or strong silhouette to earn the first second.', signal: 'Reach · 3-second views' },
      { title: 'Share', copy: 'Make the styling idea specific and easy to send to a friend.', signal: 'Shares · saves' },
      { title: 'Explore', copy: 'Connect each look to a collection, product detail, or next campaign moment.', signal: 'Profile actions · product taps' },
    ],
    socialSamples: [
      { format: '12–18 sec · Reel storyboard', title: 'The fit transition', hook: 'One look. The whole room changes.', flow: 'Everyday frame → clean styling transition → final look and campaign line.', growthGoal: 'Create a strong visual payoff early and a repeatable format for the next look.', signals: ['3-second hold', 'Completions', 'Shares'], imagePosition: 'center 28%' },
      { format: '5-frame · Carousel concept', title: 'Build the look', hook: 'Three details. One point of view.', flow: 'Full look → silhouette → texture → styling detail → collection close.', growthGoal: 'Give viewers an easy styling reference to save and revisit.', signals: ['Swipe-through', 'Saves', 'Product taps'], imagePosition: 'center 52%' },
      { format: '3-frame · Story sequence', title: 'Choose the next look', hook: 'Color A or color B?', flow: 'Two campaign options → audience vote → selected look reveal.', growthGoal: 'Bring the audience into the campaign and keep the next post connected.', signals: ['Poll responses', 'Replies', 'Story completion'], imagePosition: 'center 75%' },
    ],
  },
]

export function getProjectCaseStudy(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const index = projectCaseStudies.findIndex((project) => project.slug === slug)

  return {
    previous: projectCaseStudies[(index - 1 + projectCaseStudies.length) % projectCaseStudies.length],
    next: projectCaseStudies[(index + 1) % projectCaseStudies.length],
  }
}

export function projectTransitionName(slug: string) {
  return `project-${slug}`
}

export function getProjectThemeColor(theme: ProjectCaseStudy['theme']) {
  if (theme === 'heat') return 'var(--coral)'
  if (theme === 'ritual') return '#7184cc'
  return 'var(--acid)'
}

export function getProjectThemeText(theme: ProjectCaseStudy['theme']) {
  if (theme === 'heat') return 'Heat with character'
  if (theme === 'ritual') return 'A calmer kind of care'
  return 'Style your own story'
}
