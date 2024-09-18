import React, { useState, useEffect } from "react";
import "./styles.scss";

type Props = {
  title: string;
  inputType: string;
  options?: Option[];
  selectedOptions: string[] | number;
  handleCheckboxChange?: (label: string) => void;
  handleRangeChange?: (label: number) => void;
};

type Option = {
  label: string;
  count: number | null;
};

const FilterInput: React.FC<Props> = ({
  title,
  options,
  selectedOptions,
  inputType,
  handleRangeChange,
  handleCheckboxChange,
}) => {
  const [rangeValue, setRangeValue] = useState<number>(
    typeof selectedOptions === "number" ? selectedOptions : 0
  );
  const [isRTL, setIsRTL] = useState<boolean>(false);
  const [backgroundSize, setBackgroundSize] = useState<string>("0% 100%");

  const handleRangeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRangeValue(value);
    handleRangeChange?.(value);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsRTL(document.documentElement.dir === "rtl");
    }
  }, []);

  useEffect(() => {
    const min = 0;
    const max = 150;
    const val = rangeValue;
    let percentage = ((val - min) * 100) / (max - min);

    if (isRTL) {
      percentage = 100 - percentage;
    }

    setBackgroundSize(`${percentage}% 100%`);
  }, [rangeValue, isRTL]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observerCallback: MutationCallback = (mutationList) => {
        mutationList.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "dir"
          ) {
            setIsRTL(document.documentElement.dir === "rtl");
          }
        });
      };

      const observer = new MutationObserver(observerCallback);
      observer.observe(document.documentElement, { attributes: true });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="fltr-sctn-container">
      <h4>{title}</h4>
      {inputType === "range" ? (
        <div>
          <input
            type="range"
            id={title}
            min="0"
            max="150"
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
              {label} <span>({count ?? "N/A"})</span>
            </label>
          </div>
        ))
      )}
    </div>
  );
};

export default FilterInput;
