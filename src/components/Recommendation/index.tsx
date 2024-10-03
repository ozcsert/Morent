import React, { FC } from "react";
import "./styles.scss";
import { Cars } from "@/types/typeList";
import { dummyRecommendationCars } from "@/constants";
import RecommendationCard from "./RecommendationCard";

const Recommendation: FC<Cars> = () => {
  return (
    <div className="recommendation-cars-container">
      <h4>Recomendation Cars</h4>
      <div className="recommendation-wrapper">
        <ul className="recommendation-cars">
          {dummyRecommendationCars.map((car) => (
            <li className="recommendation-car" key={car.id}>
              <RecommendationCard car={car} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recommendation;
