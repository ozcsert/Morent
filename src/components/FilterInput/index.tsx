import React from "react";

type Props = {
  title: string;
  inputType: string;
  options: Option[];
  selectedOptions: string[] | number;
  handleOptionChange: (label: string | number) => void;
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
  handleOptionChange,
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
            max="200"
            value={typeof selectedOptions === "number" ? selectedOptions : 0}
            onChange={(e) => handleOptionChange(Number(e.target.value))}
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
              onChange={() => handleOptionChange(label)}
            />
            <label htmlFor={label}>{`${label} (${count ?? "N/A"})`}</label>
          </div>
        ))
      )}
    </div>
  );
};

export default FilterInput;
