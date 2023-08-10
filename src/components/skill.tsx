import type { SkillProps } from '@/lib/types';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
};


export default function Skill({ skill }: SkillProps) {

  return (
    <motion.div className='w-full flex flex-col items-start gap-2 mb-8 last:mb-0 transition'
      variants={fadeInAnimationVariants}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true
      }}
      custom={skill.id}
    >
      <h6 className='underline decoration-2 decoration-sky-400 font-bold text-xl mb-4'>{skill.main}</h6>
      <ul className='flex flex-wrap text-lg text-gray-800 gap-4'>
        {skill.data.map((data, index) => (
          <motion.li
            className='bg-white rounded-xl inline-flex items-center gap-2 justify-start
            px-[32px] borderBlack cursor-pointer font-medium transition dark:bg-white/10 dark:text-white/80
            '
            key={index}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true
            }}
            custom={index}
            whileHover={{
              scale: 1.05
            }}
          >
            <Image src={data.img} quality={80} alt='imgskill' height={50} width={50} loading='lazy'
              className='h-[50px] w-[50px] object-cover'
            />
            {data.title}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
