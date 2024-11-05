'use client';
import React, { useState } from 'react';
import './ImageBox.scss';
import Image from 'next/image';
import Spinner from '../Spinner';
import useSWR from 'swr';
import { Cars } from '@/types/Recommendation';

function ImageBox() {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const carList: string[] = [
    '/assets/View 1.png',
    '/assets/View 2.png',
    '/assets/View 3.png',
  ];
  const { data, error, isLoading } = useSWR(
    'https://66ff850d2b9aac9c997f84c6.mockapi.io/api/morent/cars',
    fetcher
  );

  if (error) return <div className="error">failed to load</div>;
  if (isLoading)
    return (
      <div className="loading" style={{ height: '800px' }}>
        <Spinner size={36} color="#0099ff">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="pulse-dot" />
          ))}
        </Spinner>
      </div>
    );
  const carDetail = data.filter(
    (car: Cars) => car.view !== undefined && car.view > 2500
  );

  return (
    <div className="cardetailImageBox">
      <div
        className="cardetailBig"
        style={{
          backgroundImage: `url("${carList[imageIndex]}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '25px',
          borderRadius: '10px',
        }}
      >
        <div className="cardetailImageTexts" style={{}}>
          <h1 className="cardetailImageHeading">
            Sports car with the best design and acceleration
          </h1>
          <h3 className="cardetailImageText">
            Safety and comfort while driving a futuristic and elegant sports car
          </h3>
        </div>
      </div>
      <div className="cardetailSmallContainer">
        <div
          className="cardetailSmall"
          onClick={() => {
            setImageIndex(0);
          }}
          style={
            imageIndex === 0
              ? { border: '2px solid #3563E9', padding: '16px' }
              : { border: 'none' }
          }
        >
          <Image
            src={carList[0]}
            alt="Car"
            sizes="80vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={148}
            height={132}
          />
        </div>
        <div
          className="cardetailSmall"
          style={
            imageIndex == 1
              ? { border: '2px solid #3563E9', padding: '1vw' }
              : { border: 'none' }
          }
          onClick={() => {
            setImageIndex(1);
          }}
        >
          <Image
            src={carList[1]}
            alt="Direction"
            sizes="80vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={148}
            height={132}
          />
        </div>
        <div
          className="cardetailSmall"
          style={
            imageIndex == 2
              ? { border: '2px solid #3563E9', padding: '16px' }
              : { border: 'none' }
          }
          onClick={() => {
            setImageIndex(2);
          }}
        >
          <Image
            src={carList[2]}
            alt="Seat"
            sizes="80vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={148}
            height={132}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageBox;
