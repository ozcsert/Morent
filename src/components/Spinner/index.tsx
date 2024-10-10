import { FC } from "react";

import "./styles.scss";

type LoadingSpinnerProps = {
  size?: number;
  color?: string;
};

const Spinner: FC<LoadingSpinnerProps> = ({ size = 24, color = "#333" }) => {
  return (
    <div
      className="loading-spinner"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderColor: color,
      }}
    >
      <div className="loading-spinner-inner" />
    </div>
  );
};

export default Spinner;
