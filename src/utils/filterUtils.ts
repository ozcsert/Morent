// carUtils.ts
import { Car } from "@/types/typeList"
import { dummyCars } from "@/constants"

export const calculateNumberOfInputs = (
  inputSection: { label: string; count: number }[],
  attribute: keyof Car
) => {
  const uniqueCarTypes = new Set(dummyCars.map((car) => car[attribute]))

  const numberOfCarsForEachType: { [key: string]: number } = {}
  dummyCars.forEach((car) =>
    numberOfCarsForEachType[car[attribute]]
      ? (numberOfCarsForEachType[car[attribute]] += 1)
      : (numberOfCarsForEachType[car[attribute]] = 1)
  )
  inputSection.length = 0
  uniqueCarTypes.forEach((attr) => {
    inputSection.push({
      label: String(attr),
      count: numberOfCarsForEachType[attr],
    })
  })
}

export const filterCars = (
  filters: { type: string[]; capacity: string[]; maxPrice: number },
  cars: Car[]
) => {
  const { type, capacity, maxPrice } = filters
  return cars.filter((car) => {
    const matchesType = type.length === 0 || type.includes(car.type)
    const matchesCapacity =
      capacity.length === 0 || capacity.includes(car.capacity)
    const matchesPrice = car.price <= maxPrice
    return matchesType && matchesCapacity && matchesPrice
  })
}
