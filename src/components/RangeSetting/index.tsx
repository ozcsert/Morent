"use client";
import "./style.scss";
import RaceArea from "./RaceArea";
import SwapButton from "../../app/images/swap-button.svg";
import Image from "next/image";
import { useState } from "react";

const RangeSettings = () => {
  const [isSwitched, setIsSwitched] = useState<boolean>(false);

  const handleSwitchRangeArea = () => {
    setIsSwitched((prev) => !prev);
  };

  return (
    <>
      <div className="rs-container">
        <div className="rs-pick-up">
          <RaceArea
            title={`${!isSwitched ? "Pick - Up" : "Drop - Off"}`}
            dateType={`${!isSwitched ? "start" : "finish"}`}
          />
        </div>
        <div className="rs-switch-btn">
          <Image
            src={SwapButton}
            alt=""
            width={24}
            height={24}
            onClick={handleSwitchRangeArea}
          />
        </div>
        <div className="rs-drop-off">
          <RaceArea
            title={`${!isSwitched ? "Drop - Off" : "Pick - Up"}`}
            dateType={`${!isSwitched ? "finish" : "start"}`}
          />
        </div>
      </div>
    </>
  );
};

export default RangeSettings;
