"use client";
import React, { FC, useState } from "react";
import "./styles.scss";
import { Cars } from "@/types/typeList";
import RecommendationCard from "./RecommendationCard";
import useSWR from "swr";
import Spinner from "../Spinner";

const Recommendation: FC<Cars> = () => {
  const [showMoreCars, setShowMoreCars] = useState(false);
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(
    "https://66ff850d2b9aac9c997f84c6.mockapi.io/api/morent/cars",
    fetcher
  );

  if (error) return <div className="error">failed to load</div>;
  if (isLoading)
    return (
      <div className="loading" style={{ height: "800px" }}>
        <Spinner size={36} color="#0099ff">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="pulse-dot" />
          ))}
        </Spinner>
      </div>
    );
  const dataRecommended = data.filter(
    (car: Cars) => car.view !== undefined && car.view > 2500
  );
  console.log(dataRecommended, "dd");

  return (
    <div className="recommendation-cars-container">
      <h4>Recomendation Cars</h4>
      <div className="recommendation-wrapper">
        <ul className="recommendation-cars">
          {showMoreCars
            ? dataRecommended.map((car: Cars) => (
                <li className="recommendation-car" key={car.id}>
                  <RecommendationCard car={car} />
                </li>
              ))
            : dataRecommended
                .map((car: Cars) => (
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
          {dataRecommended.length} cars
        </p>
      </div>
    </div>
  );
};

export default Recommendation;
