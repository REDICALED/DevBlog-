import dynamic from 'next/dynamic'

const HeroHeader = dynamic(() => import('@/components/mantine/HeroHeader'), { ssr: false })
const MainPostlist = dynamic(() => import('@/components/main/MainPostlist'), { ssr: false })

const highlights = [
  {
    label: '경력',
    value: '1년 5개월',
    desc: '자사몰 · 그룹웨어 · 상권분석 운영/개발',
  },
  {
    label: '커머스 성과',
    value: 'FCP -10s',
    desc: 'LCP -10s · TBT -11s',
  },
  {
    label: '핵심 경험',
    value: '3개 서비스',
    desc: '운영, 기능 개발, 성능 최적화, 배포 대응',
  },
  {
    label: '개발 방식',
    value: '운영형 개발',
    desc: '현재 구조를 읽고 체감되는 문제를 해결',
  },
]

const experiences = [
  {
    title: '알디에스',
    period: '2025.03 - 2026.03',
    summary:
      '오뚜기몰, 전사 그룹웨어, 상권분석 시스템 운영·개발 담당. Java · Spring · JSP · JavaScript · React 기반 신규 기능 구현, 이슈 대응, 배포, 안정화 업무 수행.',
  },
  {
    title: '리안',
    period: '2024.09 - 2024.12',
    summary:
      '조류 충돌 방지 시스템 연구 프로젝트 참여. 데이터셋 보완, Yolo 마이그레이션, 모니터링 웹사이트 기획 · 디자인 · 프론트 · 배포 전담.',
  },
  {
    title: '개인/외주 개발',
    period: '2024.02 - 2026.03',
    summary:
      '개인 사이트와 작가 · 업체 사이트를 1인 풀스택으로 진행. 요구사항 정리부터 디자인, 프론트 구현, 관리자 기능, 배포까지 전 과정 수행.',
  },
]

const projects = [
  {
    title: '오뚜기몰 운영·고도화',
    stack: 'Java / JSP / JavaScript',
    body:
      '상품 추천 페이지와 장바구니 추천 기능을 개발했고, CSS 경량화, 폰트 정리, gzip, lazy load 적용으로 로딩 성능을 끌어올렸습니다.',
    result: 'FCP 10초 감소 · LCP 10초 감소 · TBT 11초 감소',
  },
  {
    title: '전사 그룹웨어 운영·개발',
    stack: 'Java / JSP / Spring / SQL',
    body:
      '전자결재 양식, 포탈 기능, 게시판, 권한, 자원예약, 검색, 데이터 연계, 오류 처리와 배포 대응까지 담당했습니다.',
    result: '전사 업무 흐름과 운영 안정성 지원',
  },
  {
    title: '상권분석 시스템',
    stack: 'React / JavaScript',
    body:
      '거래처 검색, 나만의 거래처 기능을 신규 개발했고, 마커 렌더링 속도와 표현 로직을 다듬어 장기간 남아 있던 불편을 줄였습니다.',
    result: '영업사원 사용성 향상',
  },
  {
    title: '개인 사이트 / 외주 개발',
    stack: 'Next.js / React / TypeScript',
    body:
      '비용 제약이 큰 환경에서 정적 페이지 중심 구조와 캐시 전략을 설계해 저비용 운영 구조를 만들었습니다.',
    result: '1인 개발 · 배포 · 운영 경험 축적',
  },
]

const skills = [
  'Java',
  'Spring',
  'JSP',
  'JavaScript',
  'React',
  'TypeScript',
  'SQL',
  'GitLab',
  'Vercel',
  'Supabase',
]

export default function Home() {
  return (
    <div className="w-full">
      <HeroHeader />

      <main className="mx-auto max-w-6xl px-6 pb-32 pt-16 md:px-10">
        <section className="grid gap-10 border-t border-[var(--text-color)] pt-16 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] ">
              Introduce
            </p>

            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              개발자 김병찬입니다.
            </h1>
            <br/>
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
                모니터 안에 시각화 하는 모든 것에 관심이 많습니다.
            </h2>


            <div className="space-y-4 text-base leading-8  md:text-lg">
              <p>
                현재는 알디에스에서 오뚜기몰, 전사 그룹웨어, 상권분석 시스템을
                맡고 있습니다.
                <br/>
                자사몰에서는 추천 기능과 성능 최적화를,
                그룹웨어에서는 전자결재·포탈·권한·배포 대응을,
                상권분석 시스템에서는 React 기반 신규 기능 개발을 진행한 경험이 있습니다.
              </p>
              <p>
                저는 레거시 구조와 운영 제약이 있는 서비스일수록 먼저 맥락을
                이해하고, 실제로 체감되는 문제부터 해결하는 방식으로 일해
                왔습니다. 무조건 새 구조를 도입하기보다 현재 환경 안에서
                결과를 만드는 쪽에 강점이 있습니다.
              </p>
              <p>
                개인적으로는 식품 기업의 역사와 브랜드, 시장 흐름을 꾸준히
                기록하고 있습니다. 도메인을 공부하는 일과 서비스를 다루는 일은
                따로 떨어져 있지 않다고 생각하기 때문입니다.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--text-color)] p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.2em] ">
              Summary
            </p>

            <div className="mt-6 space-y-5">
              {highlights.map((item) => (
                <div key={item.label} className="border-b border-[var(--text-color)] pb-5 last:border-b-0 last:pb-0">
                  <p className="text-sm ">{item.label}</p>
                  <p className="mt-1 text-2xl font-semibold">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 ">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24">
          <div className="flex items-end justify-between gap-4 border-t border-[var(--text-color)] pt-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] ">
                Experience
              </p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                현재 커리어
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {experiences.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[var(--text-color)] p-6"
              >
                <p className="text-sm ">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 ">
                  {item.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="border-t border-[var(--text-color)] pt-8">
            <p className="text-sm uppercase tracking-[0.2em] ">
              Featured Projects
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              대표 프로젝트
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-[var(--text-color)] p-6 md:p-8"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm ">{project.stack}</p>
                </div>
                <p className="mt-4 text-sm leading-7 ">
                  {project.body}
                </p>
                <p className="mt-4 text-sm font-medium ">
                  {project.result}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-8 border-t border-[var(--text-color)] pt-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] ">
              Skills
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              기술 스택
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--text-color)] px-4 py-2 text-sm "
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-[var(--text-color)] pt-8">
          <p className="text-sm uppercase tracking-[0.2em] ">
            Writing
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            식품 산업 기록
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 ">
            식품 기업의 역사, 브랜드, 시장 흐름을 꾸준히 기록하고 있습니다.
            단순한 관심사가 아니라, 도메인을 이해하는 방식이기도 합니다.
          </p>

        </section>
      </main>
    </div>
  )
}