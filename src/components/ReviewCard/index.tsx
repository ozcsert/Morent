"use client";
import Image from "next/image";
import "./styles.scss";
import { reviews } from "@/constants";

import React from "react";
import { ReviewProps } from "@/types/typeList";

const ReviewCard: React.FC<ReviewProps> = () => {
  const reviewCards = reviews.map((review, id) => {
    return (
      <div className="review-card" key={id}>
        <div className="review-card-img-container">
          <div className="review-card-img">
            <Image src={review.img} alt="Profile" width={30} height={30} />
          </div>
          <div className="review-card-info">
            <div className="review-card-name-title">
              <h4>{review.name}</h4>
              <p>{review.title}</p>
            </div>
            <div className="review-card-info-date">
              <p>{review.date}</p>
              <p>{review.rating}</p>
            </div>
          </div>
        </div>
        <p>{review.review}</p>
      </div>
    );
  });

  return (
    <>
      <div className="review-cards">
        <div className="reviews-input">
          <h3>Reviews</h3>
          <div className="total-reviews">13</div>
        </div>
        {reviewCards}
        <div className="show-all">Show all </div>
      </div>
    </>
  );
};
export default ReviewCard;
