import React from "react";

type Props = {
  title: string;
  inputType: string;
  options: Option[];
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
            value={typeof selectedOptions === "number" ? selectedOptions : 0}
            onChange={(e) => handleRangeChange?.(Number(e.target.value))}
          />
          <label htmlFor={title}>Max. ${selectedOptions}</label>
        </div>
      ) : (
        options.map(({ label, count }) => (
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
            <label htmlFor={label}>{`${label} (${count ?? "N/A"})`}</label>
          </div>
        ))
      )}
    </div>
  );
};

export default FilterInput;
