'use client';
import React from 'react';
import './style.scss';
import RaceArea from './RaceArea';
import SwapButton from '@/app/images/swap-button.svg';
import { useState } from 'react';
import { RaceAreaData } from '@/types/RaceArea';

const RangeSettings = () => {
  const [leftRaceArea, setLeftRaceArea] = useState<RaceAreaData>({
    title: 'Pick - Up',
    locationValue: '',
    selectedStartDate: null,
    selectedFinishDate: null,
    timeValue: '',
  });

  const [rightRaceArea, setRightRaceArea] = useState<RaceAreaData>({
    title: 'Drop - Off',
    locationValue: '',
    selectedStartDate: null,
    selectedFinishDate: null,
    timeValue: '',
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
        <div className="rs-switch-btn" onClick={handleSwitchRangeArea}>
          <SwapButton width={24} height={24} />
        </div>
        <div className="rs-drop-off">
          <RaceArea data={rightRaceArea} setData={setRightRaceArea} />
        </div>
      </div>
    </>
  );
};

export default RangeSettings;
