import { Car } from "@/types/FilterSidebar";
import { Cars } from "@/types/Recomendation";
import allNewRush from "../app/images/recomandation/All New Rush.png";
import crv1 from "../app/images/recomandation/CR-V.png";
import crv2 from "../app/images/recomandation/CR-V2.png";
import allNewTerios from "../app/images/recomandation/All New Terios.png";
import mgzxExcite from "../app/images/recomandation/MGZX Excite.png";
import mgzxExclusive from "../app/images/recomandation/MGZX Exclusive.png";
import newMgzs from "../app/images/recomandation/New MGZS.png";
import newMgzs2 from "../app/images/recomandation/New MGZS2.png";

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

export const dummyRecomendationCars: Cars[] = [
  {
    id: 1,
    name: "All New Rush",
    img: allNewRush,
    type: "SUV",
    capacity: "6 People",
    price: 72,
    gasoline: "70L",
    gear: "Manual",
  },
  {
    id: 2,
    name: "CR-V",
    img: crv1,
    type: "SUV",
    capacity: "6 People",
    price: 80,
    gasoline: "80L",
    gear: "Manual",
  },
  {
    id: 3,
    name: "All New Terios",
    img: allNewTerios,
    type: "SUV",
    capacity: "6 People",
    price: 74,
    gasoline: "90L",
    gear: "Manual",
  },
  {
    id: 4,
    name: "CR-V",
    img: crv2,
    type: "SUV",
    capacity: "6 People",
    price: 80,
    gasoline: "80L",
    gear: "Manual",
  },
  {
    id: 5,
    name: "MGZX Exclusive",
    img: mgzxExclusive,
    type: "Hatchback",
    capacity: "4 People",
    price: 76,
    gasoline: "70L",
    gear: "Manual",
  },
  {
    id: 6,
    name: "New MGZS",
    img: newMgzs,
    type: "SUV",
    capacity: "6 People",
    price: 80,
    gasoline: "80L",
    gear: "Manual",
  },
  {
    id: 7,
    name: "MGZX Excite",
    img: mgzxExcite,
    type: "Hatchback",
    capacity: "4 People",
    price: 74,
    gasoline: "90L",
    gear: "Manual",
  },
  {
    id: 8,
    name: "New MGZS",
    img: newMgzs2,
    type: "SUV",
    capacity: "6 People",
    price: 80,
    gasoline: "80L",
    gear: "Manual",
  },
];
