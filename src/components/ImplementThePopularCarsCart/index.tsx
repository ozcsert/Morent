'use client';
import './style.scss';
import like from "../../assets/like.png";
import gasStation from "../../assets/gas-station.png";
import circle from "../../assets/circle icon.png";
import users from "../../assets/profile-2user.png"
import { dummyCars } from "../../constants/index";






const ImplementThePopularCarsCart = () => {
    const popularCarArray = dummyCars.slice(0, 4);
    return (
        <> {popularCarArray.map((info, index) => (
            <div className='popular-car-cart' key={index}>
                <div className='popular-car-main'>
                    <div className='popular-car-cart-header-title'>
                        <h2 className='popular-car-cart-name'>{info.name}</h2>
                        <button className='popular-car-cart-header-title-like'><img src={like.src} width={24} height={24} /></button>
                    </div>
                    <div className='popular-car-cart-header-subtitle'>
                        <p>{info.type}</p>
                    </div>
                    <img className='popular-car-cart-img' width={232} height={72} src={info.img} />
                    <div className='popular-car-cart-info'>
                        <div className='popular-car-cart-capacity'>
                            <img src={gasStation.src} width={24} height={24} />
                            <p className='popular-car-cart-capacity-text'>{info.capacity}</p>
                        </div>
                        <div className='popular-car-cart-capacity'>
                            <img src={circle.src} width={24} height={24} />
                            <p className='popular-car-cart-capacity-text'>Manuel</p>
                        </div>
                        <div className='popular-car-cart-capacity'>
                            <img src={users.src} width={24} height={24} />
                            <p className='popular-car-cart-capacity-text'>{info.users}</p>
                        </div>
                    </div>
                    <div className='popular-car-cart-footer'>
                        <div className='popular-car-cart-price'><span>{info.price}/</span>  day</div>
                        <button className='popular-car-cart-btn'>Rent Now</button>
                    </div>
                </div>
            </div>
        ))}
        </>
    )

}
export default ImplementThePopularCarsCart