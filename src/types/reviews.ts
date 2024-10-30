import { StaticImageData } from 'next/image';

export type ReviewProps = {
  id: number;
  img: StaticImageData;
  name: string;
  title: string;
  review: string;
  rating: number;
  date: string;
};
