'use client';

import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useAppSelector } from '@/redux/hooks';
import { useTranslations } from 'next-intl';

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const theme = useAppSelector(state => state.themeReducer.theme);
  const t = useTranslations('experiences');
  return (
    <section ref={ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>{t('title')}</SectionHeading>
      <VerticalTimeline lineColor='gray'>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:  theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.5rem 2rem',
                borderTopColor: '#9ca3af'
              }}
              contentArrowStyle={{
                borderRight: theme === 'light'
                  ? '8px solid #9ca3af'
                  : '8px solid #333'
              }}
              date={item.date}
              dateClassName='min-[1170px]:mx-6'
              icon={item.icon}
              iconStyle={{
                background:  theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem'
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};
