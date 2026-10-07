import type { Metadata } from 'next'
import { ContactPage } from '@/components/agency/contact-page'

export const metadata: Metadata = {
  title: 'Contact Jo Visuals — Start a project',
  description:
    'Tell Jo Visuals what you are building. Start a conversation about brand identity, social media marketing, campaigns, and digital production.',
  openGraph: {
    title: 'Contact Jo Visuals — Start a project',
    description:
      'Start a conversation about brand identity, social media marketing, campaigns, and digital production.',
  },
}

export default function ContactRoute() {
  return <ContactPage />
}
