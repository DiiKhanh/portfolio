import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import movieImg from '../../public/movie.png';
import countryImg from '../../public/country.png';
import ecommerceImg from '../../public/ecommerce.png';

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

export const projectsData = [
  {
    title: 'Movies App',
    description:
      '',
    tags: ['React', 'JS', 'MongoDB', 'Material UI', 'Node', 'Express', 'Redux'],
    imageUrl: movieImg
  },
  {
    title: 'Country App',
    description:
      '',
    tags: ['React', 'JS', 'Tailwind', 'Redux'],
    imageUrl: countryImg
  },
  {
    title: 'ecommerce sneaker',
    description:
      '',
    tags: ['React', 'SQL', 'Java Spring Boot', 'Framer'],
    imageUrl: ecommerceImg
  }
] as const;

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