"use client";
import './styles.scss';
import Image from "next/image";
import useDeviceSize from './size'; 
import { useState } from 'react';
import { useClickAway } from "react-use";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { routes } from "../../types/routes";

const Navbar: React.FC = () => {
  const [width, height] = useDeviceSize();
  const [isOpen, setOpen] = useState<boolean>(false);

  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

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
    <div>
      <div ref={ref} className="first-row">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      
    
 
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
          <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                const { Icon } = route;

              return (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + idx / 10,
                  }}
                  key={route.title}
                  className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                >
                  <a
                    onClick={() => setOpen((prev) => !prev)}
                    className={
                      "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                    }
                    href={route.href}
                  >
                    <span className="flex gap-1 text-lg">{route.title}</span>
                    <Icon className="text-xl" />
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
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
   
  </div>

)}
</div>
)};

export default Navbar;