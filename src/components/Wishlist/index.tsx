'use client';
import { Car } from '@/types/typeList';
import WishlistCard from './WishlistCard';
import './styles.scss';

const WishlistPage = () => {
  const localStorage =
    typeof window !== 'undefined' && window.localStorage
      ? window.localStorage
      : undefined;
  const wishlist = localStorage?.getItem('wishlist');
  const wishlistCars = wishlist ? JSON.parse(wishlist) : [];

  return wishlistCars.length === 0 ? (
    <div className="wishlist-empty">
      <h2>Wishlist is empty</h2>
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
