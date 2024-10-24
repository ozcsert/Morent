'use client';
import RangeSettings from '@/components/RangeSetting';
import './styles.scss';
import Recommendation from '@/components/Recommendation';
import { RecommendationProps } from '@/types/typeList';

import { FC } from 'react';
const CategoryBoard: FC<RecommendationProps> = ({ filter, maxPriceFilter }) => {
  return (
    <>
      <div className="category-container">
        <div>
          <RangeSettings />
          <br />
          <Recommendation filter={filter} maxPriceFilter={maxPriceFilter} />
        </div>
      </div>
    </>
  );
};

export default CategoryBoard;
