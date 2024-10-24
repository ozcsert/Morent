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

// export const filterCars = (
//   filters: { type: string[]; capacity: string[]; maxPrice: number },
//   cars: Car[]
// ) => {
//   const { type, capacity, maxPrice } = filters;
//   return cars.filter(car => {
//     const matchesType = type.length === 0 || type.includes(car.carType);
//     const matchesCapacity =
//       capacity.length === 0 || capacity.includes(car.capacity);
//     const matchesPrice = car.price <= maxPrice;
//     return matchesType && matchesCapacity && matchesPrice;
//   });
// };

export const filterCarsbyPrice = (filter: number, cars: Car[]) => {
  return cars.filter(car => {
    const matchesPrice = car.price <= filter;
    return matchesPrice;
  });
};
