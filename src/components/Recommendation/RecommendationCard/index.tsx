'use client';
import Gasoline from '@/app/images/recommendation/icons/Gasoline';
import Gear from '@/app/images/recommendation/icons/Gear';
import Heart from '@/app/images/recommendation/icons/Heart';
import Profile from '@/app/images/recommendation/icons/Profile';
import { Car } from '@/types/typeList';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import './styles.scss';
import Link from 'next/link';

type cardProps = {
  car: Car;
};

const RecommendationCard = ({ car }: cardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const { id } = car;

  useEffect(() => {
    const likedCars = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsLiked(likedCars.some((likedCar: Car) => likedCar.id === id));
  }, [id]);

  const handleLike = () => {
    const likedCars = JSON.parse(localStorage.getItem('wishlist') || '[]');

    if (isLiked) {
      const updatedLikedCars = likedCars.filter(
        (likedCar: Car) => likedCar.id !== id
      );
      localStorage.setItem('wishlist', JSON.stringify(updatedLikedCars));
    } else {
      likedCars.push(car);
      localStorage.setItem('wishlist', JSON.stringify(likedCars));
    }

    setIsLiked(prev => !prev);
  };

  return (
    <div className="recommendation-card">
      <div className="recommendation-box1">
        <div className="recommendation-name-type">
          <h3 className="recommendation-name">{car.name}</h3>
          <p className="recommendation-type">{car.carType}</p>
        </div>
        <button onClick={handleLike} className="recommendation-favorite-btn">
          <Heart isActive={isLiked} />
        </button>
      </div>
      <Link href={`/detail/${car.id}`}>
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
      </Link>
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
        <Link href={`/payment/${car.id}`}>
          <button className="recommendation-rent-btn">Rent Now</button>
        </Link>
      </div>
    </div>
  );
};

export default RecommendationCard;
