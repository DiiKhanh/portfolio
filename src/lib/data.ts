import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { BsCodeSlash } from 'react-icons/bs';
import { LuGraduationCap } from 'react-icons/lu';
import movieImg from '../../public/movie.png';
import countryImg from '../../public/country.png';
import ecommerceImg from '../../public/ecommerce.png';
import musicImg from '../../public/music.png';
import tulibear from '../../public/tulibear.png';
import petshop from '../../public/petshop.png';
import { ProjectsDataType, SkillProps } from './types';

import htmlImg from '../../public/skills/frontend/html.png';
import cssImg from '../../public/skills/frontend/css.png';
import reactImg from '../../public/skills/frontend/react.png';
import reduxImg from '../../public/skills/frontend/redux.png';
import tailwindImg from '../../public/skills/frontend/tailwind.png';
import viteImg from '../../public/skills/frontend/vite.png';
import nextImg from '../../public/skills/frontend/next.png';
import muiImg from '../../public/skills/frontend/mui.png';

import nodeImg from '../../public/skills/backend/node.png';
import expressImg from '../../public/skills/backend/express.png';
import springImg from '../../public/skills/backend/Spring.png';
import sqlImg from '../../public/skills/backend/sqlserver.png';
import oracleImg from '../../public/skills/backend/Oracle.png';
import mogoImg from '../../public/skills/backend/mongo.jpeg';
import mysqlImg from '../../public/skills/backend/mysql.png';
import net from '../../public/skills/backend/NET.png';

import cppImg from '../../public/skills/languages/CPP.png';
import csharp from '../../public/skills/languages/CSharp.png';
import javaImg from '../../public/skills/languages/Java.png';
import jsImg from '../../public/skills/languages/JS.png';
import tsImg from '../../public/skills/languages/TS.png';
import dartImg from '../../public/skills/languages/Dart.png';

import gitImg from '../../public/skills/tool/git.png';
import githubImg from '../../public/skills/tool/github.png';
import vscImg from '../../public/skills/tool/vscode.png';
import npmImg from '../../public/skills/tool/npm.png';
import yarnImg from '../../public/skills/tool/yarn.png';
import postImg from '../../public/skills/tool/postman.png';
import starImg from '../../public/skills/tool/staruml.png';
import inteliImg from '../../public/skills/tool/IntelliJ_IDEA_icon.png';

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
    title: 'Graduated 🎓',
    location: 'HCM City, Vietnam',
    description:
      'UIT student, majoring in information systems',
    icon: React.createElement(LuGraduationCap),
    date: '2021 - 2025'
  },
  {
    title: 'Front-End Developer',
    location: 'Personal',
    description:
      'I self-study and learn about Web Developer. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2021 - present'
  },
  {
    title: 'Member WebDev Studios',
    location: 'UIT',
    description:
      'Member of the programming team',
    icon: React.createElement(BsCodeSlash),
    date: '2023 - present'
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
    title: 'PetShop',
    description:
      'Chức năng như giỏ hàng, thanh toán online, đặt lịch hẹn, Chatbot, Review. Admin có các chức năng CRUD',
    tags: ['Sql Server', 'Material UI', 'ASP.NET', 'Redux Toolkit', 'EF'],
    imageUrl: petshop,
    github: 'https://github.com/DiiKhanh/Petshop-client'
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
    title: 'Ecommerce Sneaker',
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
  },
  {
    title: 'Tulibear',
    description:
      'Website đồ án môn thương mại điện tử - UIT',
    tags: ['React', 'Firebase', 'Zustand', 'Material UI'],
    imageUrl: tulibear,
    github: 'https://github.com/DiiKhanh/TuliBear-IS334_O12',
    demo: 'https://tulibear-is334.vercel.app/'
  }
] ;

type SkillsDataType = SkillProps['skill'][];

export const skillsData: SkillsDataType = [
  {
    id: 1,
    main: 'Frontend',
    data: [
      {
        title: 'HTML',
        img: htmlImg
      },
      {
        title: 'CSS',
        img: cssImg
      },
      {
        title: 'ReactJS',
        img: reactImg
      },
      {
        title: 'TailwindCSS',
        img: tailwindImg
      },
      {
        title: 'Material UI',
        img: muiImg
      },
      {
        title: 'Redux',
        img: reduxImg
      },
      {
        title: 'NextJS',
        img: nextImg
      },
      {
        title: 'Vite',
        img: viteImg
      }
    ]
  },
  {
    id: 2,
    main: 'Backend',
    data: [
      {
        title: 'Node.js',
        img: nodeImg
      },
      {
        title: 'Express.js',
        img: expressImg
      },
      {
        title: 'Spring Boot',
        img: springImg
      },
      {
        title: 'MongoDB',
        img: mogoImg
      },
      {
        title: 'Oracle',
        img: oracleImg
      },
      {
        title: 'MySQL',
        img: mysqlImg
      },
      {
        title: 'SQL Server',
        img: sqlImg
      },
      {
        title: 'ASP.NET',
        img: net
      }
    ]
  },
  {
    id: 3,
    main: 'Languages',
    data: [
      {
        title: 'C++',
        img: cppImg
      },
      {
        title: 'C#',
        img: csharp
      },
      {
        title: 'Java',
        img: javaImg
      },
      {
        title: 'JavaScript',
        img: jsImg
      },
      {
        title: 'TypeScript',
        img: tsImg
      },
      {
        title: 'Dart',
        img: dartImg
      }
    ]
  },
  {
    id: 4,
    main: 'Tools',
    data: [
      {
        title: 'VSCode',
        img: vscImg
      },
      {
        title: 'IntelliJ IDEA',
        img: inteliImg
      },
      {
        title: 'StarUML',
        img: starImg
      },
      {
        title: 'Git',
        img: gitImg
      },
      {
        title: 'Github',
        img: githubImg
      },
      {
        title: 'Postman',
        img: postImg
      },
      {
        title: 'NPM',
        img: npmImg
      },
      {
        title: 'Yarn',
        img: yarnImg
      }
    ]
  }
];