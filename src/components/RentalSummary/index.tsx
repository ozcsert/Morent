'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { toast } from 'react-toastify';
import './styles.scss';
import { Car } from '@/types/FilterSidebar';

interface RentalSummaryProps {
  carName?: string;
  imageUrl?: StaticImageData | string;
  rating?: number;
  reviewCount?: number;
  subtotal?: number;
  carInfo: Car;
}

const RentalSummary: React.FC<RentalSummaryProps> = ({ carInfo }) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const tax = 0;
  const totalPrice = carInfo.price + tax - discount;
  const notify = (message: string) => toast(message, { type: 'success' });
  const notifyError = (message: string) => toast(message, { type: 'error' });

  const applyPromoCode = () => {
    if (promoCode === 'DISCOUNT10') {
      const discountAmount = carInfo.price * 0.1;
      setDiscount(discountAmount);
      notify('Promo code applied successfully');
    } else {
      setDiscount(0);
      notifyError('Invalid promo code');
    }
  };

  return (
    <div className="rental-summary">
      <h2>Rental Summary</h2>
      <p className="subtitle">
        Prices may change depending on the length of the rental and the price of
        your rental car.
      </p>
      <div className="car-info">
        <div className="car-image">
          <Image
            src={carInfo.image}
            alt={carInfo.name}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="car-details">
          <h3>{carInfo.name}</h3>
          <div className="rating">
            {'★'.repeat(carInfo.rating)}
            {'☆'.repeat(5 - carInfo.rating)}
            <br /> {carInfo.view}+ Reviewer
          </div>
        </div>
      </div>
      <div className="price-details">
        <div className="subtotal">
          <span>Subtotal</span>
          <span>${carInfo.price}</span>
        </div>
        <div className="tax">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="discount">
            <span>Discount</span>
            <span>-${discount}</span>
          </div>
        )}
      </div>
      <div className="promo-code">
        <input
          type="text"
          placeholder="Apply promo code"
          value={promoCode}
          onChange={e => setPromoCode(e.target.value)}
        />
        <button onClick={applyPromoCode}>Apply now</button>
      </div>
      <div className="total-price">
        <div className="total-price-info">
          <span>Total Rental Price</span>
          <span className="info">
            Overall price and includes rental discount
          </span>
        </div>
        <span className="price">${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default RentalSummary;
