import { getKoreanAge, getWorkAnniversary } from '@shared/libs/date';

import { EXPERIENCES } from '@entities/experience/consts';
import { PROFILE } from '@entities/profile/consts';

export const INTRODUCE = [
  `안녕하세요. 만 ${getKoreanAge(PROFILE.birthDay)}세 ${getWorkAnniversary(EXPERIENCES[0].startDate)}년차 주니어 프론트엔드 개발자 방은수입니다.`,
  'Typescript와 Next.js를 기반으로 개발을 하고 있으며, 주요 업무는 디자이너로부터 화면 레이아웃을 받아 공용 컴포넌트 및 페이지를 구축하고, 백엔드와의 API 연동을 통해 필요한 기능을 개발 및 최적화를 담당하고 있습니다.',
  '업무 중 발생하는 문제나 개선이 필요한 사항을 팀원들과 원활한 커뮤니케이션을 통해 해결하며, 프로젝트를 높은 완성도로 마무리하는 데 집중하고 있습니다.',
  '서비스 개발이란 결국 비즈니스와 개발자간의 원할한 소통이 핵심이라고 생각합니다. 이를 위해 적극적인 의견 교환과 넓은 자세로 받아들이는 피드백을 통해 문제를 해결해나가고 있습니다. 이러한 점들을 바탕으로 비즈니스 성장에 기여하고, 더 나은 개발자로서 성장하기 위해 꾸준히 학습하고 경험하며 업무를 수행할 것입니다.',
];
