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

export const EXPERIENCE: Record<string, ExperienceType> = {
    first: {
        company: '한국글로벌널리지네트웍(주)',
        startDate: '2024.03.11',
        activities: [
            {
                startDate: '2025.01.16',
                title: '기존 자사 플랫폼의 전용 관리자 사이트 개발',
                doneList: [
                    {
                        subject: '퀴즈에 필요한 문제 은행 관리 기능 개발',
                        details: [
                            {
                                problem:
                                    '문제 은행에서 문제를 수정할 때, 보기를 추가 / 수정 / 삭제할 수 있어야 했으며, 보기 순서 또한 자유롭게 변경 가능해야 했음. 하지만 순서 변경 시 API 요청에 각 보기의 id가 필요했으나, 보기를 추가하거나 수정, 삭제하는 과정에서 새로운 보기와 기존 보기를 구분하기 어려운 문제가 발생함.',
                                solution:
                                    '보기의 추가 수정 삭제 직후 업데이트된 문제를 상세조회 하는 \`query\`를 \`revalidate`\ 함 (Tanstack Query 활용). 이후 바뀐 보기의 옵션들을 정렬한 이후 보기 순서 수정 api를 요청하도록 하여 보기의 id의 정확성을 보장함',
                            },
                        ],
                    },
                    {
                        subject:
                            '강의의 정보를 구성하는 챕터와 섹션, 섹션에 할당하는 vod, 퀴즈, 실습 등 컨텐츠 들의 관리 기능 개발',
                        details: [
                            {
                                problem:
                                    'vod, 퀴즈, 실습 등의 서로 다른 컨텐츠를 하나의 인터페이스에서 관리해야 하는데, 각 유형마다 설정해야 할 정보가 다르고 입력 폼이 복잡해짐.',
                                solution: '컨텐츠별로 독립된 입력 폼을 만들고 선택된 유형에 따라 동적으로 렌더링하여 개선',
                            },
                        ],
                    },
                ],
            },
            {
                startDate: '2024.11.18',
                endDate: '2025.01.15',
                title: '외부 기업 전용 강의 수강 사이트 / 관리자 & 운영자 사이트 개발',
                doneList: [
                    {
                        subject:
                            'WebSocket을 활용하여 실시간 강의 중 강사와 수강생들의 즉각적인 상호작용이 가능한 돌발 퀴즈 기능 개발',
                        details: [
                            {
                                problem:
                                    '실시간으로 결과를 나타내는 차트 그래프가 속도가 지나치게 빨라, 실제 데이터값을 따라가지 못해 데이터를 완벽하게 반영하지 못하는 문제 발생',
                                solution:
                                    '결과 데이터 상태 값에 throttle을 적용하여 불필요한 업데이트를 줄이고, 유실없이 안정적으로 반영되도록 조치',
                            },
                            {
                                problem:
                                    '돌발퀴즈 바로 시작 직전에 네트워크가 끊겼따가 다시 연결되면, 방금 진행한 돌발퀴즈가 뜨지 않는 문제가 발생',
                                solution:
                                    '재연결 로직을 추가. 기존 웹소켓 핑퐁의 count 값을 비교하고, 개수가 다른체 웹소켓이 연결이 되었으면 재연결이라고 판단. 이후 진행중인 돌발퀴즈를 다시 불러오도록 api를 호출하여 문제 해결',
                            },
                            {
                                problem: '다수의 유저가 연결이 유실되고, 재연결 로직이 발동할 때 서버의 부하를 가능성이 있었음',
                                solution: '재연결 시도에 지수 백오프 + 랜덤성을 부여하여 서버의 부하를 최소화',
                            },
                            '실시간 데이터 처리는 단순히 기술 도입뿐만 아니라, 서버 부하와 안정성을 고려해야 한다는 점을 배움. 특히, 네트워크 상태가 좋지 않은 환경에서도 안정적으로 메시지를 주고받을 수 있도록 재연결 및 오류 처리 로직을 구현하는 것이 중요함을 깨달음',
                        ],
                    },
                    {
                        subject: '관리자와 운영자의 역할에 맞는 기능 및 권한을 구분한 UI 설계',
                        details: [
                            {
                                problem:
                                    '특정 권한이 필요한 url에 접근할 때, 접근 전 사용자의 권한을 확인하는 미들웨어를 React Router Dom의 \`loader\`를 이용해 구현했는데, 사용자 정보가 로드되기 전에 실행이 완료되는 문제가 있었음.',
                                solution:
                                    '권한이 필요한 페이지에 접근할 때 인증된 사용자인지 먼저 확인하는 미들웨어를 React Router Dom의 \`Navigate\`를 이용해 직접 구현. 이후 권한이 허용되면 페이지로 이동하고, 아닐 경우 이동 실패러 처리',
                            },
                            {
                                problem:
                                    '운영자가 여러 팀에 동시에 종속되는 경우가 생겨 어떤 팀의 운영자로 정보를 봐야하는지 혼란이 오는 문제가 발생',
                                solution:
                                    '현재 운영자가 속한 팀 목록을 불러와, 현재 관리하고 싶은 팀을 선택할 수 있도록 기능을 추가하여 해결',
                            },
                        ],
                    },
                ],
            },
            {
                startDate: '2024.10.01',
                endDate: '2024.11.15',
                estimatedDuration: 1,
                title: '기존 플랫폼의 고도화 및 유지보수',
                doneList: [
                    {
                        subject: 'Infinity Scroll / Drag & Drop 이 가능한 테이블 컴포넌트 개발',
                        details: [
                            {
                                problem:
                                    'Infinity Scroll에서 각 \`row\`의 높이에 대한 측정값이 일정하지 않아 가상화된 테이블에서 스크롤 후 데이터가 보이지 않거나 UI가 아래로 밀리는 문제 발생',
                                solution:
                                    '초기 \`row\` 높이를 추정하는 \`estimateSize\` 값을 설정하고, 이후 실제 렌더링된 \`row\`의 높이를 측정하여 동적으로 업데이트하여 문제 해결',
                            },
                        ],
                    },
                    {
                        subject: '강의별 학습 진행 상태와 성과를 시각화하여 분석할 수 있는 관리자 페이지 개발',
                        details: [
                            '단순히 그래프를 추가하는 것뿐만 아니라, 다양한 데이터 종류에 따라 UX 설계가 달라져야 함을 깨달음',
                        ],
                    },
                ],
            },
            {
                startDate: '2024.08.02',
                endDate: '2024.09.30',
                estimatedDuration: 2,
                title: '코딩테스트 전용 플랫폼 개발',
                doneList: [
                    {
                        subject: 'React-Code Mirror를 커스터마이징하여 문제풀이가 가능한 코딩 에디터 개발',
                        details: [
                            '라이브러리에 기본적으로 존재하는 \`class\`를 활용하여 css 스타일을 커스터마이징하고, 다크모드에서도 사용할 수 있도록 테마를 구성',
                            '코드의 line이 folding (접히는) 상태이거나, 커스텀 placeholder 스타일을 적용해야 하는 경우, css 가상 요소를 활용해 다양한 상황에서도 디자인 구현',
                            '테블릿 환경에서도 원할하게 사용할 수 있도록 \`flex\` 및 \`grid\` 의 관련된 속성들을 조합하여 반응형 디자인 적용',
                        ],
                    },
                    {
                        subject: '유저가 직접 코딩 테스트 문제를 풀고, 제출 하여 정답 여부 결과 확인할 수 있는 UI 개발',
                        details: [
                            {
                                problem:
                                    '유저가 작성한 코드를 지속적으로 저장하도록 zustand의 \`persist\` \`(localStorage)\` 활용하였는데, 각 문제와 언어 별로 저장되어야 하는 데이터가 많아질수록 관리가 어려워짐',
                                solution:
                                    '문제의 \`id\`를 객체의 \`key\`로 두고, 언어별로 중첩하여 유저 코드를 \`JSON\` 문자열로 저장. 또한 저장 공간 최소화를 위해 최신 10개의 문제만 유지하도록 구현',
                            },
                            {
                                problem: '제출한 문제의 채점 시간이 길어져 UX가 저하되는 문제 발생',
                                solution: '대기 시간 동안 스켈레톤 UI를 보여주어 사용자가 대기 중임을 인지할 수 있도록 개선',
                            },
                        ],
                    },
                    {
                        subject: '유저가 자유롭게 관리할 수 있는 커스텀 테스트 케이스 기능 개발',
                        details: [
                            {
                                problem:
                                    '입력값이 다양한 데이터 타입(문자열, 숫자, 배열 등)을 가질 수 있어 동적 타입 처리가 필요했음',
                                solution: '입력값을 \`JSON\`으로 변환하여 다양한 데이터 타입을 유연하게 처리할 수 있도록 개선',
                            },
                            {
                                problem:
                                    '사용자가 \`JSON\` 형식으로 입력해야 하는 데이터에 싱글 따옴표를 사용하여 잘못된 입력을 하였고, 이를 그대로 저장하면 실행 중 오류가 발생할 가능성이 있었음',
                                solution:
                                    '입력값이 문자열인 경우, 싱글 따옴표가 포함되어 있는지 확인하고 경고 메시지를 띄운 후 입력을 거부. 올바른 \`JSON\` 형식(`\"`)을 사용하도록 유도하여 문제 해결',
                            },
                            {
                                problem:
                                    '테스트 케이스 입력값이 문제에서 지정한 데이터 타입(\`int\`, \`float\`, \`boolean\` 등)과 일치하지 않아 실행 중 의도치 않은 오류가 나는 상황 발생',
                                solution:
                                    '입력된 값이 문제에서 지정한 데이터 타입과 일치하는지 사전에 체크하는 유효성 검사 로직을 적용하여 오류를 방지',
                            },
                        ],
                    },
                    {
                        subject: 'React Hook Form과 Zod를 활용해 문제를 관리하는 관리자 페이지 개발',
                        details: [
                            {
                                problem:
                                    '문제의 상세 내용 / 언어 선택 및 메모리 제한과 시간 제한 선택 / 기본 테스트 케이스를 하나의 폼으로 구성해야하다 보니 UI가 복잡해지고 유지보수가 어려웠음',
                                solution:
                                    '관련 항목을 3가지 주요 탭으로 나누고, 각 탭 이동시 유효성 검사를 사전에 실행하도록 개선. 유효성 검사 로직은 전역 스토어에서 관리하며, 각 탭이 마운트될 때 해당 탭의 검증 함수를 설정하여 일관된 로직을 유지',
                            },
                            {
                                problem:
                                    '각 테스트케이스별 필요한 매개변수도 동적으로 관리되어야 했으며, 상위 필드에서 설정한 매개변수의 개수와 맞ㅊ우기 위해 \`watch\` 함수를 사용했으나, 불필요한 리랜더링이 많아 성능 저하 발생',
                                solution:
                                    'React Hook Form의 \`useFieldArray\`를 중첩 사용하여 테스트 케이스와 매개변수를 동적으로 관리하도록 구현, 또한 \`watch\` 함수 대신 \`useFieldArray\`의 \`replace\` 함수를 사용하여 매개변수의 추가 / 삭제 시에만 필드를 갱신하도록하여 최적화하여 성능을 개선',
                            },
                        ],
                    },
                ],
            },
            {
                startDate: '2024.07.10',
                endDate: '2024.08.02',
                estimatedDuration: 1,
                title: '타사의 소개 및 지원서 사이트 개발',
                doneList: [
                    {
                        subject: '타사의 특장점을 소개하는 정적 페이지 제작',
                    },
                    {
                        subject: '컴포넌트의 네임스페이스 패턴을 기반으로 만든 form을 통해 지원서 양식 개발',
                    },
                ],
            },
            {
                startDate: '2024.05.27',
                endDate: '2024.06.28',
                estimatedDuration: 1,
                title: 'LMS 개발',
                doneList: [
                    {
                        subject: '프로젝트 설계, 공통 레이아웃과 컴포넌트 구조화, 기능 모듈화',
                        details: [
                            {
                                problem:
                                    '이전 프로젝트는 기능을 단위별로 유지보수하기 어려워 확장성에 문제가 있다는 피드백을 받음',
                                solution:
                                    '효율적으로 컴포넌트와 기능을 모듈화하는 FSD 폴더 구조를 채택하여 개발. 기능의 한 단위를 "entity" 로 정의하고 api, schema, type, global state 를 통합 관리하여 확장성을 향상 시킴',
                            },
                        ],
                    },
                    {
                        subject: '시험 평가 & 과제 제출 & 설문 조사 & 마이페이지 등 주요 기능 개발',
                        details: [
                            {
                                problem:
                                    '문제를 풀때, "제출하기" 버튼 하나로 답안지 생성과 선택한 문제 체크까지 api전송을 한번에 해버리면 비효율적이었으며, 시험 도중 네트워크가 끊기면 데이터가 유실되는 문제가 발생',
                                solution:
                                    '시험 페이지 입장 시 미리 사용자의 답안지를 생성하고, 사용자가 답안을 체크할 때마다 서버에 PATCH 요청을 보내 진행 상황을 실시간으로 저장하도록 개선',
                            },
                            '단순히 사용자가 입력한 데이터를 전송하는 데 그치는 것이 아니라, 안정적으로 저장하고 복구할 수 있는 UX를 고민하는 것이 중요함을 배움.',
                        ],
                    },
                ],
            },
            {
                startDate: '2024.03.11',
                endDate: '2024.05.24',
                estimatedDuration: 2,
                title: '온라인 IT 교육 사이트 자사 플랫폼 개발',
                doneList: [
                    {
                        subject: '프로젝트 설계, 공통 레이아웃과 컴포넌트 구조화',
                    },
                    {
                        subject: '강의 리스트, 마이페이지, QnA 게시판, 퀴즈 페이지 개발',
                    },
                    {
                        subject: '토스 페이먼츠와 연동한 결제 기능 도입',
                        details: [
                            {
                                problem: '토스의 결제 UI를 특정 위치에 렌더링해야 하는 상황 발생',
                                solution:
                                    '결제 수단과 약관 동의를 렌더링할 element를 생성하고, toss에서 제공하는 결제 위젯의 \`render\` 메서드를 활용하여 동적으로 UI를 삽입하도록 구현',
                            },
                        ],
                    },
                    {
                        subject: 'tiptap 라이브러리를 활용하여 텍스트 에디터 커스터마이징',
                        details: [
                            {
                                problem:
                                    '댓글 창의 애니메이션을 구현하기 위해 도입한 Framer Motion 라이브러리에서, 애니메이션을 적용한 요소가 다른 UI 요소와 겹치면서 의도하지 않은 레이아웃 변경이 발생',
                                solution:
                                    '애니메이션의 상태를 컴포넌트의 \`key\`에 주입하거나, \`AnimatePresence\`로 컴포넌트를 감싸 레이아웃 변경을 감지하여 해결',
                            },
                        ],
                    },
                    {
                        subject: 'Front End 테스트를 위한 jest 도입, 페이지 단위로 테스트 코드 작성',
                    },
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
        items: [
            'React.js (vite)',
            'Next.js',
            'Tailwind CSS',
            'Emotion',
            'Shadcn',
            'Zustand',
            'Recoil',
            'Prisma',
            'Node.js',
            'Express',
        ],
    },
    {
        category: 'Databases & DevOps',
        items: ['MongoDB', 'Supabase (postgresql)', 'Docker', 'AWS S3', 'Vercel', 'Netlify'],
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
