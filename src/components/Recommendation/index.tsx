'use client';
import React, { FC, useState } from 'react';
import './styles.scss';
import { Car, RecommendationProps } from '@/types/typeList';
import RecommendationCard from './RecommendationCard';
import { useFetchCars } from '@/app/hooks/fetchCars';
import { Loading } from '../Loading';

const Recommendation: FC<RecommendationProps> = ({ filter }) => {
  const [showMoreCars, setShowMoreCars] = useState(false);
  const { data, error, isLoading } = useFetchCars(filter);

  if (error) {
    if (error === 404) {
      return (
        <div className="error" style={{ padding: '2rem', textAlign: 'center' }}>
          {'Serdest su APIyla oynayip durma kardesim'}
        </div>
      );
    } else {
      return (
        <div className="error" style={{ padding: '2rem', textAlign: 'center' }}>
          {'Much picky? No Batmobile here sorry.'}
        </div>
      );
    }
  }

  if (isLoading || data === undefined) {
    return <Loading />;
  }

  const dataRecommended =
    data.filter((car: Car) => car.view !== undefined && car.view > 2500) || [];

  return (
    <div className="recommendation-cars-container">
      <h4>Recomendation Cars</h4>
      <div className="recommendation-wrapper">
        <ul className="recommendation-cars">
          {showMoreCars
            ? dataRecommended.map((car: Car) => (
                <li className="recommendation-car" key={car.id}>
                  <RecommendationCard car={car} />
                </li>
              ))
            : dataRecommended
                .map((car: Car) => (
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
