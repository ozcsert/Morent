import { Filter } from '@/types/FilterSidebar';
import { useState } from 'react';

export const useFilterState = () => {
  const [filter, setFilter] = useState<Filter>({
    type: [],
    capacity: [],
  });

  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(100);

  const handleFilterChange = (newFilters: {
    type: string[];
    capacity: string[];
    maxPrice: number;
  }) => {
    const { type, capacity, maxPrice } = newFilters;

    setFilter(prevState => ({
      ...prevState,
      type: type,
      capacity: capacity,
    }));
    setMaxPriceFilter(maxPrice);
  };

  return {
    filter,
    maxPriceFilter,
    handleFilterChange,
  };
};
