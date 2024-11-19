import ThemeShifter from './ThemeShifter';
import './styles.scss';

type DrawerProps = {
  type: string;
};

const Notification = () => {
  return (
    <div className="notification-container">
      <div className="notification">
        <p>Inbox empty</p>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="notification-container">
      <div className="notification">
        <ul>
          <li>Profile</li>
          <li>Log Out</li>
        </ul>
      </div>
    </div>
  );
};

const Drawer = ({ type }: DrawerProps) => {
  const renderContent = () => {
    switch (type) {
      case 'notification':
        return <Notification />;
      case 'settings':
        return <ThemeShifter />;
      case 'profile':
        return <Profile />;
    }
  };
  return (
    <div className="drawer-container">
      <div className="drawer-content">{renderContent()}</div>
    </div>
  );
};

export default Drawer;
