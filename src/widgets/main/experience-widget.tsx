import type { FC } from 'react'
import { ExperienceCard } from '@/features'
import { SectionTitle } from '@/shared'

export const ExperienceWidget: FC = () => {
    return (
        <section className='flex w-full max-md:flex-col max-md:gap-2'>
            <SectionTitle>Experience</SectionTitle>
            <div className='flex flex-col gap-8 md:gap-12 flex-grow'>
                <div className='flex flex-col gap-0.5'>
                    <p className='text-xl md:text-2xl'>2024.03.11 ~ 현재</p>
                    <h3 className='text-2xl md:text-3xl font-semibold'>
                        한국글로벌널리지네트웍 <span className='text-lg'>(주)</span>
                        <br className='md:hidden' />
                        <span className='font-normal text-lg ml-1 text-gray-600'>(前 코딩허브, 24.05 인수합병)</span>
                    </h3>
                </div>
                <div className='flex flex-col gap-6'>
                    <ExperienceCard
                        startDate='2024.11.18'
                        description='기업 내부 직원 교육을 위한 맞춤형 강의 플랫폼'
                        title='기업 전용 강의 수강 사이트 / 관리자 & 운영자 사이트 개발'
                        doneList={[
                            'WebSocket을 활용하여 실시간 강의 중 강사와 수강생들의 즉각적인 상호작용이 가능한 돌발 퀴즈 기능 개발',
                            '강의별 학습 진행 상태와 성과를 시각화하여 분석할 수 있는 관리자 페이지 개발',
                            '관리자와 운영자의 역할에 맞는 기능 및 권한을 구분한 UI 설계',
                        ]}
                    />

                    <ExperienceCard
                        startDate='2024.10.01'
                        endDate='2024.11.15'
                        estimatedDuration={1}
                        description='플랫폼 성능 및 기능 개선을 통한 사용자 경험 향상'
                        title='Flunti 고도화 및 유지보수'
                        doneList={[
                            'Dnd, Infinity Scroll 이 가능한 공용 table 컴포넌트 개발',
                            '커스터마이징한 chart 컴포넌트 개발',
                        ]}
                    />

                    <ExperienceCard
                        startDate='2024.08.02'
                        endDate='2024.09.30'
                        estimatedDuration={2}
                        description='사용자 중심의 인터랙티브 코딩 테스트 솔루션'
                        title='Flunti의 코딩테스트 전용 사이트 개발'
                        doneList={[
                            'code mirror를 커스터마이징하여 문제풀이가 가능한 코딩 에디터 개발',
                            'React Hook Form과 Zod를 활용해 각 문제의 테스트케이스를 동적으로 생성 및 수정하는 관리자 페이지 개발',
                            '유저가 자유롭게 관리할 수 있는 커스텀 테스트 케이스 기능 개발',
                            '코딩 문제 입력 후 실행 및 기능 / 이에 대한 결과 확인 기능 개발',
                        ]}
                    />

                    <ExperienceCard
                        startDate='2024.07.15'
                        endDate='2024.08.02'
                        estimatedDuration={1}
                        description='기업 특장점 소개 및 맞춤형 지원서 제출 플랫폼'
                        title='타사의 소개 및 지원서 사이트 개발'
                        doneList={[
                            '타사의 특장점을 소개하는 정적 페이지 제작',
                            '네임스페이스 패턴을 기반으로 직접 만든 폼을 통해 지원서 양식 개발',
                        ]}
                    />

                    <ExperienceCard
                        startDate='2024.05.27'
                        endDate='2024.06.28'
                        estimatedDuration={1}
                        description='효율적인 학습 관리와 학습자 지원을 위한 시스템'
                        title='LMS 개발'
                        doneList={[
                            '프로젝트 설계, 공통 레이아웃과 컴포넌트 구조화',
                            '강의 리스트, 마이페이지, 게시판, 퀴즈 페이지 개발',
                            '시험 평가 & 과제 제출 & 설문 조사 등 주요 기능 개발',
                            '회원가입 폼 & 게시판 페이지 제작',
                        ]}
                    />

                    <ExperienceCard
                        startDate='2024.03.11'
                        endDate='2024.05.24'
                        estimatedDuration={2}
                        description='IT 기술 학습을 위한 맞춤형 온라인 강의 플랫폼'
                        title='온라인 IT 교육 사이트 Flunti 개발'
                        doneList={[
                            '프로젝트 설계, 공통 레이아웃과 컴포넌트 구조화',
                            '강의 리스트, 마이페이지, 게시판, 퀴즈 페이지 개발',
                            '페이지 테스트를 위한 jest 도입',
                            'tiptap 라이브러리를 이용하여 텍스트 에디터 커스터마이징',
                            '증명서 등의 문서를 pdf로 발급할 수 있는 기능 개발',
                            '토스 페이먼츠와 연동한 결제 기능 도입',
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}
