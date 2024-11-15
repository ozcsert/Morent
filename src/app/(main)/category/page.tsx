'use client';
import { useState, useEffect } from 'react';
import { dummyCars } from '@/constants';
import FilterSidebar from '@/components/FilterSidebar';
import { Car } from '@/types/typeList';
import './styles.scss';
import { calculateNumberOfInputs, filterCars } from '@/utils/filterUtils';

const CategoryPage = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(dummyCars);
  const [carInputs, setCarInputs] = useState<
    { label: string; count: number }[]
  >([]);
  const [capacityInputs, setCapacityInputs] = useState<
    { label: string; count: number }[]
  >([]);

  useEffect(() => {
    const newCarInputs: { label: string; count: number }[] = [];
    const newCapacityInputs: { label: string; count: number }[] = [];

    calculateNumberOfInputs(newCarInputs, 'type');
    calculateNumberOfInputs(newCapacityInputs, 'capacity');

    setCarInputs(newCarInputs);
    setCapacityInputs(newCapacityInputs);
  }, []);

  const handleFilterChange = (filters: {
    type: string[];
    capacity: string[];
    maxPrice: number;
  }) => {
    const newFilteredCars = filterCars(filters, dummyCars);
    setFilteredCars(newFilteredCars);
  };

  return (
    <main>
      <FilterSidebar
        carInputs={carInputs}
        capacityInputs={capacityInputs}
        onFilterChange={handleFilterChange}
      />
      <section>
        <h2>Available Cars</h2>
        <ul>
          {filteredCars.map(car => (
            <li key={car.id}>
              {car.name} - {car.type} - {car.capacity} - ${car.price}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default CategoryPage;
