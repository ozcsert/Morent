import React from 'react'
import './styles.scss'



const BillingInfo = () => {
  return (
    <div>
         <div className="billing-container">
      <div className="billing-container-title">
        <h2>Billing Info</h2>
        <div className="billing--subinfo">
          <p>Please enter your billing info</p>
          <p>Step 1 of 4</p>
        </div>
      </div>
      <form  className="billing--form">
          <div className="billing-input">
            <label htmlFor="name">Name</label>
            <input id='name' type="text" placeholder="Name" />
          </div>
          <div className="billing-input">
            <label htmlFor="phone">Phone Number</label>
            <input id='phone' type="text" placeholder="Phone Number" />
          </div>
          <div className="billing-input">
            <label htmlFor="address">Address</label>
            <input id='address' type="text" placeholder="Address" />
          </div>
          <div className="billing-input">
            <label htmlFor="town">Town/City</label>
            <input id='town' type="text" placeholder="Town/City" />
          </div>
      </form>
    </div>
    </div>
  )
}

export default BillingInfo