'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import avtImg from '../../public/avt.jpg';
import { useSectionInView } from '@/lib/hooks';
import { useAppDispatch } from '@/redux/hooks';
import { setActiveSection, setIsClick } from '@/redux/features/activeSectionSlice';


export default function Intro() {
  const dispatch = useAppDispatch();

  const { ref } = useSectionInView('Home', 0.5);

  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28' id="home"
      ref={ref}
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2
            }}
          >
            <Image src={avtImg} alt='Avatar' height='192' width='192' quality='95'
              priority={true} className='h-24 w-24 object-cover rounded-full border-white
              border-[0.35rem] shadow-xl'
            />
          </motion.div>
          <motion.span className='text-2xl absolute bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              delay: 0.1,
              duration: 0.7,
              stiffness: 125
            }}
          >👋</motion.span>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='text-xl'>Welcome to my personal website! 🚀</span><br/>
        <span className='font-bold'>Hello, I'm Duy Khanh.</span> I'm currently in the third year of <span className='font-bold'> Information Systems at the UIT</span>. I enjoy building <span className='italic'>sites & apps</span>. My focus is{' '}<span className='underline'>researched, and learned about <span className='font-bold'>Frontend Development & Backend and Mobile</span></span>.
      </motion.h1>
      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}>
        <Link href='#contact'
          className='group px-7 py-3 rounded-full bg-gray-900 text-white flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition borderBlack'
          onClick={() => {
            dispatch(setActiveSection('Contact'));
            dispatch(setIsClick(Date.now()));
          }}
        >
          Contact me here<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <Link href='/cv.pdf' className='group px-7 py-3 rounded-full bg-white flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          download='cv-pdk.pdf'
          locale={false}
          rel="noopener noreferrer"
          target='_blank'
        >
          Download CV<HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </Link>
        <a
          className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://www.linkedin.com/in/ph%E1%BA%A1m-duy-kh%C3%A1nh-740465233'
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://github.com/diikhanh'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};
