"use client"
import React, { FC, useRef, useState } from "react"
import DatePicker from "react-datepicker"
import "./style.scss"
import "react-datepicker/dist/react-datepicker.css"
import CustomDateArea from "@/components/RangeSetting/CustomDateArea"
import { RaceAreaProps } from "@/types/RaceArea"
import DropdownArrow from "@/app/images/bottom-arrow.svg"
import { turkishCities, timeSlots } from "@/constants"

const RentalInputArea: FC<RaceAreaProps> = ({ data, setData }) => {
  const radioRef = useRef<HTMLInputElement>(null)
  const [radioValue, setRadioValue] = useState<boolean>(false)

  const radioToggleBtn = () => {
    radioRef.current?.checked ? setRadioValue(true) : setRadioValue(false)
  }

  //   <div className="pymnt__option__details">
  //   <div className="pymtn__option__field">
  //   <label htmlFor="card-number">Card Number</label>
  //   <input
  //     type="text"
  //     id="cardNumber"
  //     placeholder="Card Number"
  //     {...register("cardNumber", validationRules.cardNumber)}
  //     maxLength={16}
  //   />

  // </div>
  return (
    <>
      {/* <div className="rs-head-container">
        <div className="rs-options"> */}
      {/* Location Option */}

      <div className="rental__option">
        <h2 className="rental__option-head">Location</h2>
        <div className="rental-option__select-group">
          <select
            className={`rental-option__select ${
              data.locationValue === "" ? "rental-option__select-default" : ""
            }`}
            value={data.locationValue.toLocaleLowerCase()}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                locationValue: e.target.value,
              }))
            }
          >
            <option value="">Select your city</option>
            {turkishCities.map((city, index) => (
              <>
                <option key={index} value={city.toLocaleLowerCase()}>
                  {city}
                </option>
              </>
            ))}
          </select>
          <DropdownArrow width={12} height={12} style={{ color: "#90A3BF" }} />
        </div>
      </div>

      {/* Date Option */}
      <div className="rental__option">
        <h2 className="rental__option-head">Date</h2>
        <div className="rental-option__select-group">
          <DatePicker
            selected={
              data.title === "Pick - Up"
                ? data.selectedStartDate
                : data.selectedFinishDate
            }
            onChange={(date: Date | null) => {
              if (data.title === "Pick - Up") {
                setData((prevData) => ({
                  ...prevData,
                  selectedStartDate: date,
                }))
              } else {
                setData((prevData) => ({
                  ...prevData,
                  selectedFinishDate: date,
                }))
              }
            }}
            customInput={
              <CustomDateArea className="rental-option__select-date" />
            }
            dateFormat="dd.MM.yyyy"
          />
        </div>
      </div>

      {/* Time Option */}
      <div className="rental__option rental__option-time">
        <h2 className="rental__option-head">Time</h2>
        <div className="rental-option__select-group">
          <select
            className={`rental-option__select ${
              data.timeValue === "" ? "rental-option__select-default" : ""
            }`}
            value={data.timeValue}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                timeValue: e.target.value,
              }))
            }
          >
            <option value="">Select your time</option>
            {timeSlots.map((time, index) => (
              <>
                <option key={index} value={time}>
                  {time}
                </option>
              </>
            ))}
          </select>
          <DropdownArrow width={12} height={12} style={{ color: "#90A3BF" }} />
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  )
}

export default RentalInputArea
