import React from 'react';
import Cardetail from '@/components/Cardetail/Cardetail';
import ReviewCard from '@/components/ReviewCard';
import './styles.scss';

function Detail() {
  return (
    <div className="detail-container">
      <Cardetail />
      <ReviewCard />
    </div>
  );
}

export default Detail;
