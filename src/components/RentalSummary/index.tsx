'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import './styles.scss';

interface RentalSummaryProps {
  carName: string;
  imageUrl: StaticImageData | string;
  rating: number;
  reviewCount: number;
  subtotal: number;
}

const RentalSummary: React.FC<RentalSummaryProps> = ({
  carName,
  imageUrl,
  rating,
  reviewCount,
  subtotal,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const tax = 0;
  const totalPrice = subtotal + tax - discount;

  const applyPromoCode = () => {
    if (promoCode === 'DISCOUNT10') {
      const discountAmount = subtotal * 0.1;
      setDiscount(discountAmount);
    } else {
      setDiscount(0);
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
          <Image src={imageUrl} alt={carName} width={116} height={56} />
        </div>
        <div className="car-details">
          <h3>{carName}</h3>
          <div className="rating">
            {'★'.repeat(rating)}
            {'☆'.repeat(5 - rating)} {reviewCount}+ Reviewer
          </div>
        </div>
      </div>
      <div className="price-details">
        <div className="subtotal">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="tax">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="discount">
            <span>Discount</span>
            <span>-${discount.toFixed(2)}</span>
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
