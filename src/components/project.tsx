'use client';
import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaGithubSquare } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, github, demo } : ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess
      }}
      className='group mb-3 sm:mb-8 last:mb-0'
    >
      <section className='bg-gray-100 max-w-2xl border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-72 sm:gap-2'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
            {description}
          </p>
          <ul className='flex flex-wrap mt-4 gap-2'>
            {tags.map((tag, index) => (
              <li
                className='bg-black/[0.7] px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full dark:text-white/70'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className='flex sm:mt-auto mt-5 gap-4 items-center justify-start'>
            <a href={github} className='inline-flex font-bold items-center text-base
            bg-white py-2 px-5 text-gray-700 hover:text-gray-950 gap-2 rounded-xl focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack'
            target='_blank'
            >Github <FaGithubSquare /></a>
            {
              demo && <a href={demo} className='inline-flex font-bold items-center text-base
              bg-gray-700 py-2 px-5 text-white hover:bg-gray-950 gap-2 rounded-xl focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack'
              target='_blank'
              >Demo <BiLinkExternal /></a>
            }
          </div>
        </div>

        <Image
          src={imageUrl}
          alt='Project I worked on'
          quality={95}
          className='absolute hidden sm:block top-10 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40'
        />
      </section>
    </motion.div>
  );
};
