'use client';
import './style.scss';
import gasStation from "../../assets/gas-station.png";
import circle from "../../assets/circle icon.png";
import users from "../../assets/profile-2user.png"
import Image from 'next/image';
import { useState } from 'react';
import Heart from '@/assets/icons/Heart';
import { dummyCars } from '@/constants';





type carProps = {
    cars: dummyCars
}

const CarCart = ({ cars }: carProps) => {

    const [isActive, setIsActive] = useState(false);

    function handleLike() {
        return setIsActive((prev) => !prev);
    }



    return (
        <div className='popular-car-cart' >
            <div className='popular-car-main'>
                <div className='popular-car-cart-header-title'>
                    <h2 className='popular-car-cart-name'>{cars.name}</h2>
                    <div onClick={handleLike}><Heart isActive={isActive} /></div>
                    
                </div>
                <div className='popular-car-cart-header-subtitle'>
                    <p>Sport</p>
                </div>
                <img className='popular-car-cart-img' width={232} height={72} src={cars.img} />
                <div className='popular-car-cart-info'>
                    <div className='popular-car-cart-capacity'>
                        <img src={gasStation.src} width={24} height={24} />
                        <p className='popular-car-cart-capacity-text'>{cars.capacity}</p>
                    </div>
                    <div className='popular-car-cart-capacity'>
                        <img src={circle.src} width={24} height={24} />
                        <p className='popular-car-cart-capacity-text'>Manuel</p>
                    </div>
                    <div className='popular-car-cart-capacity'>
                        <img src={users.src} width={24} height={24} />
                        <p className='popular-car-cart-capacity-text'>{cars.users}</p>
                    </div>
                </div>
                <div className='popular-car-cart-footer'>
                    <div className='popular-car-cart-price'><span>{cars.price}</span>day</div>
                    <button className='popular-car-cart-btn'>Rent Now</button>
                </div>
            </div>
        </div>
    )
}
export default CarCart