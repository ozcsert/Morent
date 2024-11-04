import React from 'react';
import Cardetail from '../../../components/Cardetail/Cardetail';
import ReviewCard from '@/components/ReviewCard';
import FilterSidebar from '@/components/FilterSidebar';
import './styles.scss';

function Detail() {
  return (
    <div className="detail-container">
      <FilterSidebar />
      <div className="detail-subcontainer">
        <Cardetail />
        <ReviewCard />
      </div>
    </div>
  );
}

export default Detail;
