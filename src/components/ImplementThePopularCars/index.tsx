'use client';
import ImplementThePopularCarsCart from '../ImplementThePopularCarsCart';
import '../ImplementThePopularCars/style.scss';
import { FC, useState } from 'react';
import useSWR from 'swr';
import { Cars } from '@/types/Recommendation';

type CarProps = {
  title: string;
  width: number;
  carsView: number;
};

export const ImplementThePopularCar: FC<CarProps> = ({
  title,
  width,
  carsView,
}) => {
  const [carView, setcarView] = useState<number>(carsView);

  const handleViewCar = (carCount: number) => {
    setcarView(carCount);
  };
  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data } = useSWR(
    'https://66ff850d2b9aac9c997f84c6.mockapi.io/api/morent/cars',
    fetcher
  );
  const popularCars: Cars[] = data ? data.slice(0, carView) : [];

  return (
    <div className="popular-car-main-box">
      <div className="popular-car-cart-header-main" style={{ maxWidth: width }}>
        <div className="popular-car-cart-header">
          <p className="popular-car-popular-car-text">{title}</p>
          {(width === 1312 ? carView === 4 : carView === 3) && (
            <p
              className="popular-car-view-all"
              onClick={() => handleViewCar(15)}
            >
              View All - {width}
            </p>
          )}
          {carView === 15 && (
            <p
              className="popular-car-view-all"
              onClick={() => handleViewCar(width === 1312 ? 4 : 3)}
            >
              View Less - {width}
            </p>
          )}
        </div>
        <div className="popular-car-cart-all-car">
          {popularCars &&
            popularCars.map((car: Cars) => (
              <ImplementThePopularCarsCart key={car.id} cars={car} />
            ))}
        </div>
      </div>
    </div>
  );
};
