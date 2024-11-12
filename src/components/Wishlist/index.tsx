'use client';
import { Car } from '@/types/typeList';
import WishlistCard from './WishlistCard';
import './styles.scss';
import Link from 'next/link';

const WishlistPage = () => {
  const localStorage =
    typeof window !== 'undefined' && window.localStorage
      ? window.localStorage
      : undefined;

  const wishlist = localStorage?.getItem('wishlist');
  const wishlistCars = JSON.parse(wishlist as string);

  return wishlistCars.length === 0 ? (
    <div className="wishlist-empty">
      <h2>Wishlist is empty</h2>
      <p>Please add a car to your wishlist</p>
      <Link href="/">
        <button className="add-car-btn">Add a car</button>
      </Link>
    </div>
  ) : (
    <div className="wishlist-container">
      {wishlistCars.map((car: Car) => (
        <WishlistCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default WishlistPage;
