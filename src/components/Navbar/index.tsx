"use client";
import './styles.scss';
import HeartButton from "../../app/images/heartheart.svg";
import BellButton from "../../app/images/bell.svg";
import NotificationButton from "../../app/images/notificationbell.svg";
import ProfileButton from "../../app/images/Imageprofile.svg";
import Image from "next/image";
import useDeviceSize from './size'; 

const Navbar: React.FC = () => {
  const [width, height] = useDeviceSize();
  return (
    <div>
    {width>780 ? ( 
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo-text">MORENT</h1>
      </div>
      <div className="navbar-center">
        <div className="search-bar">
        <Image
            src="/images/search-normalmagnifying_glass.svg"
            alt=""
            width={20}
            height={20}
          />
          <input type="text" placeholder="Search something here" />
        </div>
      </div>
      <div className="navbar-right">
        <button className="icon-btn" key="heart-btn">
        <Image
            src="/images/heartheart.svg"
            alt=""
            width={24}
            height={24}
            unoptimized
            //onClick={handleHeartButton}
          />
        </button>
        <button className="icon-btn" key="bell-btn">
        <Image
            src="/images/bell.svg"
            alt=""
            width={24}
            height={24}
            unoptimized
            //onClick={handleHeartButton}
          />
          <span className="notification-dot"></span> 
        </button>
        <button className="icon-btn" key="notification-btn">
        <Image
            src="/images/notificationbell.svg"
            alt=""
            width={24}
            height={24}
            unoptimized
            //onClick={handleHeartButton}
          />
        </button>
        <div className="profile-picture" key="profile-btn">
        <Image
            src="/images/Imageprofile.svg"
            alt=""
            width={24}
            height={24}
            unoptimized
            //onClick={handleHeartButton}
          />
        </div>

      </div>
    </nav>
    
  ):(
    <header className="header">
    {/* Left: Hamburger Icon */}
    <div className='first-row'>
      <div className="left-section">
        <button className="menu-icon">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Right: Profile Picture */}
      <div className="right-section">
        <div className="profile-picture">
        <Image
            src="/images/Imageprofile.svg"
            alt=""
            width={24}
            height={24}
            //onClick={handleHeartButton}
          />
        </div>
      </div>
      </div>
      <div>
        <div className="logo-mini">
          <h1 className="logo-text">MORENT</h1>
        </div>
      </div>
      <div className='last-row'>
        <div className="search-bar-mini">
        <Image
            src="/images/search-normalmagnifying_glass.svg"
            alt=""
            width={20}
            height={20}
          />
            <input type="text" placeholder="Search something here" />
        </div>
        <div className='settings'>
        <Image
            src="/images/Filtersettings.svg"
            alt=""
            width={48}
            height={48}
          />
        </div>
      </div>
  </header>
)}
</div>
)};

export default Navbar;