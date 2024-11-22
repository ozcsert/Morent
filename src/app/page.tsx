'use client';
import HomeBoard from '@/components/home';
import './page.scss';
import Footer from '@/components/Footer';
import { useFilterState } from '@/app/hooks/filterState';
import FilterSidebar from '@/components/FilterSidebar';

export default function Home() {
  const { filter, maxPriceFilter, handleFilterChange } = useFilterState();

  return (
    <>
      <main className="home">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <HomeBoard filter={filter} maxPriceFilter={maxPriceFilter} />
      </main>
      <Footer />
    </>
  );
}
