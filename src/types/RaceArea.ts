export type RaceAreaProps = {
  data: {
    title: string
    locationValue: string
    selectedStartDate: Date | null
    selectedFinishDate: Date | null
    timeValue: string
  }
  setData: React.Dispatch<
    React.SetStateAction<{
      title: string
      locationValue: string
      selectedStartDate: Date | null
      selectedFinishDate: Date | null
      timeValue: string
    }>
  >
}
