"use client";
import './styles.scss';
import Image from "next/image";
import useDeviceSize from './size'; 
import { useState } from 'react';
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

const Navbar: React.FC = () => {
  const [width, height] = useDeviceSize();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeSideBar = () => {
    setIsOpen(false);
  };

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
          <Image
                  src="/images/Filtersettings.svg"
                  alt=""
                  width={30}
                  height={30} />
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
    <><header className="header">
            {/* Left: Hamburger Icon */}
            <div className='first-row'>
              <Menu className="base-menu" isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
                <Link className="menu-item" href="/home" onClick={closeSideBar}>
                  Home
                </Link>

                <Link className="menu-item" href="/about" onClick={closeSideBar}>
                  About
                </Link>

                <Link className="menu-item" href="/services" onClick={closeSideBar}>
                  Services
                </Link>

                <Link className="menu-item" href="/contact" onClick={closeSideBar}>
                  Contact
                </Link>
              </Menu>

           

            {/* Right: Profile Picture */}
            <div className="right-section">
              <div className="profile-picture-mini">
                <Image
                  src="/images/Imageprofile.svg"
                  alt=""
                  width={50}
                  height={50} />
              </div>
            </div>
          </div>
             <div>
              <div className="logo-mini">
                <h1 className="logo-text">MORENT</h1>
              </div>
            </div>
            {width>478 ? ( 
            <div className='last-row'>
              <div className="search-bar-mini">
                <Image
                  src="/images/search-normalmagnifying_glass.svg"
                  alt=""
                  width={20}
                  height={20} />
                <input type="text" placeholder="Search something here" />
              </div>
              <div className='settings'>
                <Image
                  src="/images/Filtersettings.svg"
                  alt=""
                  width={48}
                  height={48} />
              </div>
            </div>
            ):(
              <div className='last-row'>
              <div className="search-bar-mini">
              <Image
                  src="/images/search-normalmagnifying_glass.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <input type="text" placeholder="Search something here" />
                <Image
                        src="/images/Filtersettings.svg"
                        alt=""
                        width={30}
                        height={30} />
            </div>
            </div>
            )}
   
  </header>
  </>
)}
</div>
)};

export default Navbar;