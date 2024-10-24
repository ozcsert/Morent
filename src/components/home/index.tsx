'use client';
import RangeSettings from '@/components/RangeSetting';
import './styles.scss';
import Recommendation from '@/components/Recommendation';

const HomeBoard = () => {
  return (
    <>
      <div className="home-container">
        <div>
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
        </div>
      </div>
    </>
  );
};

export default HomeBoard;
