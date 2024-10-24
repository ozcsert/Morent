'use client';
import HomeBoard from '@/components/home';
import './page.scss';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Filter } from '@/types/typeList';
import FilterSidebar from '@/components/FilterSidebar';

export default function Home() {
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
      <main className="home">
        <div>
          <FilterSidebar onFilterChange={handleFilterChange} />
        </div>
        <HomeBoard filter={filter} maxPriceFilter={maxPriceFilter} />
      </main>
      <Footer />
    </>
  );
}
