/* eslint-disable no-unused-vars */
export type Car = {
  id: string;
  name: string;
  carType: string;
  storage: number;
  capacity: string;
  image: string;
  gearType: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  view: number;
  rentCount: number;
};

type FilterSideBarFilters = {
  type: string[];
  capacity: string[];
  maxPrice: number;
};

export type FilterSideBarProps = {
  onFilterChange: (filters: FilterSideBarFilters) => void;
};

export type Filter = {
  type?: string[];
  capacity?: string[];
};

export type MaxPriceFilter = {
  maxPrice: number;
};
