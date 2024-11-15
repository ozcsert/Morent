import ThemeShifter from '../ThemeShifter';
import './styles.scss';

type DrawerProps = {
  type: string;
};

const Drawer = ({ type }: DrawerProps) => {
  return (
    <div className="drawer-container">
      <div className="">{type}</div>
      <div className="drawer-content">
        <ThemeShifter />
      </div>
    </div>
  );
};

export default Drawer;
