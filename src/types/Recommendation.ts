import { StaticImageData } from 'next/image';
import { Filter } from './FilterSidebar';

export type Cars = {
  id?: number;
  name?: string;
  image?: StaticImageData | string | undefined;
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
