export type Car = {
  id: number;
  name: string;
  type: string;
  capacity: string;
  price: number;
};

type FilterSideBarFilters = {
  type: string[];
  capacity: string[];
  maxPrice: number;
};

export type FilterSideBarProps = {
  onFilterChange: (filters: FilterSideBarFilters) => void;
  carInputs: { label: string; count: number }[];
  capacityInputs: { label: string; count: number }[];
};
