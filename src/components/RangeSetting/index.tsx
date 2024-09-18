import "./style.scss";
import RaceArea from "./RaceArea";
import SwapButton from "../../app/images/swap-button.svg";
import Image from "next/image";

const RangeSettings = () => {
  return (
    <>
      <div className="rs-container">
        <div className="rs-pick-up">
          <RaceArea title="Pick - Up" dateType="start" />
        </div>
        <div className="rs-switch-btn">
          <Image src={SwapButton} alt="" width={24} height={24} />
        </div>
        <div className="rs-drop-off">
          <RaceArea title="Dorp - Off" dateType="finish" />
        </div>
      </div>
    </>
  );
};

export default RangeSettings;
