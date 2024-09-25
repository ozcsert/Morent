import { Car } from "@/types/FilterSidebar";
import { ReviewProps } from "@/types/reviews";

export const dummyCars: Car[] = [
  { id: 1, name: "Dogan", type: "Sport", capacity: "10 people", price: 1 },
  { id: 2, name: "Car 2", type: "SUV", capacity: "2 Person", price: 75 },
  { id: 3, name: "Sahin", type: "Sport", capacity: "2 Person", price: 75 },
  { id: 4, name: "Murat", type: "Sport", capacity: "4 Person", price: 90 },
  { id: 5, name: "Car 5", type: "SUV", capacity: "4 Person", price: 90 },
  { id: 6, name: "Car 6", type: "SUV", capacity: "4 Person", price: 90 },
  { id: 7, name: "Tempra", type: "Sedan", capacity: "6 Person", price: 85 },
  { id: 8, name: "Car 8", type: "SUV", capacity: "8 or More", price: 60 },
  { id: 9, name: "Car 9", type: "SUV", capacity: "8 or More", price: 60 },
  {
    id: 10,
    name: "Car 10",
    type: "random type",
    capacity: "8 or More",
    price: 60,
  },
  {
    id: 13,
    name: "Car 11",
    type: "random type2",
    capacity: "10 or More",
    price: 60,
  },
  { id: 11, name: "Car 12", type: "Sport", capacity: "4 Person", price: 90 },
];

export const reviews: ReviewProps[] = [
  {
    id: 1,
    img: "/src/images/alex_stan.png",
    name: "Alex Stanton",
    title: "CEO at Bukalapak",
    review:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    rating: 4,
    date: "2022-01-21",
  },
  {
    id: 2,
    img: "/src/images/skylar_dias.png",
    name: "Skylar Dias",
    title: "CEO at Amazon",
    review:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    rating: 4,
    date: "2022-01-20",
  },
];
