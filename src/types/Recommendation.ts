import { StaticImport } from 'next/dist/shared/lib/get-img-props';

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
