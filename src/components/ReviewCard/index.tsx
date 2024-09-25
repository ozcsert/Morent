"use client";
import Image from "next/image";
import "./styles.scss";
import { reviews } from "@/constants";

import React from "react";
import { ReviewProps } from "@/types/typeList";

const ReviewCard: React.FC<ReviewProps> = () =>
  reviews.map((review, id) => {
    return (
      <>
        <div className="review-card" key={id}></div>
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
          <p>{review.review}</p>
        </div>
      </>
    );
  });

export default ReviewCard;
