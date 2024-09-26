"use client";
import Image from 'next/image';
import "./TextBox.scss"


import React, { useState } from 'react'
function TextBox() {
    const [isActive, setIsActive] = useState(false);
    const detailList: object =
    {
        "Type Car": "Sport",
        "Steering": "Manuel",
        "Capacity": "2 Person",
        "Gasoline": "70 L"
    }
        


    return (
        <div className='cardetailTextBox'>
            <div className="cardetailTextTop">
                <div className="cardetailTextTopHeading">
                    <div className="cardetailTextTitle">
                        Nissan GT - R
                    </div>
                    <div className="cardetailReviews">
                        <Image width={108} height={20} src="/assets/Review Star.png" alt='' />
                        <span className="cardetailComments">440+ Reviewer</span>
                    </div>
                </div>
                <span className="cardetailIcon" onClick={() => { setIsActive(!isActive) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={isActive ? "#EA3323" : "#CCCCCC"}><path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Z" /></svg>
                </span>
            </div>
            <div className="cardetailTextDescription">
                NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the race track.
            </div>
            <div className="cardetailTextDetail">
            {Object.entries(detailList).map(([key, value]) => (
                <div key={key} className='cardetailDetails'>
                    <span className='cardetailDetailHeading'>{key}</span> 
                    <span className='cardetailDetailDescription'>{value}</span>
                </div>
            ))}
            </div>
            <div className="cardetailTextBottom">
                <div className="cardetailTextBottomPrices">
                    <div className="cardetailTextBottomPrice">
                        <span className="cardetailTextBottomReal">$80.00/ </span>
                        <span className="cardetailTextBottomDays">days</span>
                    </div>
                    <span className="cardetailTextBottomDiscount">$100.00</span>
                </div>
                <button className="cardetailTextBottomButton">Rent Now</button>
            </div>

        </div>
    )
}

export default TextBox
