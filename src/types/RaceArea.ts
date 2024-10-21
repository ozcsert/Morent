export type RaceAreaData = {
  title: string;
  locationValue: string;
  selectedStartDate: Date | null;
  selectedFinishDate: Date | null;
  timeValue: string;
};

export type RaceAreaProps = {
  data: RaceAreaData;
  setData: React.Dispatch<React.SetStateAction<RaceAreaData>>;
};
