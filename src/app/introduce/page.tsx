import dynamic from 'next/dynamic'
import Link from 'next/link'
import {
  educationGroups,
  experiences,
  highlights,
  profile,
  projectMap,
  projectList,
  skills,
} from '@/lib/portfolioData'

const HeroHeader = dynamic(() => import('@/components/mantine/HeroHeader'), {
  ssr: false,
})

export default function Home() {

  return (
    <div id="top" className="w-full min-h-screen">
      <div className='hidden'>
        <HeroHeader />
      </div>
      <main className="mx-auto max-w-6xl px-6 pb-32 pt-16 md:px-10">
        <section className="grid items-start border-t border-[var(--text-color)] pt-16 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em]">Introduce</p>

            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              {profile.title}
            </h1>

            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
              {profile.subtitle}
            </h2>

            <div className="space-y-4 text-base leading-8 md:text-lg">
              {profile.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:text-base">
              {profile.contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="underline underline-offset-4"
                >
                  {item.label} : {item.value}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2 
            ">
              {profile.links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[var(--text-color)] px-4 py-2 text-sm
                transition-none hover:transition-all hover:duration-200 hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] 
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border-2 border-[var(--text-color)] overflow-hidden ml-10">
            <p className="text-sm uppercase tracking-[0.2em]"></p>

            <div className="">
              <img src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/307235ea-5c10-45cb-8549-25d879edea48/60%EC%B5%9C%EC%A2%85/w=1920,quality=90,fit=scale-down"  className="h-auto w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="mt-24 grid gap-8 border-t border-[var(--text-color)] pt-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em]">Skills</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              기술 스택
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
                        <div
              key={skill}
              className={` 
              flex-shrink-0
              transition-none hover:transition-all hover:duration-200 hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] 
               border-[var(--text-color)] border-[1px] rounded-full px-4 py-2 
                grid place-items-center
               `}>
                <span className="text-sm lg:text-md ml-1">{skill}</span>
              </div>

              
            ))}
          </div>
          
        </section>

        <section className="mt-24">
          <div className="flex items-end justify-between gap-4 border-t border-[var(--text-color)] pt-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em]">Career</p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                경력 / 경험
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {experiences.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[var(--text-color)] p-6"
              >
                <p className="text-sm">{item.subtitle}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>

                <div className="mt-3 flex flex-wrap gap-2 text-sm">
                  <span>{item.period}</span>
                  <span>·</span>
                  <span>{item.role}</span>
                </div>

                <p className="mt-4 text-sm leading-7">{item.summary}</p>

                <ul className="mt-4 space-y-2 text-sm leading-7">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>

                {item.relatedProjects.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.relatedProjects.map((slug) => {
                      const project = projectMap[slug]

                      if (!project) return null

                      return (
                        <Link
                          key={slug}
                          href={`/projects/${slug}`}
                          className="
                          transition-none hover:transition-all hover:duration-200 hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] 
                          rounded-full border border-[var(--text-color)] px-3 py-2 text-xs underline underline-offset-4"
                        >
                          {project.title}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="featured-projects" className="mt-24 ">
          <div className="border-t border-[var(--text-color)] pt-8 ">
            <p className="text-sm uppercase tracking-[0.2em]">Projects</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              대표 프로젝트
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projectList.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="
                transition-none hover:transition-all hover:duration-200 hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] 
                block rounded-3xl border border-[var(--text-color)] p-6  md:p-8"
              >
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span>{project.category}</span>
                  <span>·</span>
                  <span>{project.company}</span>
                  <span>·</span>
                  <span>{project.period}</span>
                </div>

                <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm">{project.stackLabel}</p>
                </div>

                <p className="mt-4 text-sm leading-7">{project.cardBody}</p>

                <p className="mt-4 text-sm font-medium">{project.cardResult}</p>

                <div className="mt-6 text-sm underline underline-offset-4">
                  상세 보기
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-[var(--text-color)] pt-8">
          <p className="text-sm uppercase tracking-[0.2em]">Education</p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            학력 / 기타
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {educationGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-3xl border border-[var(--text-color)] p-6"
              >
                <h3 className="text-xl font-semibold">{group.title}</h3>

                <ul className="mt-4 space-y-3 text-sm leading-7">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}