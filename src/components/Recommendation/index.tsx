'use client';
import React, { FC, useState, useEffect } from 'react';
import './styles.scss';
import { Car, RecommendationProps } from '@/types/typeList';
import RecommendationCard from './RecommendationCard';
import { useFetchCars } from '@/app/hooks/fetchCars';
import { Loading } from '../Loading';
import { filterCarsbyPrice } from '@/utils/filterUtils';

const Recommendation: FC<RecommendationProps> = ({
  filter,
  maxPriceFilter,
}) => {
  const [showMoreCars, setShowMoreCars] = useState(false);
  const [statePriceFilter, setStatePriceFilter] = useState(maxPriceFilter);
  const { data, error, isLoading } = useFetchCars(filter);

  useEffect(() => {
    setStatePriceFilter(maxPriceFilter);
  }, [maxPriceFilter]);

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

  // Filtering cars based on the `view` count
  const dataRecommended =
    data.filter((car: Car) => car.view !== undefined && car.view > 2500) || [];

  // Filter cars based on the price filter state
  const dataPriceFiltered = filterCarsbyPrice(
    statePriceFilter,
    dataRecommended
  );

  return (
    <div className="recommendation-cars-container">
      <h4>Recommendation Cars</h4>
      <div className="recommendation-wrapper">
        <ul className="recommendation-cars">
          {showMoreCars
            ? dataPriceFiltered.map((car: Car) => (
                <li className="recommendation-car" key={car.id}>
                  <RecommendationCard car={car} />
                </li>
              ))
            : dataPriceFiltered.slice(0, 8).map((car: Car) => (
                <li className="recommendation-car" key={car.id}>
                  <RecommendationCard car={car} />
                </li>
              ))}
        </ul>
      </div>
      <div className="recommendation-show-more">
        <button
          onClick={() => setShowMoreCars(!showMoreCars)}
          className="recommendation-btn"
        >
          {showMoreCars ? 'Show Less Cars' : 'Show More Cars'}
        </button>
        <p className="recommendation-total-cars">
          {dataPriceFiltered.length} cars
        </p>
      </div>
    </div>
  );
};

export default Recommendation;
