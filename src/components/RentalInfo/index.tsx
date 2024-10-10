import RentalInputArea from "../RentalInfo/RentalInputArea/"
import "./styles.scss"

import { RentalInfoProps } from "@/types/typeList"

const RentalInfo: React.FC<RentalInfoProps> = ({
  register,
  errors,
  reset,
  control,
}) => {
  return (
    <div className="rntlInfo-container">
      <div className="rntlInfo__title">
        <h2>Rental Info</h2>
        <div className="rntlInfo__subinfo">
          <p>Please enter your rental date</p>
          <p>Step 2 of 4</p>
        </div>
      </div>
      <form className="rntlInfo__form">
        <div className="rntlInfo__option">
          <div className="rntlInfo__option__name">
            <div>
              <input
                type="radio"
                id="pick-Up"
                name="rental-input"
                value="Pick-Up"
              />
              <label htmlFor="Pick-Up">Pick-Up</label>
            </div>
          </div>

          <div className="rntlInfo__option__details">
            <RentalInputArea
              title="pickUp"
              register={register}
              registerField="pickUp"
              control={control}
              errors={errors}
            />
          </div>
        </div>
        <div className="rntlInfo__option">
          <div className="rntlInfo__option__name">
            <div>
              <input
                type="radio"
                id="drop-off"
                name="rental-input"
                value="Drop-Off"
              />
              <label htmlFor="Drop-Off">Drop-Off</label>
            </div>
          </div>

          <div className="rntlInfo__option__details">
            <RentalInputArea
              title="dropOff"
              register={register}
              registerField="dropOff"
              control={control}
              errors={errors}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default RentalInfo
