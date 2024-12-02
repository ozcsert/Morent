'use client';
import Image from 'next/image';
import './styles.scss';
import { reviews } from '@/constants';
import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import AngleDown from '@/public/images/icons/AngleDown';
import AngleUp from '@/public/images/icons/AngleUp';

const ReviewCard = () => {
  const [showMore, setShowMore] = useState(false);
  const [windowSize, setWindowSize] = useState<number>(551);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  const reviewCards = reviews.map((review, id) => {
    const revDate = new Date(review.date)
      .toUTCString()
      .split(' ')
      .slice(1, 4)
      .join(' ');
    return (
      <div className="review-card" key={id}>
        <div className="review-card-img">
          <Image src={review.img} alt="Profile" width={56} height={56} />
        </div>
        <div className="review-card-container">
          <div className="review-card-info">
            <div className="review-card-img-title">
              <div className="review-card-name-title">
                <h4>{review.name}</h4>
                <p className="review-card-title">{review.title}</p>
              </div>
            </div>
            <div className="review-card-info-date">
              <p className="review-card-date">{revDate}</p>

              <ReactStars
                className="review-card-rating"
                count={5}
                size={windowSize < 550 ? 14 : 24}
                value={review.rating}
                isHalf={true}
                edit={false}
                emptyIcon={<i className="far fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
          </div>
          <p className="review-card-review">{review.review}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="review-cards">
        <div className="reviews-input">
          <h3>Reviews</h3>
          <div className="total-reviews">{reviews.length}</div>
        </div>
        <div className="review-list-show">
          {showMore ? reviewCards : reviewCards.slice(0, 2)}
          <button className="btn-text" onClick={() => setShowMore(!showMore)}>
            {showMore ? <AngleUp /> : <AngleDown />}
          </button>
        </div>
      </div>
    </>
  );
};
export default ReviewCard;
