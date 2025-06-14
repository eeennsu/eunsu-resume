import { getKoreanAge, getWorkAnniversary } from '@shared/libs/date';

import { EXPERIENCES } from '@entities/experience/consts';
import { PROFILE } from '@entities/profile/consts';

export const INTRODUCE = [
  `안녕하세요. 만 ${getKoreanAge(PROFILE.birthDay)}세 ${getWorkAnniversary(EXPERIENCES.at(-1).startDate)}의 경력을 가진 프론트엔드 개발자 방은수입니다.`,
  'Typescript와 React, Next를 기반으로 개발을 하고 있습니다. 주요 업무는 디자이너로부터 화면 레이아웃을 받아 공용 컴포넌트 및 페이지를 설계하고 구현합니다. 또한 백엔드와의 API 연동을 통해 필요한 기능을 개발할 뿐만 아니라, 사용자 경험을 고려한 자연스러운 흐름과 성능 최적화까지 염두에 두며 개발을 진행하고 있습니다.',
  '업무 중 발생하는 문제는 팀원들과의 원활한 커뮤니케이션으로 해결하고자 하며, 프로젝트의 완성도와 사용자 경험까지 고려한 방향으로 개선하고 있습니다.',
  '서비스 구축에서 가장 중요한 것은 비즈니스와 개발자 간의 소통이라 생각합니다. 이를 위해 적극적으로 의견을 나누고, 피드백을 열린 자세로 수용하고 있습니다. 앞으로도 지속적인 학습과 경험을 통해 더 나은 개발자로 성장해 나가겠습니다.',
];
