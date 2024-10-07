"use client";
import React, { FC, useState } from "react";
import "./styles.scss";
import { Cars } from "@/types/typeList";
import { dummyRecommendationCars } from "@/constants";
import RecommendationCard from "./RecommendationCard";

const Recommendation: FC<Cars> = () => {
  const [showMoreCars, setShowMoreCars] = useState(false);
  return (
    <div className="recommendation-cars-container">
      <h4>Recomendation Cars</h4>
      <div className="recommendation-wrapper">
        <ul className="recommendation-cars">
          {showMoreCars
            ? dummyRecommendationCars.map((car) => (
                <li className="recommendation-car" key={car.id}>
                  <RecommendationCard car={car} />
                </li>
              ))
            : dummyRecommendationCars
                .map((car) => (
                  <li className="recommendation-car" key={car.id}>
                    <RecommendationCard car={car} />
                  </li>
                ))
                .slice(0, 8)}
        </ul>
      </div>
      <div className="recommendation-show-more">
        {showMoreCars ? (
          <button
            onClick={() => setShowMoreCars(!showMoreCars)}
            className="recommendation-btn"
          >
            Show Less Cars
          </button>
        ) : (
          <button
            onClick={() => setShowMoreCars(!showMoreCars)}
            className="recommendation-btn"
          >
            Show More Cars
          </button>
        )}

        <p className="recommendation-total-cars">
          {dummyRecommendationCars.length} cars
        </p>
      </div>
    </div>
  );
};

export default Recommendation;
