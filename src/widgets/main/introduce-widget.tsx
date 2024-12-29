import { SectionTitle } from '@/shared'
import type { FC } from 'react'

export const IntroduceWidget: FC = () => {
    return (
        <section className='flex w-full'>
            <SectionTitle>Introduce</SectionTitle>
            <div className='flex flex-col gap-2 flex-grow'>
                <div className='flex flex-col gap-5 break-keep'>
                    <p>안녕하세요. 27세 1년차 주니어 프론트엔드 개발자 방은수입니다.</p>
                    <p>
                        현재 React와 Next.js를 기반으로 한 웹 애플리케잇녀 개발에 집중하고 있으며, 공용 컴포넌트 개발, 백엔드와의
                        API 연동, 사이트 구조 설계 및 최적화 등을 맡아 프로젝트를 진행하고 있습니다. 특히, 공용 컴포넌트
                        개발에서는 일관성과 재사용성을 고려하여 팀 전체의 생산성을 높이는 데 기여하고 있습니다.
                    </p>
                    <p>
                        또한 백엔드 개발자, 디자이너, 그리고 다른 팀원들과 긴밀하게 소통하며 프로젝트를 진행하고 있습니다. 어떠한
                        문제나 개선점이 생겼을 때, 팀원들과 정확한 커뮤니케이션으로 문제를 해결하며 프로젝트를 높은 완성도로
                        마무리하는 데 최선을 다하고자 합니다.
                    </p>
                    <p>
                        서비스 개발이란 결국 개발자와 비즈니스와의 원할한 소통이 핵심이라고 생각합니다. 능동적인 커뮤니케이션과
                        피드백을 통해 문제 해결과 비즈니스 성장을 위해 노력하고 있습니다. 이러한 점을 바탕으로 더 나은 개발자로서
                        성장하기 위해 항상 경험하고, 학습하며 부딪히고 있습니다.
                    </p>
                </div>
            </div>
        </section>
    )
}
