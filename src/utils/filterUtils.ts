import { Car } from '@/types/typeList';

export const calculateNumberOfInputs = (
  inputSection: { label: string; count: number }[],
  attribute: keyof Car,
  data: Car[]
) => {
  const uniqueCarTypes = new Set(data.map(car => car[attribute]));

  const numberOfCarsForEachType: { [key: string]: number } = {};
  data.forEach(car =>
    numberOfCarsForEachType[car[attribute]]
      ? (numberOfCarsForEachType[car[attribute]] += 1)
      : (numberOfCarsForEachType[car[attribute]] = 1)
  );
  inputSection.length = 0;
  uniqueCarTypes.forEach(attr => {
    inputSection.push({
      label: String(attr),
      count: numberOfCarsForEachType[attr],
    });
  });
};

export const filterCarsbyPrice = (filter: number, cars: Car[]) => {
  return cars.filter(car => {
    const matchesPrice = car.price <= filter;
    return matchesPrice;
  });
};
