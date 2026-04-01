export type ContactItem = {
  label: string
  value: string
  href: string
}

export type LinkItem = {
  label: string
  href: string
}

export type HighlightItem = {
  label: string
  value: string
  desc: string
}

export type ExperienceItem = {
  title: string
  subtitle: string
  period: string
  role: string
  summary: string
  bullets: string[]
  relatedProjects: string[]
}

export type EducationGroup = {
  title: string
  items: string[]
}

export type ProjectSection = {
  id: string
  navLabel: string
  title: string
  paragraphs: string[]
}

type ProjectItem = {
  slug: string
  title: string
  category: string
  company: string
  period: string
  stackLabel: string
  cardBody: string
  cardResult: string
  intro: string
  image?: string
  links?: {
  label: string
  href: string
}[]
  sections: ProjectSection[]
}

export const profile: {
  title: string
  subtitle: string
  paragraphs: string[]
  contacts: ContactItem[]
  links: LinkItem[]
} = {
  title: '개발자 김병찬입니다.',
  subtitle: '오버헤드와 트레이드오프를 깊게 고려하는 구현을 지향합니다.',
  paragraphs: [
    'React와 Next.js 기반 프로젝트를 중심으로 디자인, 개발, 배포, 최적화 전반을 경험해 왔습니다.',
    '현재는 알디에스에서 오뚜기몰, 전사 그룹웨어, 상권분석 시스템을 맡고 있으며, 기능 개발과 운영 안정화, 성능 개선을 함께 다루고 있습니다.',
    '레거시 구조와 운영 제약이 있는 서비스일수록 먼저 맥락을 파악하고, 실제로 체감되는 문제부터 해결하는 방식으로 일합니다.',
  ],
  contacts: [
    {
      label: 'E-mail',
      value: 'redicaled@gmail.com',
      href: 'mailto:redicaled@gmail.com',
    },
    {
      label: 'Tel',
      value: '+82-10-9111-5310',
      href: 'tel:+821091115310',
    },
  ],
  links: [
    {
      label: 'GitHub',
      href: 'https://www.github.com',
    },
    {
      label: '개인 사이트',
      href: 'https://www.aggingkobe.com',
    },
  ],
}

export const highlights: HighlightItem[] = [
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
    label: '대표 프로젝트',
    value: '8+',
    desc: '',
  },
  {
    label: '개발 방식',
    value: '운영형 개발',
    desc: '현재 구조를 읽고 체감되는 문제를 해결',
  },
]

export const skills: string[] = [
  'Next/React',
  'TypeScript',
  'Java',
  'Spring',
  'JSP',
  'SQL',
  'Tailwind CSS',
  'Linux',
  'C/C++',
]

export const experiences: ExperienceItem[] = [
  {
    title: '알디에스',
    subtitle: '오뚜기몰 · 그룹웨어 · 상권분석 운영/개발',
    period: '2025.03 - 2026.03',
    role: '운영 · 개발 담당',
    summary:
      '오뚜기몰, 전사 그룹웨어, 상권분석 시스템을 맡으며 신규 기능 구현, 운영 이슈 대응, 배포, 안정화 업무를 수행했습니다.',
    bullets: [
      '이커머스 프로젝트 개발 참여',
      '그룹웨어 관련 유지보수 및 신규 기능 개발',
      '상권분석 React 기반 신규 기능 개발',
    ],
    relatedProjects: [
      'rds-ottogi-mall',
      'rds-groupware',
      'rds-sales-analysis',
    ],
  },
  {
    title: '주식회사 리안',
    subtitle: '해양 분야 연구개발 기업',
    period: '2024.09 - 2024.12',
    role: '일경험 인턴 · 인턴 연구원',
    summary:
      '연구개발 환경에서 웹 대시보드, AI 모델 개선, 현장 네트워크 환경 구축을 함께 경험했습니다.',
    bullets: [
      '풍력 발전기 조류 충돌 탐지 대시보드 웹 사이트 개발',
      '조류 탐지 인공지능 모델 개선 참여',
      '카메라 및 LTE 라우터 기반 온프레미스 네트워크 환경 구축 참여',
    ],
    relatedProjects: ['bird-collision-dashboard'],
  },
  {
    title: '개인 / 외주 개발',
    subtitle: '1인 풀스택 프로젝트',
    period: '2024.02 - 2026.03',
    role: '기획 · 디자인 · 개발 · 배포',
    summary:
      '개인 사이트와 작가·업체 사이트를 직접 만들며 요구사항 정리부터 디자인, 구현, 관리자 기능, 배포까지 전 과정을 담당했습니다.',
    bullets: [
      '개인 사이트 Project-自記 운영',
      '외주 사이트 다수 제작',
      '저비용 운영 구조와 배포 방식 설계',
    ],
    relatedProjects: ['personal-site-jagi', 'client-sites'],
  },
]

export const educationGroups: EducationGroup[] = [
  {
    title: '학력',
    items: [
      '강원대학교 컴퓨터과학과 졸업 · 2017.03 - 2024.02',
      '청원고등학교 졸업 · 2014.03 - 2017.02',
    ],
  },
  {
    title: '기타',
    items: ['42서울 본과정 · 2022.03 - 2024.02'],
  },
]

export const projectList: ProjectItem[] = [
  {
    slug: 'rds-ottogi-mall',
    title: '오뚜기몰 운영·고도화',
    category: 'RDS Project',
    company: '알디에스',
    period: '2025.03 - 2026.03',
    stackLabel: 'Java / JSP / JavaScript',
    cardBody:
      '재고 관리, CS 운영, 유통, 기획 등 다양한 직무의 현업부서와 협업하며 이커머스 사이트 운영에 필요한 개발 업무를 수행했습니다.',
    cardResult: '사이트 속도 개선 - FCP 10초 감소 · LCP 10초 감소 · TBT 11초 감소',
    intro:
      '오뚜기 자사몰 운영 과정에서 추천 기능 확장과 프론트 성능 최적화를 함께 맡았습니다.',
    image: 'https://thumb.mt.co.kr/cdn-cgi/image/f=avif/21/2024/08/2024080110035688062_1.jpg',
    links: [{ label: '서비스 링크', href: 'https://www.otokimall.com' },],
      sections: [
      {
        id: 'overview',
        navLabel: '01 개요',
        title: '개요',
        paragraphs: [
          '오뚜기몰은 운영 중인 자사몰이어서 새로운 기능 개발과 안정적 운영을 동시에 요구하는 환경이었습니다.',
          '저는 추천 기능 확장과 프론트엔드 성능 최적화를 함께 맡았고, 사용자가 직접 느끼는 로딩 속도와 화면 반응을 개선하는 데 집중했습니다.',
        ],
      },
      {
        id: 'role',
        navLabel: '02 맡은 역할',
        title: '맡은 역할',
        paragraphs: [
          '일반적인 이커머스 사이트에서 필요한 기능들을 개발하면서, 현업부서와 협업해 실제로 체감되는 개선을 만드는 역할을 했습니다.',
            '특히 프론트엔드 성능 최적화에서는 페이지 로딩과 인터랙션 대기 시간을 줄이는 데 집중하며, 실제로 사이트 속도 개선을 만드는 경험을 했습니다.',

        ],
      },
      {
        id: 'work',
        navLabel: '03 수행 내용',
        title: '수행 내용',
        paragraphs: [
          '지속적으로 제기되던 속도 이슈 개선을 목표로 CSS 경량화, 폰트 정리, gzip 적용, 이미지 lazy load 적용, 외부 리소스 정리 등 실제 렌더링에 직접 영향을 주는 부분을 점검하고 반영했습니다.',
          '기존 레거시 구조를 파악해 상품 추천 페이지와 장바구니 추천 기능 등 운영 중인 기능을 개선하는 동시에, 신규 기능 개발도 함께 진행했습니다.',
        ],
      },
      {
        id: 'result',
        navLabel: '04 성과',
        title: '성과',
        paragraphs: [
          '주요 성능 지표 기준으로 FCP 10초 감소, LCP 10초 감소, TBT 11초 감소를 만들었습니다.',
          '수치뿐 아니라 첫 화면이 드러나는 속도와 인터랙션 대기 시간을 줄여, 실제 사용자가 체감하는 사이트 속도 개선을 만드는 경험을 했습니다.',
          '이커머스 사이트에서 실제로 체감되는 개선을 만드는 과정에서, 현업부서와 협업하며 필요한 기능을 개발하는 경험도 함께 쌓을 수 있었습니다.',
        ],
      },
    ],
  },
  {
    slug: 'rds-groupware',
    title: '전사 그룹웨어 운영·개발',
    category: 'RDS Project',
    company: '알디에스',
    period: '2025.03 - 2026.03',
    stackLabel: 'Java / JSP / Spring / SQL',
    cardBody:
      '전자결재 양식, 게시판, 권한, 자원예약, 검색, 데이터 연계, 오류 처리와 배포 대응 등 그룹웨어 관련 모든 업무를 담당했습니다.',
    cardResult: '전사 업무 흐름과 운영 안정성 지원',
    intro:
      '여러 부서가 매일 사용하는 내부 시스템이기 때문에, 정확성과 안정성이 중요한 프로젝트였습니다. 단순히 기능을 만드는 것을 넘어서, 실제 업무 흐름과 운영 맥락을 이해하고 필요한 개선을 반영하는 방식으로 일했습니다.',
    sections: [
      {
        id: 'overview',
        navLabel: '01 개요',
        title: '개요',
        paragraphs: [
          '그룹웨어는 전사 사용자가 공통으로 사용하는 시스템이기 때문에, 단순히 기능을 만드는 것을 넘어서 실제 업무 흐름과 운영 맥락을 이해하는 것이 중요했습니다.',
          '전자결재 , 게시판, 권한, 자원예약, 검색, 데이터 연계 등 그룹웨어 관련 모든 업무를 담당하며, 실제 업무 흐름과 운영 안정성을 지원하고 관계사별 특수한 조건의 신규 기능들을 개발하는 역할을 했습니다.',
        ],
      },
      {
        id: 'role',
        navLabel: '02 맡은 역할',
        title: '맡은 역할',
        paragraphs: [
          '전자결재 양식, 포탈 기능, 게시판, 권한 처리, 자원예약, 검색, 데이터 연계 기능을 개발하고 유지보수했습니다.',
          '운영 중 발생하는 오류를 분석하고 수정했으며, 배포 전후 점검과 대응까지 맡아 서비스 안정성 유지에 참여했습니다.',
        ],
      },
      {
        id: 'work',
        navLabel: '03 수행 내용',
        title: '수행 내용',
        paragraphs: [
          '단순 화면 수정에 그치지 않고 실제 사용 부서의 업무 흐름을 기준으로 문제를 해석하고, 최소한의 변경으로 안정적으로 반영하는 데 집중했습니다.',
          '레거시 구조와 운영 프로세스가 강한 시스템이었기 때문에, 영향 범위를 빠르게 읽고 안전하게 배포하는 감각이 중요했습니다.',
        ],
      },
      {
        id: 'result',
        navLabel: '04 성과',
        title: '성과',
        paragraphs: [
          '전사 시스템 운영 안정성을 지원했고, 반복적으로 사용되는 업무 흐름에서 발생하는 문제를 빠르게 해소할 수 있는 실무 경험을 쌓았습니다.',
          '특히 운영형 개발 환경에서 필요한 정확성, 영향 범위 판단, 배포 대응 감각을 익힐 수 있었습니다.',
        ],
      },
    ],
  },
  {
    slug: 'rds-sales-analysis',
    title: '상권분석 시스템',
    category: 'RDS Project',
    company: '알디에스',
    period: '2025.03 - 2026.03',
    stackLabel: 'React / JavaScript',
    cardBody:
      '거래처 검색, 나만의 거래처 기능을 신규 개발했고, 마커 렌더링 속도와 표현 로직을 다듬어 장기간 남아 있던 불편을 줄였습니다.',
    cardResult: '영업사원 사용성 향상',
    intro:
      '	React 기반 상권분석 웹서비스 운영·개발 프로젝트로, 영업사원이 사용하는 시스템의 불편사항을 반영해 기존 기능을 개선하고, 거래처 검색 및 나만의 거래처 기능을 신규 개발하였습니다.',
    sections: [
      {
        id: 'overview',
        navLabel: '01 개요',
        title: '개요',
        paragraphs: [
          '상권분석 시스템은 영업 현장에서 활용되는 서비스로, 지도와 데이터 표시 방식이 사용자 경험에 직접적인 영향을 주는 구조였습니다.',
          '기존에 장기간 개선되지 않던 영역이 있었고, 저는 이를 다시 정리하면서 실제 사용 흐름에 맞는 화면 개선을 진행했습니다.',
        ],
      },
      {
        id: 'role',
        navLabel: '02 맡은 역할',
        title: '맡은 역할',
        paragraphs: [
          '거래처 검색 기능과 나만의 거래처 기능 등 현장에서 필요한 기능들을 신규 개발했습니다.',
          '또한 지도 기반 화면에서 마커 렌더링 속도와 표현 로직을 다듬으며 사용자 입장에서 불편했던 인터랙션을 최적화했습니다.',
        ],
      },
      {
        id: 'work',
        navLabel: '03 수행 내용',
        title: '수행 내용',
        paragraphs: [
          'UI 디자인부터 시작하여 React 컴포넌트 구조와 데이터 흐름을 개선하는 작업을 함께 진행했습니다.',
          '지도 인터랙션 개선에서는, 마커 렌더링 속도를 높이고 표현 로직을 다듬어 실제 사용자가 느끼는 불편을 줄이는 데 집중했습니다.',
          '신규 기능 개발에서는, 대표적으로 거래처 검색과 나만의 거래처 기능을 추가하였습니다. 데이터 구조와 API 연동 방식을 데이터 팀과 협업하여, 실제 영업 현장에서 필요한 기능이 안정적으로 동작하도록 구현했습니다.',
        ],
      },
      {
        id: 'result',
        navLabel: '04 성과',
        title: '성과',
        paragraphs: [
          '장기간 남아 있던 불편 요소를 줄였고, 영업사원의 사용성을 높이는 방향으로 기능을 정리했습니다.',
          'React 기반 화면 개발과 지도 인터랙션 개선 경험을 통해, 실사용자 중심 기능 설계 감각을 더욱 쌓을 수 있었습니다.',
        ],
      },
    ],
  },
  {
    slug: 'bird-collision-dashboard',
    title: '풍력 발전기 - 조류 충돌 방지 시스템 개발, 연구 프로젝트',
    category: 'Research Project',
    company: '주식회사 리안',
    period: '2024.09 - 2024.12',
    stackLabel: '웹 개발 / AI 모델 개선 / 온프레미스 네트워크',
    cardBody:
      '풍력 발전기 조류 충돌 탐지용 대시보드 웹사이트를 만들고, 조류 탐지 AI 모델 개선과 카메라·LTE 라우터 기반 현장 네트워크 구축에도 참여했습니다.',
    cardResult: '웹 · 모델 · 현장 환경을 함께 다룬 프로젝트',
    intro:
      '리안 인턴 기간에 진행한 연구개발 프로젝트입니다. 웹 대시보드 개발뿐 아니라 AI 모델 개선과 현장 네트워크 환경까지 함께 다루며, 서비스가 실제 현장에서 동작하기 위해 필요한 맥락을 넓게 경험했습니다.',
    links: [{ label: '사이트 링크', href: 'tmp-aiacs-len2-redis-projects-5bead2f8.vercel.app' },
        { label: 'yolo 학습 노트', href: 'https://bckim.super.site/%ed%94%84%eb%a1%9c%ec%a0%9d%ed%8a%b8-%ed%8f%ac%ed%8a%b8%ed%8f%b4%eb%a6%ac%ec%98%a4-1/%ed%92%8d%eb%a0%a5-%eb%b0%9c%ec%a0%84%ea%b8%b0-%ec%a1%b0%eb%a5%98-%ec%b6%a9%eb%8f%8c-%eb%b0%a9%ec%a7%80-%ec%8b%9c%ec%8a%a4%ed%85%9c-%ea%b0%9c%eb%b0%9c-%ec%97%b0%ea%b5%ac-%ed%94%84%eb%a1%9c%ec%a0%9d%ed%8a%b8/yolo-%ed%95%99%ec%8a%b5-%eb%85%b8%ed%8a%b8' },
    ],

    image: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/cd7a5a4b-38ab-4e56-8064-1e4bbf5782f0/image/w=1920,quality=90,fit=scale-down',
      sections: [
      {
        id: 'overview',
        navLabel: '01 개요',
        title: '개요',
        paragraphs: [
          '프로젝트 초기 개발 단계에서 객체 탐지 모델 학습과 네트워크 장비 연결 프로세스가 진행 중인 상태에 참여하였습니다.',
          '단순히 화면만 만드는 일이 아니라, 탐지 결과를 보여주는 웹 화면과 AI 모델, 현장 장비가 함께 맞물려야 했기 때문에 여러 영역을 동시에 이해해야 했습니다.',
        ],
      },
      {
        id: 'role',
        navLabel: '02 객체 탐지 모델 학습',
        title: '객체 탐지 모델 학습',
        paragraphs: [
          '프로세스에 적응하며, 현재 진행 중인 모델 학습의 개선점을 찾아내고 해결했습니다. 학습 조류 데이터 종류 다양성의 부재, yolov5 버전 선택의 당위성, train/validation/test 이미지 셋 분배의 미흡함을 발견하고 개선했습니다.',
          '당시 진행 중이던 조류 학습 데이터들은, 실제 한국의 바닷새가 아닌 데이터가 많은 찾기 쉬운 조류 데이터들이었습니다. 실제 설치 환경은 한국 해안 풍력발전소이기에, 조류 데이터의 재선정이 필요했습니다. 따라서 해양환경정보포털의 국가해양생태계종합조사 데이터에 담긴, 실제 바다에서 출현하는 바닷새를 빈도수가 높은 우선순위로 선정하였습니다.',
          'yolo(You Only Look Once)는 객체를 빠르게 탐지하고 영역을 표시하는 인공지능 모델로 현재 연구에 적합한 모델이었습니다. 하지만 현재 11버전까지 나온 시점에서, 참고할 코드가 많다는 이유로 전임자가 5버전으로만 코드를 구성해놓은 상태였습니다. 더 적은 파라미터로 더 높은 정확도를 보이고 종합적인 속도와 효율성이 크게 증가하여, 이를 통해서 프로젝트에 기여하였습니다.',
          '전임자의 미흡함으로, train/validation/test 이미지 데이터 셋 분배엔 validation과 test set이 혼재되어있다는 큰 문제가 있었습니다. 해당 성능 평가가 전부 과적합되었다는 사실을 발견하고 보고하였습니다. 또한 이를 해결하기 위해 데이터 증강을 사용하자는 의견을 냈고, 팀원들과 파이썬 코드로 구현하여 해결하였습니다. 이미지 회전, 크기 조정, 뒤집기, 잘라내기 등 증강 기법을 이용하여 데이터 셋을 늘려 데이터셋을 재분리하였습니다.',
          '',
          '',

        ],
      },
      {
        id: 'work',
        navLabel: '03 조류 충돌 탐지 모니터링 웹 사이트 개발',
        title: '조류 충돌 탐지 모니터링 웹 사이트 개발',
        paragraphs: [
          '탐지 결과를 확인하고 운영자가 상태를 파악할 수 있는 웹 화면 구조를 정리했습니다. 연구개발 프로젝트 특성상 데이터와 화면의 연결 방식이 자주 바뀔 수 있어, 변경에 대응하기 쉬운 흐름을 우선했습니다.',
          '2달이란 시간 동안, 모든 기능을 만드는 것엔 한계가 있었고 백엔드와 배포 서버가 없었습니다. 따라서 실제 모델 학습과 네트워크 연결이 진행되는 상황에 맞춰, 화면에서 보여주는 데이터 구조와 흐름을 유연하게 바꿀 수 있도록 작업했습니다.',
        ],
      },
      {
        id: 'result',
        navLabel: '04 프로젝트 성과 및 배운점',
        title: '프로젝트 성과 및 배운점',
        paragraphs: [
          '웹과 모델, 현장 장비가 분리되지 않는다는 점을 몸으로 익힌 프로젝트였습니다.',
          '기본적인 보고서 작성, 회의 경험, 팀 협업 환경 경험부터 시작하여, It 산업에서 국책 사업을 전담하여 투자를 받는 절차나 프론트뿐만 아니라 많은 경험을 하였습니다.',
          '연구개발 프로젝트에서 필요한 유연한 대응과 여러 영역을 함께 보는 감각을 쌓을 수 있었습니다.',
        ],
      },
    ],
  },
  {
    slug: 'personal-site-jagi',
    title: '개인 사이트 개발 (Project - 自記)',
    category: 'Personal Project',
    company: '개인 프로젝트',
    period: '2024.02 - 2026.03',
    stackLabel: 'Next.js / React / TypeScript / Vercel / Supabase',
    cardBody:
      '개인 사이트 Project-自記를 1인 풀스택으로 설계하고 운영했습니다. 소개, 기록, 프로젝트를 담는 구조와 정적 중심 배포 전략을 직접 다뤘습니다.',
    cardResult: '개인 브랜딩과 기록 구조 구축',
    intro:
      '자기소개와 기록, 프로젝트를 담는 개인 사이트입니다. 콘텐츠 구조, 프론트 구현, 배포 방식까지 직접 다루며 개인 브랜드와 운영 구조를 함께 설계했습니다.',
    links: [{ label: '사이트 링크', href: 'www.aggingkobe.com' },],
    image: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/ae3df414-4a90-4b31-a963-b195b2243d9c/thumbnail/w=1920,quality=90,fit=scale-down',
      
    sections: [
      {
        id: 'overview',
        navLabel: '01 개요',
        title: '개요',
        paragraphs: [
          '‘웹 사이트가 갖는 공간성’ - 한 사이트에서 다양한 나의 모습, 다양한 공간성을 느끼게 하고 싶었습니다.',
          '단순한 정적 페이지를 넘어, 관리자 기능과 함께 평생 쓸 수 있는 사이트 목표로, 콘텐츠 구조와 운영 방식을 함께 고민했습니다.',
        ],
      },
      {
        id: 'structure',
        navLabel: '02 구조 설계',
        title: '구조 설계',
        paragraphs: [
          '블로그 게시물은 자주 변하지 않는다는 특성상, SSG렌더링과 캐싱으로 비용 최적화하는 방향으로 접근했습니다.',
          '흑백 전환, 랜덤 색 변환, 상단 이동, 다크모드 기능이 있는 상단 내비게이션 바와 다양한 애니메이션을 통해 사이트 자체에서 나의 개성을 드러내는 구조를 설계했습니다.',
        ],
      },
      {
        id: 'build',
        navLabel: '03 구현 / 배포',
        title: '구현 / 배포',
        paragraphs: [
          'Next.js를 활용해 프론트엔드 구현을 직접 다뤘고, Vercel과 Supabase를 활용해 배포와 데이터 관리를 함께 처리했습니다.',
          '정적 페이지 중심 구조로 운영 부담을 낮추면서도, 관리자 기능을 통해 콘텐츠를 직접 갱신할 수 있도록 했습니다.',
        ],
      },
      {
        id: 'result',
        navLabel: '04 프로젝트 성과 및 배운점',
        title: '프로젝트 성과 및 배운점',
        paragraphs: [
          '이전부터 나의 철학이 온전히 담긴 웹 사이트를 만들고 싶었고, 그에 맞는 부끄럽지 않은 퀄리티로 구현하고 싶었습니다.',
          '1인 개발, 배포, 운영을 지속적으로 반복하며 혼자서도 끝까지 가져가는 감각을 강화했습니다.',
          '디자인, 기획, 구현, 배포, 유지보수, 최적화 등 프론트 개발 전반의 프로세스를 전부 1인 개발로 경험한 점은 정말 큰 자산이 되었습니다.'
        ],
      },
    ],
  },
  {
    slug: 'client-sites',
    title: '사이트 외주 개발 (다수)',
    category: 'Client Work',
    company: '외주 프로젝트',
    period: '2024.02 - 2026.03',
    stackLabel: 'Next.js / React / TypeScript',
    cardBody:
      '작가·업체 사이트를 요구사항 정리부터 디자인, 프론트 구현, 관리자 기능, 배포까지 1인 풀스택으로 진행했습니다.',
    cardResult: '요구사항부터 배포까지 전 과정 수행',
    intro:
      '여러 외주 사이트를 맡으며 요구사항 해석, 화면 설계, 구현, 운영까지 전체 흐름을 혼자 책임지는 경험을 쌓았습니다.',
    links: [{ label: 'HanHyeon', href: 'https://hanhyeon.kr/' }, { label: 'duldol jung : jimi', href: 'https://www.duldoljimi.com/' }, { label: 'hnhyn', href: 'https://www.hnhyn.kr/' },],
    image: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/b9cbdb0a-399b-42e1-bfd9-71a4e0fbaac5/hnhynkr/w=1920,quality=90,fit=scale-down',
    
      sections: [
      {
        id: 'overview',
        navLabel: '01 개요',
        title: '개요',
        paragraphs: [
          '외주 프로젝트는 각기 다른 예산과 일정, 요구사항 안에서 빠르게 판단하고 결과를 내야 하는 환경이었습니다.',
          '저는 단순 제작이 아니라 요구사항을 정리하고 실제 구현 가능 범위로 다시 구조화하는 역할까지 함께 맡았습니다.',
        ],
      },
      {
        id: 'planning',
        navLabel: '02 기획 / 디자인',
        title: '기획 / 디자인',
        paragraphs: [
          '고객이 말하는 필요와 실제로 사이트에 들어가야 하는 기능 사이의 간격을 줄이는 데 집중했습니다.',
          '주로 회화, 사진 등 작가분들의 사이트를 맡았기에 작가들만의 개성을 살린 독창적인 디자인과 화면 구조를 설계했습니다.',
        ],
      },
      {
        id: 'build',
        navLabel: '03 구현 / 운영',
        title: '구현 / 운영',
        paragraphs: [
          '프론트 구현, 관리자 기능, 배포 환경 정리까지 직접 처리했고, 비용 제약이 큰 환경에서는 정적 페이지 중심 구조로 운영 부담을 낮췄습니다.',
          '관리자 페이지를 함께 만들어 고객이 직접 콘텐츠를 갱신할 수 있도록 했고, 배포 후에도 운영 이슈 대응과 개선을 함께 다루며 실제 운영 환경에서의 감각을 키웠습니다.',
          'Cloudflare Pages, Vercel, Supabase 등 다양한 도구와 플랫폼을 활용하여 캐싱을 통한 비용 최적화와 안정적인 운영 구조를 설계했습니다.',
        ],
      },
      {
        id: 'result',
        navLabel: '04 프로젝트 성과 및 배운점',
        title: '프로젝트 성과 및 배운점',
        paragraphs: [
          '스킬을 배우고나면 데모 사이트만 남거나 링크가 끊기는 프로젝트들을 정말 많이 봐왔습니다.',
          '웹 사이트를 개발할 수 있는 능력이 있기에, 개발이 닿지 않는 사용자들에게 그 가치를 전달하고 싶었습니다.',
            '실제 운영되는 사이트를 만드는 경험을 통해, 단순히 기술을 구현하는 것을 넘어, 그것이 실제로 어떻게 사용되고 유지되는지까지 함께 고려하는 감각을 키울 수 있었습니다.',
        ],
      },
    ],
  },
  {
    slug: '42-seoul-projects',
    title: '42 서울 프로젝트',
    category: 'School / Training',
    company: '42서울',
    period: '2022.03 - 2024.02',
    stackLabel: 'C / C++ / Git / 협업',
    cardBody:
      '42서울 본과정에서 여러 프로젝트를 수행하며 문제 해결 방식, 기본기, 협업 능력을 향상시켰습니다.',
    cardResult: '기초 체력과 협업 감각 강화',
    intro:
      '42서울 과정은 지금의 개발 습관과 문제 해결 방식을 다지는 바탕이 된 경험입니다. 여러 프로젝트를 통해 기본기와 협업 감각을 함께 키웠습니다.',
    
    image: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/456811fa-1dc3-4119-95d6-81a13d9c6653/fdf/w=1920,quality=90,fit=scale-down',
      
      sections: [
      {
        id: 'overview',
        navLabel: '01 개요',
        title: '개요',
        paragraphs: [
          '교재, 수업, 교수가 없는 42 서울 과정에서의 프로젝트들은 동료와의 성장만이 답이었습니다.',
          '여러 프로젝트를 반복하면서 Linux shell command 부터 시작하여, C와 C++, Docker, 웹, 다양한 CS 지식들을 배웠습니다.',
        ],
      },
      {
        id: 'learning',
        navLabel: '02 프로젝트 내용',
        title: '프로젝트 내용',
        paragraphs: [
          'libft - libc(glibc)를 참고하여, 앞으로 42 seoul 커리큘럼에서 활용할 나만의 라이브러리 구현',
          'get_next_line - C에서 fd로 읽어온 라인 한 줄을 반환하는 추가 라이브러리 함수 구현',
          'pipex - unix의 명령프롬프트에서 사용되는 pipe. C 프로그램 구현',
          'minishell - C언어로 POSIX shell 기반 명령 프롬프트 개발',
          'Cub3d - C언어로 Ray Casting 게임 (Doom) 프로그램 개발',
          'IRC - 동시에 여러 클라이언트와 데이터를 주고받을 수 있는 C++ IRC (Internet Relay Chat) 서버 개발',
          'ft_transcendence - 2d 핑퐁 게임 및 소셜 기능을 제공하는 웹 프로젝트',
          '위와 같은 총 28개의 프로젝트들을 진행하였습니다.'
        ],
      },
      {
        id: 'collaboration',
        navLabel: '03 프로젝트 성과 및 배운점',
        title: '프로젝트 성과 및 배운점',
        paragraphs: [
          '2년간 전공자의 신분으로 진행한 42 과정은, 학교에서 배운 것 그 이상으로 많은 가르침을 주었습니다.',
          '단순히 저수준단의 기술을 익힌 것이 아닌, 배우는 방법을 알게 되었고 생각하는 방식을 바꾸게 되었습니다.',
          '저의 개발 인생을 뒤바꾼 시간이었고, 동료에게 배우고 알려주면서 성장한 경험은 평생 잊지 못할 기억들입니다.',
        ],
      },
    ],
  },
]

export const projectMap: Record<string, ProjectItem> = projectList.reduce(
  (acc, project) => {
    acc[project.slug] = project
    return acc
  },
  {} as Record<string, ProjectItem>,
)