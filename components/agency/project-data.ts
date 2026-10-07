export type SocialSample = {
  type: 'reel' | 'carousel' | 'story'
  platform: string
  format: string
  headline: string
  caption: string
  cta: string
}

export type ProjectProcessStep = {
  number: string
  title: string
  body: string
}

export type AgencyProject = {
  slug: string
  number: string
  name: string
  category: string
  discipline: string
  image: string
  imageAlt: string
  className: string
  note: string
  headline: string
  summary: string
  brief: string
  direction: string
  capabilities: string[]
  processSteps: ProjectProcessStep[]
  socialSamples: SocialSample[]
  growthSteps: { title: string; body: string }[]
  growthSignals: string[]
}

export const projects: AgencyProject[] = [
  {
    slug: 'everyday-heat',
    number: '01',
    name: 'Everyday heat',
    category: 'Food & drink',
    discipline: 'Product identity · Packaging · Campaign',
    image: '/images/work-sunday.png',
    imageAlt: 'Chili crisp jars and red peppers on a butter-yellow set',
    className: 'work-card--featured',
    note: 'Food & drink / studio concept.',
    headline: 'A pantry staple with a point of view.',
    summary:
      'A vivid identity system for a small-batch chili crisp concept—designed to feel tactile on the shelf and instantly legible in a fast-moving feed.',
    brief:
      'Turn a familiar pantry essential into a recognizable brand with enough personality to travel from the kitchen counter to the social feed.',
    direction:
      'Lead with sensory appetite, then carry the same color, voice, and promise through the jar, launch campaign, and social calendar.',
    capabilities: ['Brand strategy', 'Visual identity', 'Packaging', 'Campaign art direction', 'Social content'],
    processSteps: [
      {
        number: '01',
        title: 'Find the flavor',
        body: 'Map the category codes, the weeknight cooking ritual, and the sensory details that make this product memorable.',
      },
      {
        number: '02',
        title: 'Build the appetite',
        body: 'Shape a bold verbal and visual identity around heat, crunch, and the small joy of making a meal your own.',
      },
      {
        number: '03',
        title: 'Make it shelf-ready',
        body: 'Translate the story into a flexible label system, product photography, and launch-ready campaign frames.',
      },
      {
        number: '04',
        title: 'Give it a rhythm',
        body: 'Plan repeatable short-form ideas that move from sensory hooks to recipes, saves, and clear next steps.',
      },
    ],
    socialSamples: [
      {
        type: 'reel',
        platform: 'Instagram',
        format: 'Reel storyboard · 15 sec',
        headline: 'The crunch is the cue.',
        caption: 'Open on the texture, reveal the spoonful, then land on the finished weeknight plate.',
        cta: 'Save for dinner',
      },
      {
        type: 'carousel',
        platform: 'Instagram',
        format: 'Carousel · 5 frames',
        headline: 'One jar. Three weeknight wins.',
        caption: 'A useful meal sequence turns the product story into something worth keeping.',
        cta: 'Swipe for the next idea',
      },
      {
        type: 'story',
        platform: 'Instagram',
        format: 'Story series · 3 frames',
        headline: 'Dinner, sorted.',
        caption: 'A quick poll, a serving suggestion, and a direct action create a simple path to try it.',
        cta: 'Tap for the recipe',
      },
    ],
    growthSteps: [
      { title: 'Earn the pause', body: 'Use texture, motion, and a specific first-frame hook to make the product instantly felt.' },
      { title: 'Give a reason to save', body: 'Build useful recipe and pairing formats that turn a scroll into an idea for later.' },
      { title: 'Learn, then repeat', body: 'Compare watch time, saves, shares, and actions to decide which creative direction deserves another cut.' },
    ],
    growthSignals: ['Three-second hold rate', 'Saves & shares', 'Profile visits', 'Product page actions'],
  },
  {
    slug: 'soft-ritual',
    number: '02',
    name: 'Soft ritual',
    category: 'Beauty & care',
    discipline: 'Digital branding · Art direction · Social',
    image: '/images/work-forme.png',
    imageAlt: 'Minimal cream and cobalt skincare bottles with green pear and leaves',
    className: 'work-card--aside',
    note: 'Beauty / brand world study.',
    headline: 'Make everyday care feel considered.',
    summary:
      'A calm, tactile world for a modern skincare concept—clear enough to build trust, distinctive enough to feel like a daily ritual.',
    brief:
      'Help a thoughtful skincare range stand out in a crowded category without relying on clinical sameness or overpromising.',
    direction:
      'Pair a quiet color system with human, sensory storytelling. Let helpful education earn attention, then make the routine feel simple to repeat.',
    capabilities: ['Positioning', 'Visual identity', 'Digital direction', 'Product storytelling', 'Social content'],
    processSteps: [
      {
        number: '01',
        title: 'Listen to the routine',
        body: 'Understand the audience, the real moments skincare fits into, and the questions that interrupt consistency.',
      },
      {
        number: '02',
        title: 'Set a softer tone',
        body: 'Create a clear visual language with considered color, ingredient-led imagery, and a warm, useful voice.',
      },
      {
        number: '03',
        title: 'Make the system work',
        body: 'Carry the identity across product touchpoints, landing-page direction, launch assets, and education formats.',
      },
      {
        number: '04',
        title: 'Build a repeatable series',
        body: 'Turn the brand story into approachable routine content that can be tested, learned from, and expanded.',
      },
    ],
    socialSamples: [
      {
        type: 'reel',
        platform: 'Instagram',
        format: 'Reel storyboard · 20 sec',
        headline: 'A softer start to the day.',
        caption: 'A morning routine unfolds in small, satisfying steps with one clear product moment.',
        cta: 'Keep this routine',
      },
      {
        type: 'carousel',
        platform: 'Instagram',
        format: 'Carousel · 4 frames',
        headline: 'What does your skin need today?',
        caption: 'A saveable guide answers one useful question at a time, without overwhelming the feed.',
        cta: 'Swipe to find your step',
      },
      {
        type: 'story',
        platform: 'Instagram',
        format: 'Story series · 3 frames',
        headline: 'Small steps. Softer skin.',
        caption: 'A question sticker opens a conversation, followed by a routine tip and product detail.',
        cta: 'Build your routine',
      },
    ],
    growthSteps: [
      { title: 'Answer one question', body: 'Start with a useful skincare question and make the first frame easy to understand.' },
      { title: 'Make education saveable', body: 'Break product guidance into concise, consistent formats people can return to.' },
      { title: 'Use signals with care', body: 'Read watch time, saves, replies, and site actions together before evolving the next series.' },
    ],
    growthSignals: ['Video completion', 'Saves & replies', 'Routine link taps', 'Repeat visits'],
  },
  {
    slug: 'main-character',
    number: '03',
    name: 'Main character',
    category: 'Fashion & culture',
    discipline: 'Fashion campaign · Social production',
    image: '/images/work-play.png',
    imageAlt: 'Fashion campaign portrait against a vivid lime and coral set',
    className: 'work-card--wide',
    note: 'Style / campaign concept.',
    headline: 'Let the next generation lead the frame.',
    summary:
      'A confident campaign world for an independent fashion concept—built to turn a point of view into a recognizable visual language.',
    brief:
      'Give an emerging fashion label a clear campaign voice that feels expressive, community-minded, and native to social channels.',
    direction:
      'Create a high-contrast visual system with confident casting, punchy copy, and modular edits that can flex from launch film to story cutdown.',
    capabilities: ['Campaign strategy', 'Art direction', 'Photography direction', 'Short-form video concepts', 'Social rollout'],
    processSteps: [
      {
        number: '01',
        title: 'Define the attitude',
        body: 'Find the tension, audience insight, and cultural references that make the label feel like itself.',
      },
      {
        number: '02',
        title: 'Cast the world',
        body: 'Set a visual point of view through color, framing, styling, movement, and a strong campaign line.',
      },
      {
        number: '03',
        title: 'Shoot for the edit',
        body: 'Plan the hero story and social-first cutdowns together so each format feels intentional, not resized.',
      },
      {
        number: '04',
        title: 'Release in chapters',
        body: 'Use the launch, creator moments, and follow-up stories to give attention a clear reason to build.',
      },
    ],
    socialSamples: [
      {
        type: 'reel',
        platform: 'Instagram',
        format: 'Reel storyboard · 12 sec',
        headline: 'Wear your own story.',
        caption: 'A movement-led opening introduces the look, the attitude, and the campaign in one quick arc.',
        cta: 'Meet the collection',
      },
      {
        type: 'carousel',
        platform: 'Instagram',
        format: 'Carousel · 6 frames',
        headline: 'One look. Your rules.',
        caption: 'Styling details and alternate frames invite the audience to interpret the collection their way.',
        cta: 'Swipe to style it',
      },
      {
        type: 'story',
        platform: 'Instagram',
        format: 'Story series · 3 frames',
        headline: 'The drop is yours.',
        caption: 'A countdown, a creator angle, and a direct product action give the launch a social rhythm.',
        cta: 'See the drop',
      },
    ],
    growthSteps: [
      { title: 'Create a point of view', body: 'Lead with a recognizable campaign hook that gives the audience something to react to.' },
      { title: 'Invite participation', body: 'Use styling prompts, creator perspectives, and audience-led stories to extend the idea.' },
      { title: 'Carry the momentum', body: 'Track completion, shares, profile actions, and drop traffic to shape the next chapter.' },
    ],
    growthSignals: ['Video completion', 'Shares & mentions', 'Profile actions', 'Collection visits'],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
