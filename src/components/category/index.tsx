'use client';
import RangeSettings from '@/components/RangeSetting';
import './styles.scss';
import Recommendation from '@/components/Recommendation';
import FilterSidebar from '@/components/FilterSidebar';

import { useState } from 'react';

type Filter = {
  type: string[];
  capacity: string[];
};

const CategoryBoard = () => {
  const [filter, setFilter] = useState<Filter>({
    type: [],
    capacity: [],
  });

  const handleFilterChange = (newFilters: {
    type: string[];
    capacity: string[];
    maxPrice: number;
  }) => {
    const { type, capacity } = newFilters;

    setFilter(prevState => ({
      ...prevState,
      type: type,
      capacity: capacity,
    }));
  };

  return (
    <>
      <div className="category-container">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div>
          <RangeSettings />
          <br />

          <Recommendation filter={filter} />
        </div>
      </div>
    </>
  );
};

export default CategoryBoard;
