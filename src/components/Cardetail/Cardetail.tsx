import React from 'react';
import './Cardetail.scss';
import ImageBox from './ImageBox';
import TextBox from './TextBox';

function Cardetail() {
  return (
    <section className="cardetailSection">
      <ImageBox />
      <TextBox />
    </section>
  );
}

export default Cardetail;
