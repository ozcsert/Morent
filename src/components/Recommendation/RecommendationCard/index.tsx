"use client";
import Gasoline from "@/app/images/recommendation/icons/Gasoline";
import Gear from "@/app/images/recommendation/icons/Gear";
import Heart from "@/app/images/recommendation/icons/Heart";
import Profile from "@/app/images/recommendation/icons/Profile";
import { Cars } from "@/types/Recommendation";
import Image from "next/image";
import React, { useState } from "react";
import "./styles.scss";

type cardProps = {
  car: Cars;
};

const RecommendationCard = ({ car }: cardProps) => {
  const [isActive, setIsActive] = useState(false);

  function handleLike() {
    return setIsActive((prev) => !prev);
  }

  return (
    <div className="recommendation-card">
      <div className="recommendation-box1">
        <div className="recommendation-name-type">
          <h3 className="recommendation-name">{car.name}</h3>
          <p className="recommendation-type">{car.carType}</p>
        </div>
        <button onClick={handleLike} className="recommendation-favorite-btn">
          <Heart isActive={isActive} />
        </button>
      </div>
      <div className="recommendation-box2">
        {car.image && (
          <Image
            src={car.image}
            alt="recomended car"
            width={224}
            height={100}
          />
        )}
        <div className="shadow-effect"></div>
      </div>
      <div className="recommendation-box3">
        <p className="recommendation-gasoline">
          <Gasoline /> {car.storage}
        </p>
        <p className="recommendation-gear">
          <Gear /> {car.gearType}
        </p>
        <p className="recommendation-capacity">
          <Profile /> {car.capacity}
        </p>
      </div>
      <div className="recommendation-box4">
        <p className="recommendation-price">
          ${car.price}/ <span>day</span>
        </p>
        <button className="recommendation-rent-btn">Rent Now</button>
      </div>
    </div>
  );
};

export default RecommendationCard;
