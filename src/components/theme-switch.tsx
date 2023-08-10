'use client';

import { setTheme, toggleTheme } from '@/redux/features/themeSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useEffect } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeSwitch() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.themeReducer.theme);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    if (localTheme) {
      dispatch(setTheme(localTheme));
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dispatch(setTheme('dark'));
      document.documentElement.classList.add('dark');
    }
  }, [dispatch]);

  return (
    <button
      className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
      onClick={() => dispatch(toggleTheme(theme))}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}