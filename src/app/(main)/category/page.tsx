'use client';
import './styles.scss';
import CategoryBoard from '@/components/category';
import FilterSidebar from '@/components/FilterSidebar';
import { useState } from 'react';
import { Filter } from '@/types/typeList';

const CategoryPage = () => {
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

  return (
    <>
      <main>
        <FilterSidebar onFilterChange={handleFilterChange} />
        <CategoryBoard filter={filter} maxPriceFilter={maxPriceFilter} />
      </main>
    </>
  );
};

export default CategoryPage;
