import { FC } from 'react';

import './styles.scss';

type LoadingSpinnerProps = {
  size?: number;
  color?: string;
  children?: JSX.Element | JSX.Element[];
};

const Spinner: FC<LoadingSpinnerProps> = ({
  size = 24,
  color = '#333',
  children,
}) => {
  return (
    <div
      className="loading-spinner"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderColor: color,
      }}
    >
      {children}
      <div className="loading-spinner-inner" />
    </div>
  );
};

export default Spinner;
