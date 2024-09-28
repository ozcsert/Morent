import { Car } from "@/types/FilterSidebar";
import { ReviewProps } from "@/types/reviews";
import alexStan from "/src/public/images/alex_stan.png";
import skylarDias from "/src/public/images/skylar_dias.png";
import rFera from "/src/public/images/r_fera.png";
import andrew from "/src/public/images/andrew.png";
import pixabay from "/src/public/images/pixabay.png";

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
    img: alexStan,
    name: "Alex Stanton",
    title: "CEO at Bukalapak",
    review:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    rating: 4,
    date: "2022-07-21",
  },
  {
    id: 2,
    img: skylarDias,
    name: "Skylar Dias",
    title: "CEO at Amazon",
    review:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    rating: 4,
    date: "2022-07-20",
  },
  {
    id: 3,
    img: rFera,
    name: "Ray Fera",
    title: "CEO at Somewhere",
    review:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    rating: 5,
    date: "2022-07-19",
  },
  {
    id: 4,
    img: andrew,
    name: "Andrew Dias",
    title: "CEO at Somewhere",
    review:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    rating: 3,
    date: "2022-07-22",
  },
  {
    id: 5,
    img: pixabay,
    name: "Pixabay",
    title: "CEO at pexels",
    review:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    rating: 5,
    date: "2022-07-22",
  },
];
