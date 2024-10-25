import React from 'react';
import Image from 'next/image';
import './styles.scss';

interface CarRentalHeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  carImage?: string;
}

const CarRentalHero: React.FC<CarRentalHeroProps> = ({
  title = "The Best Platform",
  subtitle = "Ease of doing a car rental safely and reliably. Of course at a low price.",
  buttonText = "Rental Car",
  carImage = "/images/admin-car-koegnigsegg.png"  // Varsayılan placeholder resim
}) => {
  return (
    <div className='promo-card'>
        <div className="hero-container">
        <div className="hero-content">
            <h1 className="hero-title">
            {title}
            <span className="hero-subtitle">for Car Rental</span>
            </h1>
            
            <p className="hero-description">
            {subtitle}
            </p>
            
            <button className="rental-button">
            {buttonText}
            </button>
        </div>
        
        <div className="car-image-container">
    
            <Image
                src={carImage}
                alt="Description" 
                layout="fill" 
                objectFit="cover"
            />
        </div>
        </div>
    </div>
  );
};

export default CarRentalHero;