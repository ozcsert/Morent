"use client";
import React from "react";
import "./styles.scss";
import Link from "next/link";
import Example from "@/components/Example";
import FilterSidebar from "@/components/FilterSidebar";
import { useState } from "react";

interface Car {
  id: number;
  name: string;
  type: string;
  capacity: string;
  price: number;
}

const dummyCars: Car[] = [
  { id: 1, name: "Car 1", type: "Sport", capacity: "2 Person", price: 75 },
  { id: 2, name: "Car 1", type: "SUV", capacity: "2 Person", price: 75 },
  { id: 3, name: "Car 1", type: "Sport", capacity: "2 Person", price: 75 },
  { id: 4, name: "Car 2", type: "Sport", capacity: "4 Person", price: 90 },
  { id: 5, name: "Car 2", type: "SUV", capacity: "4 Person", price: 90 },
  { id: 6, name: "Car 2", type: "SUV", capacity: "4 Person", price: 90 },
  { id: 7, name: "Car 3", type: "Sedan", capacity: "6 Person", price: 85 },
  { id: 8, name: "Car 4", type: "SUV", capacity: "8 or More", price: 60 },
  { id: 9, name: "Car 4", type: "SUV", capacity: "8 or More", price: 60 },
];

const Dashboard = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(dummyCars);

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
    console.log(type.length);

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
      <FilterSidebar onFilterChange={handleFilterChange} />

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
