import { IconType } from '@/shared'

export const SITE_URL = 'http://eunsu-resume.eunsu.kr'
export const PROFILE = {
    name: '방은수',
    birthDay: '1999.01.21',
    descriptions: [
        {
            type: 'email',
            value: 'xxx592@naver.com',
        },
        {
            type: 'github',
            value: 'https://github.com/eeennsu',
        },
        {
            type: 'blog',
            value: 'https://velog.io/@diso592/posts (기술 블로그)',
        },
        {
            type: 'blog',
            value: 'https://eunstory.eunsu.kr (회고 블로그)',
        },
    ] as Array<{ type: IconType; value: string }>,
}

export const INTRODUCE = [
    '안녕하세요. 27세 1년차 주니어 프론트엔드 개발자 방은수입니다.',
    'React와 Next.js를 기반으로 웹사이트를 개발하고 있습니다. 주요 업무는, 디자이너로부터 화면 레이아웃을 받아 공용 컴포넌트 및 페이지를 구현하며, 백엔드와의 API 연동을 통해 필요한 기능을 개발 & 최적화를 하고 있습니다.',
    '업무를 진행하며 어떠한 개선점이나 문제점이 발생했을 때, 팀원들과 유연한 커뮤니케이션으로 해결하며 프로젝트를 높은 완성도로 마무리하는데 최선을 다하고자 합니다.',
    '서비스 개발이란 결국 비즈니스와 개발자간의 원할한 소통이 핵심이라고 생각합니다. 적극적인 의견 교환과 넓은 자세로 받아들이는 피드백을 통해 문제 해결과 비즈니스 성장을 위해 노력하고 있습니다. 이러한 점들을 바탕으로 더 나은 개발자로서 성장하기 위해 항상 학습하고, 경험하며 업무를 수행할 것입니다.',
]

export const EXPERIENCE = {
    first: {
        company: '한국글로벌널리지네트웍(주)',
        startDate: '2024.03.11',
        activities: [
            {
                startDate: '2024.11.18',
                endDate: '2025.01.15',
                description: '외부 기업의 임직원을 위한 맞춤형 IT 교육 및 강의 플랫폼',
                title: '기업 전용 강의 수강 사이트 / 관리자 & 운영자 사이트 개발',
                doneList: [
                    'WebSocket을 활용하여 실시간 강의 중 강사와 수강생들의 즉각적인 상호작용이 가능한 돌발 퀴즈 기능 개발',
                    '강의별 학습 진행 상태와 성과를 시각화하여 분석할 수 있는 관리자 페이지 개발',
                    '관리자와 운영자의 역할에 맞는 기능 및 권한을 구분한 UI 설계',
                ],
            },
            {
                startDate: '2024.10.01',
                endDate: '2024.11.15',
                estimatedDuration: 1,
                description: '플랫폼 성능 및 기능 개선을 통한 사용자 경험 향상',
                title: 'Flunti 고도화 및 유지보수',
                doneList: ['Dnd, Infinity Scroll 이 가능한 공용 table 컴포넌트 개발', '커스터마이징한 chart 컴포넌트 개발'],
            },
            {
                startDate: '2024.08.02',
                endDate: '2024.09.30',
                estimatedDuration: 2,
                description: '사용자 중심의 인터랙티브 코딩 테스트 솔루션',
                title: 'Flunti의 코딩테스트 전용 사이트 개발',
                doneList: [
                    'code mirror를 커스터마이징하여 문제풀이가 가능한 코딩 에디터 개발',
                    'React Hook Form과 Zod를 활용해 각 문제의 테스트케이스를 동적으로 생성 및 수정하는 관리자 페이지 개발',
                    '유저가 자유롭게 관리할 수 있는 커스텀 테스트 케이스 기능 개발',
                    '코딩 문제 입력 후 실행 및 기능 / 이에 대한 결과 확인 기능 개발',
                ],
            },
            {
                startDate: '2024.07.15',
                endDate: '2024.08.02',
                estimatedDuration: 1,
                description: '기업 특장점 소개 및 맞춤형 지원서 제출 플랫폼',
                title: '타사의 소개 및 지원서 사이트 개발',
                doneList: [
                    '타사의 특장점을 소개하는 정적 페이지 제작',
                    '네임스페이스 패턴을 기반으로 직접 만든 폼을 통해 지원서 양식 개발',
                ],
            },
            {
                startDate: '2024.05.27',
                endDate: '2024.06.28',
                estimatedDuration: 1,
                description: '효율적인 학습 관리와 학습자 지원을 위한 시스템',
                title: 'LMS 개발',
                doneList: [
                    '프로젝트 설계, 공통 레이아웃과 컴포넌트 구조화',
                    '강의 리스트, 마이페이지, 게시판, 퀴즈 페이지 개발',
                    '시험 평가 & 과제 제출 & 설문 조사 등 주요 기능 개발',
                    '회원가입 폼 & 게시판 페이지 제작',
                ],
            },
            {
                startDate: '2024.03.11',
                endDate: '2024.05.24',
                estimatedDuration: 2,
                description: 'IT 기술 학습을 위한 맞춤형 온라인 강의 플랫폼',
                title: '온라인 IT 교육 사이트 Flunti 개발',
                doneList: [
                    '프로젝트 설계, 공통 레이아웃과 컴포넌트 구조화',
                    '강의 리스트, 마이페이지, 게시판, 퀴즈 페이지 개발',
                    '페이지 테스트를 위한 jest 도입',
                    'tiptap 라이브러리를 이용하여 텍스트 에디터 커스터마이징',
                    '증명서 등의 문서를 pdf로 발급할 수 있는 기능 개발',
                    '토스 페이먼츠와 연동한 결제 기능 도입',
                ],
            },
        ],
    },
}

export const SKILL = [
    {
        category: 'Languages',
        items: ['JavaScript (ES6+)', 'TypeScript', 'HTML / CSS', 'Java', 'C#'],
    },
    {
        category: 'Libraries & Frameworks',
        items: ['React.js (vite)', 'Next.js', 'Tailwind CSS', 'Prisma', 'Node.js', 'Express'],
    },
    {
        category: 'Databases & DevOps',
        items: ['MongoDB', 'Supabase (postgresql)', 'Docker', 'AWS S3'],
    },
    {
        category: 'Tools',
        items: ['VS Code', 'Git & GitHub', 'Notion', 'Figma', 'Slack'],
    },
]

export const PORTFOLIOS = [
    {
        name: 'Eunsutory',
        descriptionList: ['개인 회고 & 소개 블로그'],
        githubLink: 'https://github.com/eeennsu/eunstory',
        siteLink: 'https://eunstory.eunsu.kr/',
        tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    },
    {
        name: 'Scrama',
        descriptionList: ['아마존 웹 스크레핑 사이트'],
        githubLink: 'https://github.com/eeennsu/scrama',
        siteLink: 'https://eunstory.eunsu.kr/',
        tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'cheerio'],
    },
    {
        name: 'Equipment Rental System',
        descriptionList: ['대학교 동아리에서 제작한 장비 대여 시스템'],
        githubLink: 'https://github.com/eeennsu/eunstory',
        tools: ['React.js', 'TypeScript', 'Express.js', 'Tailwind CSS', 'Zustand', 'Tanstack Query'],
    },
    {
        name: 'Eunimation',
        descriptionList: ['애니메이션 추천 사이트'],
        githubLink: 'https://github.com/eeennsu/nextjs-animation-app',
        siteLink: 'https://eunimation.eunsu.kr/',
        tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    },
    {
        name: 'Eunsuread',
        descriptionList: ['Thread 클론 사이트'],
        githubLink: 'https://github.com/eeennsu/nextjs-thread',
        siteLink: 'https://eeennsu-nextjs-thread.vercel.app/',
        tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Clerk', 'Mongoose'],
    },
    {
        name: 'Movie TV Actor',
        descriptionList: ['영화 추천 사이트'],
        githubLink: 'https://github.com/eeennsu/react-movie-tv-actor?tab=readme-ov-file',
        siteLink: 'https://eeennsu.github.io/react-movie-tv-actor/',
        tools: ['React.js', 'TypeScript', 'Antd', 'TMDB API'],
    },
]

export const EDUCATION = {
    startDate: '2022.03.02',
    endDate: '2024.02.28',
    schoolName: '명지전문대학교',
    department: '소프트웨어 콘텐츠학과',
    activities: [
        '학점 4.26 졸업',
        '웹 개발 동아리 운영 (부장) 및 프로젝트 개발 주도 (2022.06 ~ 2024.02)',
        '기자재 대여 시스템 사이트 / 주변 맛집 등 명소를 찾는 사이트 / 2D 로그라이크 앱 게임 등 개발',
    ],
}

export const CERTIFICATIONS = [
    { title: 'TOEIC (815점)', detail: '2023.07.19 취득' },
    { title: '워드프로세서' },
    { title: '컴퓨터 활용능력 1급' },
    { title: '정보처리산업기사', detail: '필기 합격, 실기 준비 중', isInProgress: true },
]
