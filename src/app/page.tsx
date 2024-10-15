import "./page.scss";
import RangeSettings from "@/components/RangeSetting";
import Footer from "@/components/Footer";
import "./page.scss";
import Recommendation from "@/components/Recommendation";

export default function Home() {
  return (
    <>
      <div className="home">
        <RangeSettings />
        <br />
        <Recommendation
          id={0}
          name={""}
          image={""}
          carType={""}
          capacity={""}
          price={0}
          storage={""}
          gearType={""}
        />
        <Footer />
      </div>
      <div className="home"></div>
    </>
  );
}
