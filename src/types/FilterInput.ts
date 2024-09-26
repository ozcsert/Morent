type Option = {
  label: string;
  count: number | null;
};

export type FilterInputProps = {
  title: string;
  inputType: string;
  options?: Option[];
  selectedOptions: string[] | number;
  handleCheckboxChange?: (label: string) => void;
  handleRangeChange?: (label: number) => void;
};
