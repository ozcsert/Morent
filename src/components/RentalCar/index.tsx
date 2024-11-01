import React from 'react';
import './styles.scss';

interface CarRentalHeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  carImage?: string;
  backgroundColor?: string;
  buttonColor?: string;
}

const CarRentalHero: React.FC<CarRentalHeroProps> = props => {
  return (
    <div
      className="promo-card"
      style={{
        backgroundImage: `url(${props.carImage})`,
        backgroundColor: props.backgroundColor,
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">
          {props.title || 'The Best Platform for Car Rental'}
        </h1>

        <p className="hero-description">
          {props.subtitle ||
            'Ease of doing a car rental safely and reliably. Of course at a low price.'}
        </p>

        <button className="rental-button"  style={{
        backgroundColor: props.buttonColor
      }}>
          {props.buttonText || 'Rental Car'}
        </button>
      </div>
    </div>
  );
};

export default CarRentalHero;
