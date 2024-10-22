"use client";
import ImplementThePopularCarsCart from "../ImplementThePopularCarsCart";
import "../ImplementThePopularCars/style.scss";
import { dummyCars } from "@/constants/index";
import { FC, useState } from "react";

type CarProps = {
  title: string;
};

export const ImplementThePopularCar: FC<CarProps> = ({ title }) => {
  const [carView, setcarView] = useState<number>(3);
  const popularCars = dummyCars.slice(0, carView);
  const handleViewCar = (carCount: number) => {
    setcarView(carCount);
  };

  return (
    <div className="popular-car-main-box">
      <div className="popular-car-cart-header-main">
        <div className="popular-car-cart-header">
          <p className="popular-car-popular-car-text">{title}</p>
          {carView === 3 && (
            <p
              className="popular-car-view-all"
              onClick={() => handleViewCar(6)}
            >
              View All
            </p>
          )}
          {carView === 6 && (
            <p
              className="popular-car-view-all"
              onClick={() => handleViewCar(3)}
            >
              View Less
            </p>
          )}
        </div>
        <div className="popular-car-cart-all-car">
          {popularCars.map((car) => (
            <ImplementThePopularCarsCart key={car.id} cars={car} />
          ))}
        </div>
      </div>
    </div>
  );
};
