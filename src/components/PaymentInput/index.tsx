"use Client"
import React from "react"
import { useState } from "react"
import Image from "next/image"

type PaymentInputProps = {
  paymentIcon: string
}

const PaymentInput = ({ paymentIcon }: PaymentInputProps) => {
  const [selectedMethod, setSelectedMethod] = useState("Credit Card")
  return (
    <>
      <form className="payment__form">
        <div className="payment__option">
          <div className="pymn__option__name">
            <div>
              <input
                type="radio"
                id="credit-card"
                name="payment-method"
                value="Credit Card"
                checked={selectedMethod === "Credit Card"}
                onChange={() => setSelectedMethod("Credit Card")}
              />
              <label htmlFor="credit-card">Credit Card</label>
            </div>
            <Image priority src={paymentIcon} alt="visa" />
          </div>
          {selectedMethod === "Credit Card" && (
            <div className="credit-card-details">
              <div className="card-field">
                <label htmlFor="card-number">Card Number</label>
                <input type="text" id="card-number" placeholder="Card number" />
              </div>
              <div className="card-field">
                <label htmlFor="expiration-date">Expiration Date</label>
                <input type="text" id="expiration-date" placeholder="MM/YY" />
              </div>
              <div className="card-field">
                <label htmlFor="card-holder">Card Holder</label>
                <input type="text" id="card-holder" placeholder="Card holder" />
              </div>
              <div className="card-field">
                <label htmlFor="cvc">CVC</label>
                <input type="text" id="cvc" placeholder="CVC" />
              </div>
            </div>
          )}
        </div>

        {/* <div className="payment__option">
          <input
            type="radio"
            id="paypal"
            name="payment-method"
            value="PayPal"
            checked={selectedMethod === "PayPal"}
            onChange={() => setSelectedMethod("PayPal")}
          />
          <label htmlFor="paypal">PayPal</label>
        </div>

        <div className="payment__option">
          <input
            type="radio"
            id="bitcoin"
            name="payment-method"
            value="Bitcoin"
            checked={selectedMethod === "Bitcoin"}
            onChange={() => setSelectedMethod("Bitcoin")}
          />
          <label htmlFor="bitcoin">Bitcoin</label>
        </div> */}
      </form>
    </>
  )
}

export default PaymentInput
