import React, { useState, useEffect } from 'react';
import './styles.scss';
import { FilterInputProps } from '@/types/typeList';

const FilterInput: React.FC<FilterInputProps> = ({
  title,
  options,
  selectedOptions,
  inputType,
  handleRangeChange,
  handleCheckboxChange,
}) => {
  const [rangeValue, setRangeValue] = useState<number>(
    typeof selectedOptions === 'number' ? selectedOptions : 0
  );
  const [isRTL, setIsRTL] = useState<boolean>(false);

  useEffect(() => {
    setIsRTL(document.documentElement.dir === 'rtl');
  }, []);

  const handleRangeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRangeValue(value);
    handleRangeChange?.(value);
  };

  const backgroundSize = `${
    isRTL ? 100 - rangeValue / 3.0 : rangeValue / 3.0
  }% 100%`;

  return (
    <div className="fltr-sctn-container">
      <h4>{title}</h4>
      {inputType === 'range' ? (
        <div>
          <input
            type="range"
            id={title}
            min="0"
            max="300"
            value={rangeValue}
            onChange={handleRangeInputChange}
            style={{ backgroundSize }}
          />
          <label htmlFor={title}>Max. ${rangeValue}.00</label>
        </div>
      ) : (
        options?.map(({ label, count }) => (
          <div key={label}>
            <input
              type={inputType}
              id={label}
              checked={
                Array.isArray(selectedOptions) &&
                selectedOptions.includes(label)
              }
              onChange={() => handleCheckboxChange?.(label)}
            />
            <label htmlFor={label}>
              {label} {title === 'CAPACITY' && 'People'}{' '}
              <span>({count ?? 'N/A'}) </span>
            </label>
          </div>
        ))
      )}
    </div>
  );
};

export default FilterInput;
