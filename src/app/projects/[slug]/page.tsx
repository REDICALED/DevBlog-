import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projectList, projectMap } from '@/lib/portfolioData'
import BackButton from '@/components/aboutme/BackButton'
type PageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projectList.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projectMap[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <main id="top" className="mx-auto max-w-5xl px-6 pb-32 pt-16 md:px-10">
      <div className="border-t border-[var(--text-color)] pt-10">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <BackButton />
          <span>·</span>
          <span>{project.category}</span>
          <span>·</span>
          <span>{project.company}</span>
          <span>·</span>
          <span>{project.period}</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 md:text-lg">
          {project.intro}
        </p>

        {project.image && (
          <div className="mt-8 overflow-hidden rounded-3xl border border-[var(--text-color)]">
            <img
              src={project.image}
              alt={project.title}
              className="h-auto w-full object-cover"
            />
          </div>
        )}
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-[var(--text-color)] p-6 md:sticky md:top-24 md:self-start">
          <p className="text-sm uppercase tracking-[0.2em]">Index</p>
          <div className="mt-6 space-y-3 text-sm">
            {project.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block underline underline-offset-4"
              >
                {section.navLabel}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[var(--text-color)] p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.2em]">Summary</p>
          <div className="mt-6 space-y-5">
            <div className="border-b border-[var(--text-color)] pb-5">
              <p className="text-sm">카테고리</p>
              <p className="mt-1 text-2xl font-semibold">{project.category}</p>
            </div>

            <div className="border-b border-[var(--text-color)] pb-5">
              <p className="text-sm">소속</p>
              <p className="mt-1 text-2xl font-semibold">{project.company}</p>
            </div>

            <div className="border-b border-[var(--text-color)] pb-5">
              <p className="text-sm">기간</p>
              <p className="mt-1 text-2xl font-semibold">{project.period}</p>
            </div>

            <div className="border-b border-[var(--text-color)] pb-5">
              <p className="text-sm">기술</p>
              <p className="mt-1 text-2xl font-semibold">{project.stackLabel}</p>
            </div>

            {project.links && project.links.length > 0 && (
            <div className="border-b border-[var(--text-color)] pb-5">
                <p className="text-sm">링크</p>

                <div className="mt-3 flex flex-col gap-2">
                {project.links.map((link) => (
                    <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-lg font-semibold underline underline-offset-4"
                    >
                    {link.label}
                    </a>
                ))}
                </div>
            </div>
            )}

            {/* <div>
              <p className="text-sm">핵심 내용</p>
              <p className="mt-1 text-2xl font-semibold">{project.cardResult}</p>
            </div> */}
          </div>
        </div>
      </section>

      <section className="mt-16 space-y-6">
        {project.sections.map((section) => (
          <article
            key={section.id}
            id={section.id}
            className="scroll-mt-28 rounded-3xl border border-[var(--text-color)] p-6 md:p-8"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 md:text-base">
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.id}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}