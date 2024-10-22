import "./page.scss";
import { ImplementThePopularCar } from "@/components/ImplementThePopularCars";

export default function Home() {
  return (
    <>
      <ImplementThePopularCar title="Recent Car" />
      <ImplementThePopularCar title="Recommendation Car" />
    </>
  );
}
