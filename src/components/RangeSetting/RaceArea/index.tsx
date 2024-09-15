"use client";
import { FC, useRef, useState } from "react";
import Image from "next/image";
import DropdownArrow from "@/app/images/bottom-arrow.svg";
import DatePicker from "react-datepicker";
import "./style.scss";
import "react-datepicker/dist/react-datepicker.css";

type RaceAreaProps = {
  title: string;
  dateType?: string;
};

const turkishCities: string[] = [
  "Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Aksaray",
  "Amasya",
  "Ankara",
  "Antalya",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bartın",
  "Batman",
  "Bayburt",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Düzce",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkari",
  "Hatay",
  "Iğdır",
  "Isparta",
  "İstanbul",
  "İzmir",
  "Kahramanmaraş",
  "Karabük",
  "Karaman",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kırıkkale",
  "Kırklareli",
  "Kırşehir",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Mardin",
  "Mersin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Osmaniye",
  "Rize",
  "Sakarya",
  "Samsun",
  "Siirt",
  "Sinop",
  "Sivas",
  "Şanlıurfa",
  "Şırnak",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Uşak",
  "Van",
  "Yalova",
  "Yozgat",
  "Zonguldak",
];

const timeSlots: string[] = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
];

const RaceArea: FC<RaceAreaProps> = ({ title, dateType }) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedFinishDate, setSelectedFinishDate] = useState<Date | null>(
    null
  );

  const radioRef = useRef<HTMLInputElement>(null);
  const [radioValue, setRadioValue] = useState<boolean>(false);

  const radioToggleBtn = () => {
    radioRef.current?.checked ? setRadioValue(true) : setRadioValue(false);
  };

  const [locationValue, setLocationValue] = useState<string>("");
  const [timeValue, setTimeValue] = useState<string>("");

  return (
    <>
      <div className="rs-head">
        <div
          className={`rs-radio-wrapper ${
            radioValue ? "rs-radio-wrapper-selected" : ""
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
          {title}
        </label>
      </div>
      <div className="rs-options">
        {/* Location Option */}
        <div className="rs-option location">
          <h2 className="rs-option-head">Location</h2>
          <div className="rs-option-select-group">
            <select
              className={`rs-option-select ${
                locationValue === "" ? "rs-option-select-default" : ""
              }`}
              onChange={(e) => setLocationValue(e.target.value)}
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
            <Image src={DropdownArrow} alt="" width={14} height={14} />
          </div>
        </div>
        <div className="rs-option-line"></div>
        {/* Date Option */}
        <div className="rs-option date">
          <h2 className="rs-option-head">Date</h2>
          <div className="rs-option-select-group">
            <DatePicker
              selected={
                dateType === "start" ? selectedStartDate : selectedFinishDate
              }
              onChange={(date: Date | null) =>
                dateType === "start"
                  ? setSelectedStartDate(date)
                  : setSelectedFinishDate(date)
              }
              className="rs-option-select-date"
              placeholderText="Select your date"
              dateFormat="dd/MM/yyyy"
            />
            <Image src={DropdownArrow} alt="" width={14} height={14} />
          </div>
        </div>
        <div className="rs-option-line"></div>
        {/* Time Option */}
        <div className="rs-option time">
          <h2 className="rs-option-head">Time</h2>
          <div className="rs-option-select-group">
            <select
              className={`rs-option-select ${
                timeValue === "" ? "rs-option-select-default" : ""
              }`}
              onChange={(e) => setTimeValue(e.target.value)}
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
            <Image src={DropdownArrow} alt="" width={14} height={14} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RaceArea;
