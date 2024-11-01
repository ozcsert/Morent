'use client';
import './styles.scss';
import CategoryBoard from '@/components/category';
import FilterSidebar from '@/components/FilterSidebar';
import { useFilterState } from '@/app/hooks/filterState';

const CategoryPage = () => {
  const { filter, maxPriceFilter, handleFilterChange } = useFilterState();

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
