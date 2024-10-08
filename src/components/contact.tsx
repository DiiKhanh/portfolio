'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/server/actions/sendEmail';
import toast from 'react-hot-toast';
import SubmitBtn from './submit-btn';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const t = useTranslations('contact');

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>{t('title')}</SectionHeading>

      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at
        <a className='underline mx-1' href='mailto:example@gmail.com'>
        21522211@gm.uit.edu.vn
        </a>
        or through this form.
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        action={ async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully!');
        }
        }
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <div className='w-full flex items-center justify-center'>
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
};