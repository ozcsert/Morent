"use client";
import React, { useState } from "react";
import "./styles.scss";
import Link from "next/link";
import Example from "@/components/Example";
import { dummyCars } from "@/constants";
import { FilterSidebar } from "@/components/componentList";
import { Car } from "@/types/typeList";

const Dashboard = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(dummyCars);

  const carInputs: { label: string; count: number }[] = [];
  const capacityInputs: { label: string; count: number }[] = [];

  const calculateNumberOfinputs = (
    inputSection: { label: string; count: number }[],
    attribute: keyof Car
  ) => {
    const uniqueCarTypes = new Set(dummyCars.map((car) => car[attribute]));

    const numberOfCarsForEachType: { [key: string]: number } = {};
    dummyCars.forEach((car) =>
      numberOfCarsForEachType[car[attribute]]
        ? (numberOfCarsForEachType[car[attribute]] += 1)
        : (numberOfCarsForEachType[car[attribute]] = 1)
    );
    inputSection.length = 0;
    uniqueCarTypes.forEach((attribute) => {
      inputSection.push({
        label: String(attribute),
        count: numberOfCarsForEachType[attribute],
      });
    });
  };

  calculateNumberOfinputs(carInputs, "type");
  calculateNumberOfinputs(capacityInputs, "capacity");

  const handleFilterChange = (filters: {
    type: string[];
    capacity: string[];
    maxPrice: number;
  }) => {
    const { type, capacity, maxPrice } = filters;
    const newFilteredCars = dummyCars.filter((car) => {
      const matchesType = type.length === 0 || type.includes(car.type);
      const matchesCapacity =
        capacity.length === 0 || capacity.includes(car.capacity);
      const matchesPrice = car.price <= maxPrice;
      return matchesType && matchesCapacity && matchesPrice;
    });
    setFilteredCars(newFilteredCars);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <Example title="This is the dashboard" />
      <FilterSidebar
        carInputs={carInputs}
        capacityInputs={capacityInputs}
        onFilterChange={handleFilterChange}
      />

      <section>
        <h2>Available Cars</h2>
        <ul>
          {filteredCars.map((car) => (
            <li key={car.id}>
              {car.name} - {car.type} - {car.capacity} - ${car.price}
            </li>
          ))}
        </ul>
      </section>

      <Link
        style={{
          color: "red",
        }}
        href="/example"
      >
        Go to example
      </Link>
    </div>
  );
};

export default Dashboard;
