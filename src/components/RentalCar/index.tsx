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

const CarRentalHero: React.FC<CarRentalHeroProps> = ({
  title = 'Lorem Ipsum',
  subtitle = 'Lorem Ipsum',
  buttonText = 'Rental Car',
  carImage = '/images/BG.png',
  backgroundColor = '#54A6FF',
  buttonColor = '#2563EB',
}) => {
  return (
    <div
      className="promo-card"
      style={{
        backgroundImage: `url(${carImage})`,
        backgroundColor: backgroundColor,
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>

        <p className="hero-description">{subtitle}</p>

        <button
          className="rental-button"
          style={{
            backgroundColor: buttonColor,
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CarRentalHero;
