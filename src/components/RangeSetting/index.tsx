"use client";
import "./style.scss";
import RaceArea from "./RaceArea";
import SwapButton from "../../app/images/swap-button.svg";
import Image from "next/image";
import { useState } from "react";

const RangeSettings = () => {
  const [leftRaceArea, setLeftRaceArea] = useState({
    title: "Pick - Up",
    locationValue: "",
    selectedStartDate: null,
    selectedFinishDate: null,
    timeValue: "",
  });

  const [rightRaceArea, setRightRaceArea] = useState({
    title: "Drop - Off",
    locationValue: "",
    selectedStartDate: null,
    selectedFinishDate: null,
    timeValue: "",
  });

  const handleSwitchRangeArea = () => {
    setLeftRaceArea(rightRaceArea);
    setRightRaceArea(leftRaceArea);
  };

  return (
    <>
      <div className="rs-container">
        <div className="rs-pick-up">
          <RaceArea data={leftRaceArea} setData={setLeftRaceArea} />
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
          <RaceArea data={rightRaceArea} setData={setRightRaceArea} />
        </div>
      </div>
    </>
  );
};

export default RangeSettings;
