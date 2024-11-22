import './style.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const CookiesPolicy = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="cookies-main">
        <div className="cookies-exit">
          <p onClick={handleClose}>X</p>
        </div>
        <div className="cookies-text">
          <p>
            We use cookies on our site to provide you with a better experience.
            Detailed information: <Link href={'/detail'}>Cookie Policy</Link>
          </p>
        </div>
        <div className="cookies-btn-container">
          <button onClick={acceptAllCookies} className="cookies-btn">
            Accept all cookies
          </button>
        </div>
      </div>
    )
  );
};

export default CookiesPolicy;
