import './styles.scss';
import HeartButton from "../../app/images/heartheart.svg";
import BellButton from "../../app/images/bell.svg";
import NotificationButton from "../../app/images/notificationbell.svg";
import ProfileButton from "../../app/images/Imageprofile.svg";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">MORENT</h1>
      </div>
      <div className="navbar-center">
        <div className="search-bar">
          <input type="text" placeholder="Search something here" />
          <button className="filter-btn">
            <i className="fas fa-sliders-h"></i>
          </button>
        </div>
      </div>
      <div className="navbar-right">
        <button className="icon-btn">
        <Image
            src={HeartButton}
            alt=""
            width={24}
            height={24}
            //onClick={handleHeartButton}
          />
        </button>
        <button className="icon-btn">
        <Image
            src={BellButton}
            alt=""
            width={24}
            height={24}
            //onClick={handleHeartButton}
          />
          <span className="notification-dot"></span>
        </button>
        <button className="icon-btn">
        <Image
            src={NotificationButton}
            alt=""
            width={24}
            height={24}
            //onClick={handleHeartButton}
          />
        </button>
        <div className="profile-picture">
        <Image
            src={ProfileButton}
            alt=""
            width={24}
            height={24}
            //onClick={handleHeartButton}
          />
        </div>

      </div>
    </nav>
    </div>
  );
};

export default Navbar;