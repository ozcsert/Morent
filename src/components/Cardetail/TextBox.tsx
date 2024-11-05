'use client';
import Image from 'next/image';
import './TextBox.scss';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import Spinner from '../Spinner';
import { Cars } from '@/types/Recommendation';
import { useParams } from 'next/navigation';

function TextBox() {
  const [isActive, setIsActive] = useState(false);
  const [carDetails, setCarDetails] = useState<Cars | null>(null);
  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const params = useParams();
  const id = params.id;

  const { data, error } = useSWR(
    id
      ? `https://66ff850d2b9aac9c997f84c6.mockapi.io/api/morent/cars/${id}`
      : null,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setCarDetails(data);
    }
  }, [data]);
  if (error) return <div className="error">failed to load</div>;
  if (!data)
    return (
      <div className="loading" style={{ height: '800px' }}>
        <Spinner size={36} color="#0099ff">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="pulse-dot" />
          ))}
        </Spinner>
      </div>
    );

  const keysToDisplay = ['carType', 'capacity'];
  const keysToDisplay2 = ['storage', 'gearType'];
  return (
    <div className="cardetailTextBox">
      <div className="cardetailTextTop">
        <div className="cardetailTextTopHeading">
          <div className="cardetailTextTitle">{carDetails?.name}</div>
          <div className="cardetailReviews">
            <Image
              width={108}
              height={20}
              src="/assets/Review Star.png"
              alt=""
            />
            <span className="cardetailComments">
              {carDetails?.view}+ Reviewer
            </span>
          </div>
        </div>
        <span
          className="cardetailIcon"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill={isActive ? '#EA3323' : '#CCCCCC'}
          >
            <path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Z" />
          </svg>
        </span>
      </div>
      <div className="cardetailTextDescription">
        {carDetails?.carType} Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Iusto nihil ad rem asperiores necessitatibus maiores? Officia
        error est fuga suscipit earum, ipsum asperiores, sequi accusamus totam
        fugit non, incidunt nesciunt.
      </div>
      <div className="cardetailTextDetail">
        {carDetails &&
          keysToDisplay.map(
            key =>
              carDetails[key] && (
                <div key={key} className="cardetailDetails1">
                  <span className="cardetailDetailHeading">{key}</span>
                  <span className="cardetailDetailDescription">
                    {carDetails[key]}
                  </span>
                </div>
              )
          )}
        {carDetails &&
          keysToDisplay2.map(
            key =>
              carDetails[key] && (
                <div key={key} className="cardetailDetails2">
                  <span className="cardetailDetailHeading">{key}</span>
                  <span className="cardetailDetailDescription">
                    {carDetails[key]}
                  </span>
                </div>
              )
          )}
      </div>
      <div className="cardetailTextBottom">
        <div className="cardetailTextBottomPrices">
          <div className="cardetailTextBottomPrice">
            <span className="cardetailTextBottomReal">
              {carDetails?.price?.toFixed(0)}/
            </span>
            <span className="cardetailTextBottomDays">days</span>
          </div>
          <span className="cardetailTextBottomDiscount">
            ${(carDetails?.price * 1.15).toFixed(0)}
          </span>
        </div>
        <Link href="/payment">
          <button className="cardetailTextBottomButton">Rent Now</button>
        </Link>
      </div>
    </div>
  );
}

export default TextBox;
