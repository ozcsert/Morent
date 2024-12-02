import { FC } from 'react';
import DropdownArrow from '@/app/images/bottom-arrow.svg';
import './styles.scss';

type CustomDateAreaProps = {
  value?: string;
  onClick?: () => void;
  className?: string;
};

const CustomDateArea: FC<CustomDateAreaProps> = ({
  value,
  onClick,
  className,
}) => {
  return (
    <>
      <div className={className} onClick={onClick}>
        <input
          value={value}
          onChange={() => {}}
          placeholder="Select your date"
          className="rs-datepicker-custom-input"
        />
        <DropdownArrow width={12} height={12} style={{ color: '#90A3BF' }} />
      </div>
    </>
  );
};

export default CustomDateArea;
