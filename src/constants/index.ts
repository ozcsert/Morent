import { Car } from "../../src/types/FilterSidebar";
import koenigsegg from "../assets/carKoenigsegg.png";
import nissangt from "../assets/carNissanGT-R.png";
import rollsRoyce from "../assets/carRolls-Royce.png";
import allNewRush from "../assets/allNewRush.png";
import crV from "../assets/cr-v.png";
import allNewTerios from "../assets/allNewTerios.png";
import mgZX from "../assets/mgZxExclusice.png";
import mgZs from "../assets/mgZxExcite.png";



export const dummyCars: Car[] = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    capacity: "90L",
    users: "2 People",
    price: "$99.00",
    img: koenigsegg.src,
  },
  {
    id: 2,
    name: "Nissan GT - R",
    type: "Sport",
    capacity: "80L",
    users: "2 People",
    price: "$80.00",
    img: nissangt.src,
  },
  {
    id: 3,
    name: "Rolls - Royce",
    type: "Sedan",
    capacity: "70L",
    users: "4 People",
    price: "$96.00",
    img: rollsRoyce.src,
  },
  {
    id: 4,
    name: "Nissan GT - R",
    type: "Sport",
    capacity: "80L",
    users: "6 People",
    price: "$80.00",
    img: nissangt.src,
  },
  {
    id: 5,
    name: "All New Rush",
    type: "SUV",
    capacity: "70L",
    users: "6 People",
    price: "$72.00",
    img: allNewRush.src,
  },
  {
    id: 6,
    name: "CR - V",
    type: "SUV",
    capacity: "80L",
    users: "6 People",
    price: "$80.00",
    img: crV.src,
  },
  {
    id: 7,
    name: "All New Terios",
    type: "SUV",
    capacity: "90L",
    users: "6 People",
    price: "$74.00",
    img: allNewTerios.src,
  },
  {
    id: 8,
    name: "CR - V",
    type: "SUV",
    capacity: "80L",
    users: "6 People",
    price: "$80.00",
    img: crV.src,
  },
  {
    id: 9,
    name: "MG ZX Exclusice",
    type: "Hatchback",
    capacity: "70L",
    users: "4 People",
    price: "$76.00",
    img: mgZX.src,
  },
  {
    id: 10,
    name: "New MG ZS",
    type: "SUV",
    capacity: "80L",
    users: "6 People",
    price: "$80.00",
    img: mgZs.src,
  },
  {
    id: 11,
    name: "MG ZX Excite",
    type: "Hatchback",
    capacity: "90L",
    users: "4 People",
    price: "$74.00",
    img: mgZX.src,
  },
  {
    id: 12,
    name: "New MG ZS",
    type: "SUV",
    capacity: "80L",
    users: "6 People",
    price: "$80.00",
    img: mgZs.src,
  }
];
