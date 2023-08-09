'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './section-heading';
import avtImg from '../../public/avt.jpg';
import { useSectionInView } from '@/lib/hooks';

export default function About() {

  const { ref } = useSectionInView('About');

  return (
    <motion.section className='mb-28 max-w-[85rem] text-center leading-8 sm:mb-40 scroll-mt-14'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <div className='grid items-center grid-cols-1 sm:grid-cols-2 gap-2 justify-center'>
        <div className='text-[18px] sm:order-2 w-full text-start'>
          <h6>Hi there! My name is <span className='font-bold underline'>Pham Duy Khanh</span>, a <span className='font-medium'>third-year student majoring in Information Systems at the University of Information Technology - Vietnam National University Ho Chi Minh City.</span></h6>
          <p className='mb-3'>
            I have a strong passion for technology and a desire to become a skilled developer. <span className='underline font-medium'>My journey in the world of IT started with a fascination for both frontend and backend development, and I have acquired a solid foundation in these areas.</span>
            As I progress through my studies, I am excited to delve deeper into various aspects of software development. <span className='font-bold'>🎯My goal is to become a Fullstack Web Developer</span>, capable of working on both the user-facing frontend and the server-side backend of applications.{' '}
            <span className='italic font-medium'>
            In addition to my interest in web development, I am also venturing into the realm of mobile app development. I believe that understanding the intricacies of mobile platforms will enable me to create versatile and well-rounded applications that cater to a wider audience.
            </span>
            <span>
            Overall, my academic journey has been filled with challenges and opportunities, and I am dedicated to continuous learning and growth in the ever-evolving field of technology. <span className='font-bold'>Thank you for taking the time to get to know a little bit about me!</span>
            </span>
          </p>
        </div>
        <div className='mx-auto sm:order-1'>
          <Image loading='lazy' alt='avt' src={avtImg} height={2000} width={2000} quality={100}
            className='object-cover rounded-lg shadow-lg w-[456px] h-[456px]'
          />
        </div>
      </div>
    </motion.section>
  );
};
