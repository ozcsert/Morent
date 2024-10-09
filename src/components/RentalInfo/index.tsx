import RentalInputArea from "../RentalInfo/RentalInputArea/"
import "./styles.scss"
import { useState } from "react"

type Props = {}

const RentalInfo = (props: Props) => {
  const [leftRaceArea, setLeftRaceArea] = useState({
    title: "Pick - Up",
    locationValue: "",
    selectedStartDate: null,
    selectedFinishDate: null,
    timeValue: "",
  })

  const [rightRaceArea, setRightRaceArea] = useState({
    title: "Drop - Off",
    locationValue: "",
    selectedStartDate: null,
    selectedFinishDate: null,
    timeValue: "",
  })

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
            <RentalInputArea data={leftRaceArea} setData={setLeftRaceArea} />
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
            <RentalInputArea data={leftRaceArea} setData={setLeftRaceArea} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default RentalInfo
