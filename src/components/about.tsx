'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './section-heading';
import avtImg from '../../public/avt.jpg';

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[85rem] text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'>
      <SectionHeading>About me</SectionHeading>
      <div className='grid items-center grid-cols-1 sm:grid-cols-2 gap-2 justify-center'>
        <div className='text-[18px] sm:order-2 w-full'>
          <h6>My name is Pham Duy Khanh</h6>
          <p className='mb-3'>
        After graduating with a degree in{' '}
            <span className='font-medium'>Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{' '}
            <span className='font-medium'>full-stack web development</span>.{' '}
            <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
            <span className='font-medium'>
          React, Next.js, Node.js, and MongoDB
            </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{' '}
            <span className='font-medium'>full-time position</span> as a software
        developer.
          </p>
          <p>
            <span className='italic'>When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{' '}
            <span className='font-medium'>learning new things</span>. I am currently
        learning about{' '}
            <span className='font-medium'>history and philosophy</span>. I'm also
        learning how to play the guitar.
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
