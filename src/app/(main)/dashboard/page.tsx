"use client";
import React from "react";
import "./styles.scss";
import Link from "next/link";
import Example from "@/components/Example";
import FilterSidebar from "@/components/FilterSidebar";
import { useState } from "react";

type Car = {
  id: number;
  name: string;
  type: string;
  capacity: string;
  price: number;
};

const dummyCars: Car[] = [
  { id: 1, name: "Dogan", type: "Sport", capacity: "10 people", price: 1 },
  { id: 2, name: "Car 2", type: "SUV", capacity: "2 Person", price: 75 },
  { id: 3, name: "Sahin", type: "Sport", capacity: "2 Person", price: 75 },
  { id: 4, name: "Murat", type: "Sport", capacity: "4 Person", price: 90 },
  { id: 5, name: "Car 5", type: "SUV", capacity: "4 Person", price: 90 },
  { id: 6, name: "Car 6", type: "SUV", capacity: "4 Person", price: 90 },
  { id: 7, name: "Tempra", type: "Sedan", capacity: "6 Person", price: 85 },
  { id: 8, name: "Car 8", type: "SUV", capacity: "8 or More", price: 60 },
  { id: 9, name: "Car 9", type: "SUV", capacity: "8 or More", price: 60 },
  {
    id: 10,
    name: "Car 10",
    type: "random type",
    capacity: "8 or More",
    price: 60,
  },
  {
    id: 13,
    name: "Car 11",
    type: "random type2",
    capacity: "10 or More",
    price: 60,
  },
  { id: 11, name: "Car 12", type: "Sport", capacity: "4 Person", price: 90 },
];

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
