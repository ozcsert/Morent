'use client';
import React, { FC, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import './style.scss';
import 'react-datepicker/dist/react-datepicker.css';
import CustomDateArea from '../CustomDateArea';
import { RaceAreaProps } from '@/types/RaceArea';
import { turkishCities, timeSlots } from '@/constants';

const RaceArea: FC<RaceAreaProps> = ({ data, setData }) => {
  const radioRef = useRef<HTMLInputElement>(null);
  const [radioValue, setRadioValue] = useState<boolean>(false);

  const radioToggleBtn = () => {
    radioRef.current?.checked ? setRadioValue(true) : setRadioValue(false);
  };

  return (
    <>
      <div className="rs-head-container">
        <div className="rs-head">
          <div
            className={`rs-radio-wrapper ${
              radioValue ? 'rs-radio-wrapper-selected' : ''
            }`}
          >
            <input
              id="radioBtn"
              type="radio"
              className="rs-head-radio-btn"
              ref={radioRef}
              onChange={radioToggleBtn}
            />
          </div>
          <label htmlFor="radioBtn" className="rs-head-text">
            {data.title}
          </label>
        </div>
        <div className="rs-options">
          {/* Location Option */}
          <div className="rs-option location">
            <h2 className="rs-option-head">Location</h2>
            <div className="rs-option-select-group">
              <select
                className={`rs-option-select ${
                  data.locationValue === '' ? 'rs-option-select-default' : ''
                }`}
                value={data.locationValue.toLocaleLowerCase()}
                onChange={e =>
                  setData(prevData => ({
                    ...prevData,
                    locationValue: e.target.value,
                  }))
                }
              >
                <option key={turkishCities.length + 1} value="">
                  Select your city
                </option>
                {turkishCities.map((city, index) => (
                  <option key={index} value={city.toLocaleLowerCase()}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="rs-option-line"></div>
          {/* Date Option */}
          <div className="rs-option date">
            <h2 className="rs-option-head">Date</h2>
            <div className="rs-option-select-group">
              <DatePicker
                selected={
                  data.title === 'Pick - Up'
                    ? data.selectedStartDate
                    : data.selectedFinishDate
                }
                onChange={(date: Date | null) => {
                  if (data.title === 'Pick - Up') {
                    setData(prevData => ({
                      ...prevData,
                      selectedStartDate: date,
                    }));
                  } else {
                    setData(prevData => ({
                      ...prevData,
                      selectedFinishDate: date,
                    }));
                  }
                }}
                customInput={
                  <CustomDateArea className="rs-option-select-date" />
                }
                dateFormat="dd.MM.yyyy"
              />
            </div>
          </div>
          <div className="rs-option-line"></div>
          {/* Time Option */}
          <div className="rs-option time">
            <h2 className="rs-option-head">Time</h2>
            <div className="rs-option-select-group">
              <select
                className={`rs-option-select ${
                  data.timeValue === '' ? 'rs-option-select-default' : ''
                }`}
                value={data.timeValue}
                onChange={e =>
                  setData(prevData => ({
                    ...prevData,
                    timeValue: e.target.value,
                  }))
                }
              >
                <option value="">Select your time</option>
                {timeSlots.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RaceArea;
