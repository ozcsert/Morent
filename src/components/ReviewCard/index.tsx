"use client";
import Image from "next/image";
import "./styles.scss";
import { reviews } from "@/constants";
import React from "react";
import { ReviewProps } from "@/types/typeList";
import ReactStars from "react-rating-stars-component";

const ReviewCard: React.FC<ReviewProps> = () => {
  const reviewCards = reviews.map((review, id) => {
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
                <p>{review.title}</p>
              </div>
            </div>
            <div className="review-card-info-date">
              <p className="review-card-date">{review.date}</p>
              <ReactStars
                className="review-card-rating"
                count={5}
                size={24}
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
          <div className="total-reviews">13</div>
        </div>
        <div className="review-list-show">
          {reviewCards}
          <div className="show-all">Show all </div>
          <div className="show-less">Show less </div>
        </div>
      </div>
    </>
  );
};
export default ReviewCard;
