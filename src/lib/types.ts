import { links } from './data';

export type ProjectsDataType = {
  title: string,
  description: string,
  tags: string[],
  imageUrl: any,
  github: string,
  demo?: string
}[];

export type SectionName = (typeof links)[number]['name'];