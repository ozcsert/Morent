'use client';
import RangeSettings from '@/components/RangeSetting';
import './styles.scss';
import Recommendation from '@/components/Recommendation';
import { RecommendationProps } from '@/types/typeList';
import { FC } from 'react';
import RentalCar from '@/components/RentalCar';

const HomeBoard: FC<RecommendationProps> = ({ filter, maxPriceFilter }) => {
  return (
    <>
      <div className="home-container">
        <div>
          <div className="promo-cards">
            <RentalCar
              title="The Best Platform for Car Rental"
              subtitle="Ease of doing a car rental safely and reliably. Of course at a low price."
              buttonText="Rental Car"
              carImage="/images/BG.png"
              backgroundColor="#54A6FF"
              buttonColor="#2563EB"
            />
            <RentalCar
              title="Easy way to rent a car at a low price"
              subtitle="Providing cheap car rental services and safe and comfortable facilities."
              buttonText="Rental Car"
              carImage="/images/BG2.png"
              backgroundColor="#3563E9"
              buttonColor="#54A6FF"
            />
          </div>
          <RangeSettings />
          <br />
          <Recommendation filter={filter} maxPriceFilter={maxPriceFilter} />
        </div>
      </div>
    </>
  );
};

export default HomeBoard;
