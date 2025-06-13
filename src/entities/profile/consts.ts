import { IconType } from '@features/profile/ui/Item';

export const PROFILE = {
  name: '방은수',
  birthDay: '1999.01.21',
  descriptions: [
    {
      type: 'email',
      value: 'xxx9901@naver.com',
    },
    {
      type: 'github',
      value: 'https://github.com/eeennsu',
    },
    {
      type: 'blog',
      value: 'https://velog.io/@diso592/posts',
    },
    {
      type: 'blog',
      value: 'https://eunstory.eunsu.kr',
    },
  ] as Array<{ type: IconType; value: string }>,
};
