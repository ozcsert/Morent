'use client';
import React from 'react';
import './Cardetail.scss';
import ImageBox from './ImageBox';
import TextBox from './TextBox';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import Spinner from '../Spinner';

function Cardetail() {
  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const params = useParams();
  const id = params.id;

  const { data, error, isLoading } = useSWR(
    id
      ? `https://66ff850d2b9aac9c997f84c6.mockapi.io/api/morent/cars/${id}`
      : null,
    fetcher
  );
  if (error) return <div className="error">failed to load</div>;
  if (isLoading)
    return (
      <div className="loading" style={{ height: '400px' }}>
        <Spinner size={24} color="#0099ff">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="pulse-dot" />
          ))}
        </Spinner>
      </div>
    );
  return (
    <section className="cardetailSection">
      <ImageBox />
      <TextBox data={data} />
    </section>
  );
}

export default Cardetail;
