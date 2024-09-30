"use client"
import "./styles.scss"
import React, { useState, ChangeEvent } from "react"
import Image from "next/image"
import { useFormContext } from "react-hook-form"
import visaIcon from "@/public/payment/Visa.svg"
import paypalIcon from "@/public/payment/PayPal.svg"
import bitcoinIcon from "@/public/payment/Bitcoin.svg"
import { PaymentFormValues } from "@/types/typeList"
import { handleInputValue } from "@/utils/payment"
import PaymentError from "../PaymentError"

const PaymentMethod: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PaymentFormValues>()

  const [selectedMethod, setSelectedMethod] = useState<string>("Credit Card")

  const [formattedValues, setFormattedValues] = useState<PaymentFormValues>({
    cardNumber: "",
    expirationDate: "",
    cardHolder: "",
    cvc: "",
    paypalEmail: "",
    bitcoinEmail: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputValue(e, setFormattedValues)
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
                  {...register("cardNumber", {
                    required: "Card number is required",
                    pattern: {
                      value: /^\d{4} \/ \d{4} \/ \d{4} \/ \d{4}$/,
                      message: "Card number must be 16 digits",
                    },
                  })}
                  value={formattedValues.cardNumber}
                  onChange={handleChange}
                />
                <PaymentError error={errors.cardNumber} />
              </div>
              <div className="pymtn__option__field">
                <label htmlFor="expiration-date">Expiration Date</label>
                <input
                  type="text"
                  id="expirationDate"
                  placeholder="MM/YY"
                  value={formattedValues.expirationDate}
                  {...register("expirationDate", {
                    required: "Exp. date is required",
                    pattern: {
                      value: /^\d{2} \/ \d{2}$/,
                      message: "Exp. date must be 4 digits",
                    },
                  })}
                  onChange={handleChange}
                  maxLength={7}
                />
                <PaymentError error={errors.expirationDate} />
              </div>
              <div className="pymtn__option__field">
                <label htmlFor="card-holder">Card Holder</label>
                <input
                  value={formattedValues.cardHolder}
                  type="text"
                  id="cardHolder"
                  placeholder="Card holder"
                  {...register("cardHolder", {
                    required: "Card Holder is required",
                    pattern: {
                      value: /.{1,2}/,
                      message: "Please Enter Card Holder",
                    },
                  })}
                  onChange={handleChange}
                />
                <PaymentError error={errors.cardHolder} />
              </div>
              <div className="pymtn__option__field">
                <label htmlFor="cvc">CVC</label>
                <input
                  value={formattedValues.cvc}
                  type="text"
                  id="cvc"
                  placeholder="CVC"
                  {...register("cvc", {
                    required: "cvc is required",
                    pattern: {
                      value: /^\d{3}$/,
                      message: "3 numbers in the back of your card",
                    },
                  })}
                  maxLength={3}
                  onChange={handleChange}
                />

                <PaymentError error={errors.cvc} />
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
                  {...register("paypalEmail", {
                    required: "PayPal Email date is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Incorrect format of email",
                    },
                  })}
                />
                <PaymentError error={errors.paypalEmail} />
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
                  {...register("bitcoinEmail", {
                    required: "Bitcoin Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Incorrect format of email",
                    },
                  })}
                />
                <PaymentError error={errors.paypalEmail} />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default PaymentMethod
