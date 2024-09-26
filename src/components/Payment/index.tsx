"use client"
import "./styles.scss"
import visaIcon from "@/public/payment/Visa.svg"
import paypalIcon from "@/public/payment/PayPal.svg"
import bitcoinIcon from "@/public/payment/Bitcoin.svg"
import React, { useState, ChangeEvent } from "react"
import Image from "next/image"

type FormValues = {
  cardNumber: string
  expirationDate: string
}

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("Credit Card")
  //   const [cardNumber, setCardNumber] = useState<string>("Card Number")
  const [formValues, setFormValues] = useState<FormValues>({
    cardNumber: "",
    expirationDate: "",
  })

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target

    const formatValue = (
      val: string,
      pattern: RegExp,
      limit?: number
    ): string => {
      const digits = val.replace(/\D/g, "").slice(0, limit)
      return digits.match(pattern)?.join(" / ") || digits
    }

    const formattedValue =
      id === "cardNumber"
        ? formatValue(value, /.{1,4}/g)
        : id === "expirationDate"
        ? formatValue(value, /.{1,2}/g, 4)
        : value

    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: formattedValue,
    }))

    console.log("Updated form values:", formattedValue)
  }

  return (
    <div className="payment-container">
      <div className="payment-container__title">
        <h2>Payment Method</h2>
        <div className="payment__subinfo">
          <p>Please enter your payment method</p>
          <p>Step 3 of 4</p>
        </div>
      </div>

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
            <Image priority src={visaIcon} alt="visa" />
          </div>
          {selectedMethod === "Credit Card" && (
            <div className="pymnt__option__details">
              <div className="pymtn__option__field">
                <label htmlFor="card-number">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="Card Number"
                  value={formValues.cardNumber}
                  onChange={handleInputValue}
                  maxLength={25}
                />
              </div>
              <div className="pymtn__option__field">
                <label htmlFor="expiration-date">Expiration Date</label>
                <input
                  type="text"
                  id="expirationDate"
                  placeholder="MM/YY"
                  value={formValues.expirationDate}
                  onChange={handleInputValue}
                  maxLength={7}
                />
              </div>
              <div className="pymtn__option__field">
                <label htmlFor="card-holder">Card Holder</label>
                <input type="text" id="card-holder" placeholder="Card holder" />
              </div>
              <div className="pymtn__option__field">
                <label htmlFor="cvc">CVC</label>
                <input type="text" id="cvc" placeholder="CVC" maxLength={3} />
              </div>
            </div>
          )}
        </div>
      </form>

      <form className="payment__form">
        <div className="payment__option">
          <div className="pymn__option__name">
            <div>
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
            <Image priority src={paypalIcon} alt="paypal" />
          </div>
          {selectedMethod === "PayPal" && (
            <div className="pymnt__option__details">
              <div className="pymtn__option__field">
                <label htmlFor="paypal-email">PayPal Email</label>
                <input
                  type="email"
                  id="paypal-email"
                  placeholder="Enter your PayPal email"
                />
              </div>
            </div>
          )}
        </div>
      </form>

      <form className="payment__form">
        <div className="payment__option">
          <div className="pymn__option__name">
            <div>
              <input
                type="radio"
                id="bitcoin"
                name="payment-method"
                value="bitcoin"
                checked={selectedMethod === "Bitcoin"}
                onChange={() => setSelectedMethod("Bitcoin")}
              />
              <label htmlFor="bitcoin">BitCoin</label>
            </div>
            <Image priority src={bitcoinIcon} alt="visa" />
          </div>
          {selectedMethod === "Bitcoin" && (
            <div className="pymnt__option__details">
              <div className="pymtn__option__field">
                <label htmlFor="bitcoin-email">Bitcoin Email</label>
                <input
                  type="email"
                  id="bitcoin-email"
                  placeholder="Enter your Bitcoin email"
                />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default PaymentMethod
