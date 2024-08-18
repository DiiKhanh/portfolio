'use client';

import React from 'react';
import { projectsData } from '@/lib/data';
import SectionHeading from './section-heading';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';
import { useTranslations } from 'next-intl';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.1);
  const t = useTranslations('projects');
  return (
    <section className='mb-28 scroll-mt-14' id='projects' ref={ref} >
      <SectionHeading>{t('title')}</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project { ...project }/>
            </React.Fragment>
          ))
        }
      </div>
    </section>
  );
};