"use client";
import "./styles.scss";

import React from "react";
import FilterInput from "../FilterInput";
import { useState } from "react";

const FilterSidebar: React.FC = () => {
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
    setSelectedTypes((prevTypes) =>
      prevTypes.includes(type)
        ? prevTypes.filter((t) => t !== type)
        : [...prevTypes, type]
    );
  };

  const handleCapacityChange = (capacity: string) => {
    setSelectedCapacity((prevCapacities) =>
      prevCapacities.includes(capacity)
        ? prevCapacities.filter((c) => c !== capacity)
        : [...prevCapacities, capacity]
    );
  };

  const handlePriceChange = (price: string) => {
    setPriceRange(parseFloat(price));
  };

  return (
    <aside className="fltr-sdbr">
      <FilterInput
        title="Type"
        inputType="checkbox"
        options={carTypes}
        selectedOptions={selectedTypes}
        handleOptionChange={handleTypeChange}
      />
      <FilterInput
        title="Capacity"
        inputType="checkbox"
        options={capacities}
        selectedOptions={selectedCapacity}
        handleOptionChange={handleCapacityChange}
      />
      <FilterInput
        title="Price"
        inputType="range"
        options={ranges}
        selectedOptions={priceRange}
        handleOptionChange={handlePriceChange}
      />
    </aside>
  );
};

export default FilterSidebar;
