'use client';

import useVisibilityObserver from '@shared/hooks/useVisibilityObserver';
import { type FC } from 'react';

import Header from '@widgets/Header';

const ProfileHeader: FC = () => {
  const [isHeaderVisible, profileRef] = useVisibilityObserver<HTMLDivElement>();

  return (
    <section ref={profileRef}>
      <Header isHeaderVisible={isHeaderVisible} />
    </section>
  );
};

export default ProfileHeader;
