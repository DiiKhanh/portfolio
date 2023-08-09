import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import movieImg from '../../public/movie.png';
import countryImg from '../../public/country.png';
import ecommerceImg from '../../public/ecommerce.png';
import musicImg from '../../public/music.png';
import { ProjectsDataType } from './types';

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const;

export const experiencesData = [
  {
    title: 'Graduated',
    location: '',
    description:
      '',
    icon: React.createElement(LuGraduationCap),
    date: ''
  },
  {
    title: 'Front-End Developer',
    location: '',
    description:
      'I\'ve worked as a front-end developer for 2 years. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2022 - present'
  },
  {
    title: '',
    location: '',
    description:
      '',
    icon: React.createElement(FaReact),
    date: '2021 - present'
  }
] as const;


export const projectsData: ProjectsDataType = [
  {
    title: 'Movies App',
    description:
      'Fullstack Responsive Movie Website with MERN stack and Themoviedb',
    tags: ['React', 'MongoDB', 'Material UI', 'Express', 'Redux Toolkit'],
    imageUrl: movieImg,
    github: 'https://github.com/DiiKhanh/mern-movies-app',
    demo: 'https://mern-movies-app.vercel.app/'
  },
  {
    title: 'Country App',
    description:
      'Website find country with dark/light mode',
    tags: ['React', 'Tailwind', 'Redux Toolkit'],
    imageUrl: countryImg,
    github: 'https://github.com/DiiKhanh/mern-movies-app'
  },
  {
    title: 'Ecommerce sneaker',
    description:
      'My project in the subject of system analysis, design and information management',
    tags: ['React', 'SQL', 'Java Spring Boot', 'Redux Toolkit'],
    imageUrl: ecommerceImg,
    github: 'https://github.com/DiiKhanh/mern-movies-app'
  },
  {
    title: 'Music App',
    description:
      'Develop an elegant React.js Music Application',
    tags: ['React', 'API', 'Redux Toolkit', 'Tailwind', 'RTK-Query'],
    imageUrl: musicImg,
    github: 'https://github.com/DiiKhanh/reactjs-tailwind-clone-music-app',
    demo: 'https://reactjs-tailwind-clone-music-app.vercel.app/'
  }
] ;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Java',
  'MongoDB',
  'Redux',
  'Express',
  'Framer Motion'
] as const;