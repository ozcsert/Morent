'use client';
import './styles.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useClickAway } from 'react-use';
import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
import { routes } from '../../types/routes';
import Drawer from '../Drawer';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import UseWindow from '@/app/hooks/useWindow';

interface Car {
  id: string;
  name: string;
  gearType: string;
  image: string;
}
const Navbar: React.FC = () => {
  // eslint-disable-next-line
  const { windowSize } = UseWindow();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
  const [drawerType, setDrawerType] = useState<string>('');
  const router = useRouter();

  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(
          'https://66ff850d2b9aac9c997f84c6.mockapi.io/api/morent/cars'
        );
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredCars(
        cars
          .filter(
            car =>
              car.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              car.gearType?.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .slice(0, 5)
      );
    } else {
      setFilteredCars([]);
    }
  }, [searchTerm, cars]);

  const openDrawer = (newDrawerType: string) => {
    if (drawerType === newDrawerType) {
      setDrawerIsOpen(!drawerIsOpen);
      setDrawerType(newDrawerType);
    } else if (drawerIsOpen === false) {
      setDrawerIsOpen(true);
      setDrawerType(newDrawerType);
    } else if (drawerType !== newDrawerType) {
      setDrawerType(newDrawerType);
    }
  };

  return (
    <div>
      {windowSize >= 780 ? (
        <nav className="navbar">
          {drawerIsOpen && <Drawer type={drawerType} />}
          <Link href={'/'}>
            <div className="navbar-left">
              <h1 className="logo-text">MORENT</h1>
            </div>
          </Link>
          <div className="navbar-center">
            <div className="search-bar">
              <Image
                src="/images/search-normalmagnifying_glass.svg"
                alt=""
                width={20}
                height={20}
              />
              <input
                type="text"
                placeholder="Search something here"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <Image
                src="/images/Filtersettings.svg"
                alt=""
                width={30}
                height={30}
              />
            </div>
            <div className="popup">
              {filteredCars.length > 0
                ? filteredCars.map(car => (
                    <div className="filtercar" key={car.id}>
                      <Link href={`/detail/{$car.id}`} passHref>
                        <div className="detailcar">
                          <p>
                            {car.name} {car.gearType}
                          </p>
                          <Image
                            src={car.image}
                            alt=""
                            width={100}
                            height={40}
                            //onClick={handleHeartButton}
                            style={{ marginLeft: '10px' }}
                          />
                        </div>
                      </Link>
                    </div>
                  ))
                : searchTerm && (
                    <p style={{ color: '#777' }}>No results found</p>
                  )}
            </div>
          </div>
          <div className="navbar-right">
            <button
              onClick={() => router.push('/wishlist')}
              className="icon-btn"
              key="heart-btn"
            >
              <Image
                src="/images/heartheart.svg"
                alt=""
                width={24}
                height={24}
                unoptimized
              />
            </button>
            <button className="icon-btn" key="settings-btn">
              <Image
                src="/images/bell.svg"
                alt=""
                width={24}
                height={24}
                unoptimized
                onClick={() => openDrawer('settings')}
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
                onClick={() => openDrawer('notification')}
              />
            </button>
            <div className="profile-picture" key="profile-btn">
              <Image
                src="/images/Imageprofile.svg"
                alt=""
                width={24}
                height={24}
                style={{ cursor: 'pointer' }}
                unoptimized
                onClick={() => openDrawer('profile')}
              />
            </div>
          </div>
        </nav>
      ) : (
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
                  height={50}
                  onClick={() => openDrawer('profile')}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
            {/* {drawerIsOpen && <Drawer type={drawerType} />} */}
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
                          type: 'spring',
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + idx / 10,
                        }}
                        key={route.title}
                        className="list-item w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                      >
                        <a
                          onClick={() => setOpen(prev => !prev)}
                          className={
                            'flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950'
                          }
                          href={route.href}
                        >
                          <span className="flex gap-1 text-lg">
                            {route.title}
                          </span>
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
            <Link href={'/'}>
              <div className="logo-mini">
                <h1 className="logo-text">MORENT</h1>
              </div>
            </Link>
          </div>
          <div className="last-row">
            <div className="search-bar-mini">
              <Image
                src="/images/search-normalmagnifying_glass.svg"
                alt=""
                width={20}
                height={20}
              />
              <input
                type="text"
                placeholder="Search something here"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <Image
                src="/images/Filtersettings.svg"
                className="search__filter-image"
                alt=""
                width={30}
                height={30}
                // onClick={opennavigation}
                onClick={() => openDrawer('settings')}
              />
            </div>

            <div className="popup">
              {filteredCars.length > 0
                ? filteredCars.map(car => (
                    <div className="filtercar" key={car.id}>
                      <Link href={`/detail/{$car.id}`} passHref>
                        <div
                          className="detailcar"
                          style={{ width: windowSize - 151 }}
                        >
                          <p>
                            {car.name} {car.gearType}
                          </p>
                          <Image
                            src={car.image}
                            alt=""
                            width={100}
                            height={40}
                            style={{ marginLeft: '10px' }}
                          />
                        </div>
                      </Link>
                    </div>
                  ))
                : searchTerm && (
                    <p style={{ color: '#777' }}>No results found</p>
                  )}
            </div>
            {drawerIsOpen && <Drawer type={drawerType} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
