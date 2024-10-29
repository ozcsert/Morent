import './page.scss';
import RangeSettings from '@/components/RangeSetting';
import Footer from '@/components/Footer';
import './page.scss';
import Recommendation from '@/components/Recommendation';
import RentalCar from '@/components/RentalCar';

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="promo-cards">
          <RentalCar
            title="The Best Platform for Car Rental"
            subtitle="Ease of doing a car rental safely and reliably. Of course at a low price."
            buttonText="Rental Car"
            carImage="/images/BG.png"
            backgroundColor="#54A6FF"
          />
          <RentalCar
            title="Easy way to rent a car at a low price"
            subtitle="Providing cheap car rental services and safe and comfortable facilities."
            buttonText="Rental Car"
            carImage="/images/BG2.png"
            backgroundColor="#3563E9"
          />
        </div>

        <RangeSettings />
        <br />
        <Recommendation
          id={0}
          name={''}
          price={0}
          image={''}
          carType={''}
          capacity={''}
          storage={''}
          gearType={''}
        />
        <Footer />
      </div>
      <div className="home"></div>
    </>
  );
}
