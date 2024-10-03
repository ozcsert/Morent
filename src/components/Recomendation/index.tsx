"use client";
import React, { useState } from "react";
import "./styles.scss";
import { Cars } from "@/types/typeList";
import { dummyRecomendationCars } from "@/constants";
import Heart from "@/app/images/recomandation/icons/Heart";
import Image from "next/image";
import Gasoline from "@/app/images/recomandation/icons/Gasoline";
import Gear from "@/app/images/recomandation/icons/Gear";
import Profile from "@/app/images/recomandation/icons/Profile";

const Recomendation: React.FC<Cars> = () => {
  const [isActive, setIsActive] = useState(false);

  const cars = dummyRecomendationCars.map((car, id) => {
    return (
      <ul className="recomendation-cars" key={id}>
        <li className="recomendation-box1">
          <div className="recomendation-name-type">
            <h3 className="recomendation-name">{car.name}</h3>
            <p className="recomendation-type">{car.type}</p>
          </div>
          <button
            onClick={() => setIsActive(!isActive)}
            className="recomendation-favorite-btn"
          >
            <Heart
              isActive={isActive}
              onClick={() => setIsActive(!isActive)}
              className={
                isActive ? "recomendation-active" : "recomendation-inactive"
              }
            />
          </button>
        </li>
        <li className="recomendation-box2">
          <Image src={car.img} alt="recomended car" width={224} height={100} />
          <div className="shadow-effect"></div>
        </li>
        <li className="recomendation-box3">
          <p className="recomendation-gasoline">
            <Gasoline /> {car.gasoline}
          </p>
          <p className="recomendation-gear">
            <Gear /> {car.gear}
          </p>
          <p className="recomendation-capacity">
            <Profile /> {car.capacity}
          </p>
        </li>
        <li className="recomendation-box4">
          <p className="recomendation-price">
            ${car.price}.00/ <span>day</span>
          </p>
          <button className="recomendation-rent-btn">Rent Now</button>
        </li>
      </ul>
    );
  });

  return (
    <div className="recomendation-cars-container">
      <h4>Recomendation Cars</h4>
      <div className="recomendation-container-first">{cars.slice(0, 4)}</div>
      <div className="recomendation-container-second">{cars.slice(4, 8)}</div>
    </div>
  );
};

export default Recomendation;
