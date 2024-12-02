'use client';
import React, { FC } from 'react';
import DatePicker from 'react-datepicker';
import './style.scss';
import 'react-datepicker/dist/react-datepicker.css';
import DropdownArrow from '@/app/images/bottom-arrow.svg';
import { turkishCities, timeSlots } from '@/constants';
import { validationRules } from '@/utils/payment';
import { Controller } from 'react-hook-form';
import { RentalInputAreaProps } from '@/types/typeList';
import PaymentError from '@/components/Payment/PaymentError';

const RentalInputArea: FC<RentalInputAreaProps> = ({
  register,
  registerField,
  control,
  errors,
}) => {
  // const radioRef = useRef<HTMLInputElement>(null)
  // const [radioValue, setRadioValue] = useState<boolean>(false)

  // const radioToggleBtn = () => {
  //   radioRef.current?.checked ? setRadioValue(true) : setRadioValue(false)
  // }

  return (
    <>
      <div className="rental__option">
        <h2 className="rental__option-head">Location</h2>
        <div className="rental-option__select-group">
          <select
            className="rental-option__select"
            {...register(
              `${registerField}.location`,
              validationRules[registerField]?.location
            )}
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
          <PaymentError error={errors[registerField]?.location} />
          <DropdownArrow width={12} height={12} style={{ color: '#90A3BF' }} />
        </div>
      </div>

      {/* Date Option */}
      <div className="rental__option">
        <h2 className="rental__option-head">Date</h2>
        <div className="rental-option__select-group">
          <Controller
            control={control}
            name={`${registerField}.date`}
            rules={validationRules[registerField]?.date}
            render={({ field }) => (
              <DatePicker
                portalId="root-portal"
                selected={field.value}
                onChange={date => field.onChange(date)}
                dateFormat="dd.MM.yyyy"
                placeholderText="Select a date"
              />
            )}
          />
          <PaymentError error={errors[registerField]?.date} />
          <DropdownArrow width={12} height={12} style={{ color: '#90A3BF' }} />
        </div>
      </div>

      {/* Time Option */}
      <div className="rental__option rental__option-time">
        <h2 className="rental__option-head">Time</h2>
        <div className="rental-option__select-group">
          <select
            {...register(
              `${registerField}.time`,
              validationRules[registerField]?.time
            )}
            className="rental-option__select"
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
          <DropdownArrow width={12} height={12} style={{ color: '#90A3BF' }} />
          <PaymentError error={errors[registerField]?.time} />
        </div>
      </div>
    </>
  );
};

export default RentalInputArea;
