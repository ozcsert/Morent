import Gasoline from '@/app/images/recommendation/icons/Gasoline';
import Gear from '@/app/images/recommendation/icons/Gear';
import Heart from '@/app/images/recommendation/icons/Heart';
import Profile from '@/app/images/recommendation/icons/Profile';
import { Car } from '@/types/FilterSidebar';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import './styles.scss';

type cardProps = {
  car: Car;
  onUpdate: () => void;
};

const WishlistCard: FC<cardProps> = ({ car, onUpdate }) => {
  const [isLiked, setIsLiked] = useState(true);
  const { id } = car;

  const handleLike = () => {
    let likedCars = JSON.parse(localStorage.getItem('wishlist') || '[]');

    if (isLiked) {
      likedCars = likedCars.filter((likedCar: Car) => likedCar.id !== id);
      localStorage.setItem('wishlist', JSON.stringify(likedCars));
    } else {
      likedCars.push(car);
      localStorage.setItem('wishlist', JSON.stringify(likedCars));
    }
    setIsLiked(prev => !prev);
    onUpdate();
  };

  return (
    <div className="wishlist-card">
      <div className="wishlist-box1">
        <div className="wishlist-name-type">
          <h3 className="wishlist-name">{car.name}</h3>
          <p className="wishlist-type">{car.carType}</p>
        </div>
        <button onClick={handleLike} className="wishlist-favorite-btn">
          <Heart isActive={isLiked} />
        </button>
      </div>
      <div className="wishlist-box2">
        {car.image && (
          <Image src={car.image} alt="wishlist car" width={224} height={100} />
        )}
        <div className="shadow-effect"></div>
      </div>
      <div className="wishlist-box3">
        <p className="wishlist-gasoline">
          <Gasoline /> {car.storage}
        </p>
        <p className="wishlist-gear">
          <Gear /> {car.gearType}
        </p>
        <p className="wishlist-capacity">
          <Profile /> {car.capacity}
        </p>
      </div>
      <div className="wishlist-box4">
        <p className="wishlist-price">
          ${car.price}/ <span>day</span>
        </p>
        <button className="wishlist-rent-btn">Rent Now</button>
      </div>
    </div>
  );
};

export default WishlistCard;
