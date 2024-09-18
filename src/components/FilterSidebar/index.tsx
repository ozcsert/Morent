"use client";
import "./styles.scss";
import React from "react";
import FilterInput from "../FilterInput";
import { useState } from "react";

type Props = {
  onFilterChange: (filters: Filters) => void;
};

type Filters = {
  type: string[];
  capacity: string[];
  maxPrice: number;
};
//
const FilterSidebar: React.FC<Props> = ({ onFilterChange }) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(100);

  const carTypes: { label: string; count: number }[] = [
    { label: "Sport", count: 10 },
    { label: "SUV", count: 12 },
    { label: "MPV", count: 16 },
    { label: "Sedan", count: 20 },
    { label: "Coupe", count: 14 },
    { label: "Hatchback", count: 14 },
  ];

  const capacities: { label: string; count: number }[] = [
    { label: "2 Person", count: 10 },
    { label: "4 Person", count: 14 },
    { label: "6 Person", count: 12 },
    { label: "8 or More", count: 16 },
  ];

  const ranges: { label: string; count: null }[] = [
    { label: "100.00", count: null },
  ];

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prevTypes) => {
      const updatedTypes = prevTypes.includes(type)
        ? prevTypes.filter((t) => t !== type)
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
    setSelectedCapacity((prevCapacities) => {
      const updatedCapacities = prevCapacities.includes(capacity)
        ? prevCapacities.filter((c) => c !== capacity)
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
        options={carTypes}
        selectedOptions={selectedTypes}
        handleCheckboxChange={handleTypeChange}
      />
      <FilterInput
        title="CAPACITY"
        inputType="checkbox"
        options={capacities}
        selectedOptions={selectedCapacity}
        handleCheckboxChange={handleCapacityChange}
      />
      <FilterInput
        title="PRICE"
        inputType="range"
        options={ranges}
        selectedOptions={priceRange}
        handleRangeChange={handlePriceChange}
      />
    </aside>
  );
};

export default FilterSidebar;
