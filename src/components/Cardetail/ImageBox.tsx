"use client";

import React, { useState } from 'react'
import "./ImageBox.scss"

import Image from 'next/image';


function ImageBox() {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const carList: string[] = ["/assets/View 1.png", "/assets/View 2.png", "/assets/View 3.png"];
  return (
    <div className='cardetailImageBox'>
      <div className="cardetailBig" style={{
        backgroundImage: `url("${carList[imageIndex]}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: "25px"
        ,
        borderRadius: "10px"
      }}>
        <div className="cardetailImageTexts" style={{}}>

          <h1 className="cardetailImageHeading">Sports car with the best design and acceleration</h1>
          <h3 className="cardetailImageText">Safety and comfort while driving a
            futuristic and elegant sports car</h3>
        </div>
       
      </div>
      <div className="cardetailSmallContainer">
        <div className="cardetailSmall" onClick={() => { setImageIndex(0) }} style={imageIndex == 0 ? { border: "2px solid #3563E9" } : { border: "none" }}>
          <Image
            src={carList[0]}
            alt="Car"
            width={imageIndex == 0 ? 132 : 148}
            height={imageIndex == 0 ? 108 : 124}
          />
        </div>
        <div className="cardetailSmall" style={imageIndex == 1 ? { border: "2px solid #3563E9" } : { border: "none" }} onClick={() => { setImageIndex(1) }}>
          <Image
            src={carList[1]}
            alt="Direction"
            width={imageIndex == 1 ? 132 : 148}
            height={imageIndex == 1 ? 108 : 124}
          />
        </div>
        <div className="cardetailSmall" style={imageIndex == 2 ? { border: "2px solid #3563E9" } : { border: "none" }} onClick={() => { setImageIndex(2) }}>
          <Image
            src={carList[2]}
            alt="Seat"
            width={imageIndex == 2 ? 132 : 148}
            height={imageIndex == 2 ? 108 : 124}
          />
        </div>
      </div>
    </div>
  )
}

export default ImageBox
