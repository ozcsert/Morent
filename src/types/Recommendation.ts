/* eslint-disable no-unused-vars */
// import { StaticImageData } from 'next/image';
import { Filter } from './FilterSidebar';

export type Cars = {
  id?: string;
  name?: string;
  image: string | StaticImport;
  carType?: string;
  capacity?: string;
  price?: number;
  storage?: string;
  gearType?: string;
  view?: number | undefined;
  rentCount?: string;
};

export type RecommendationProps = {
  filter: Filter;
  maxPriceFilter: number;
};
