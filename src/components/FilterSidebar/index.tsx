'use client';
import './styles.scss';
import React from 'react';
import { FilterSideBarProps } from '@/types/typeList';
import { FilterInput } from '@/components/componentList';
import { useState } from 'react';

const FilterSidebar: React.FC<FilterSideBarProps> = ({
  onFilterChange,
  carInputs,
  capacityInputs,
}) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(100);

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prevTypes => {
      const updatedTypes = prevTypes.includes(type)
        ? prevTypes.filter(t => t !== type)
        : [...prevTypes, type];

      onFilterChange({
        type: updatedTypes,
        capacity: selectedCapacity,
        maxPrice: priceRange,
      });

      return updatedTypes;
    });
  };

  const handleCapacityChange = (capacity: string) => {
    setSelectedCapacity(prevCapacities => {
      const updatedCapacities = prevCapacities.includes(capacity)
        ? prevCapacities.filter(c => c !== capacity)
        : [...prevCapacities, capacity];

      onFilterChange({
        type: selectedTypes,
        capacity: updatedCapacities,
        maxPrice: priceRange,
      });

      return updatedCapacities;
    });
  };

  const handlePriceChange = (price: number) => {
    setPriceRange(price);

    onFilterChange({
      type: selectedTypes,
      capacity: selectedCapacity,
      maxPrice: price,
    });
  };

  return (
    <aside className="fltr-sdbr">
      <FilterInput
        title="TYPE"
        inputType="checkbox"
        options={carInputs}
        selectedOptions={selectedTypes}
        handleCheckboxChange={handleTypeChange}
      />
      <FilterInput
        title="CAPACITY"
        inputType="checkbox"
        options={capacityInputs}
        selectedOptions={selectedCapacity}
        handleCheckboxChange={handleCapacityChange}
      />
      <FilterInput
        title="PRICE"
        inputType="range"
        selectedOptions={priceRange}
        handleRangeChange={handlePriceChange}
      />
    </aside>
  );
};

export default FilterSidebar;
