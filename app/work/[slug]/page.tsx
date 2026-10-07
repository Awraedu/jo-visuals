import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProjectCaseStudy } from '@/components/agency/project-case-study'
import { getProject, projects } from '@/components/agency/project-data'

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {
      title: 'Selected work — Jo Visuals',
      description: 'Explore branding, campaigns, and social-first creative by Jo Visuals.',
    }
  }

  return {
    title: `${project.name} — Jo Visuals case study`,
    description: project.summary,
    openGraph: {
      title: `${project.name} — Jo Visuals`,
      description: project.summary,
      images: [project.image],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const projectIndex = projects.findIndex((item) => item.slug === slug)
  const project = projects[projectIndex]

  if (!project) notFound()

  const nextProject = projects[(projectIndex + 1) % projects.length]

  return <ProjectCaseStudy project={project} nextProject={nextProject} />
}
