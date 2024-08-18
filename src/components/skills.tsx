'use client';

import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import Skill from './skill';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  const t = useTranslations('skills');
  return (
    <section id='skills' ref={ref} className='mb-28 max-w-4xl scroll-mt-28 text-center sm:mb-40'>
      <SectionHeading>{t('title')}</SectionHeading>
      <div className='flex flex-col gap-4'>
        {
          skillsData.map((skill, index) => (
            <React.Fragment key={index}>
              <Skill skill={skill} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  );
};
