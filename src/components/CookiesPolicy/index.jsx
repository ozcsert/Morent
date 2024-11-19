import './style.scss'
import Link from 'next/link'
import { useState } from 'react';



const CookiesPolicy = () => {


    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className='cookies-main'>
                <div className='cookies-exit'>
                    <p onClick={handleClose}>X</p>
                </div>
                <div className='cookies-text'>
                    <p> We use cookies on our site to provide you with a better experience. Detailed information: <Link href={'/detail'}>Cookie Policy</Link></p>
                </div>
                <div className='cookies-btn-container'>
                    <button onClick={handleClose} className='cookies-btn'>Accept all cookies</button>
                    <button onClick={handleClose} className='cookies-btn'>Reject all cookies</button>
                    <button onClick={handleClose} className='cookies-btn'>Customize</button>
                </div>
            </div>
        ));
}


export default CookiesPolicy
