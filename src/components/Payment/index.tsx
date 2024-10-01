"use client"
import "./styles.scss"
import { useState } from "react"
import VisaIcon from "@/app/images/payment/Visa.svg"
import PaypalIcon from "@/app/images/payment/PayPal.svg"
import BitcoinIcon from "@/app/images/payment/Bitcoin.svg"
import { PaymentMethodProps } from "@/types/typeList"
import { validationRules } from "@/utils/payment"
import PaymentError from "../PaymentError"

// mastercard example card number 5425233430109903

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  register,
  errors,
  reset,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("Credit Card")

  const changePayMethod = async (payMethod: string) => {
    await setSelectedMethod(payMethod)
    reset()
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
                onChange={() => changePayMethod("Credit Card")}
              />
              <label htmlFor="credit-card">Credit Card</label>
            </div>
            <VisaIcon width={92} height={20} />
          </div>
          {selectedMethod === "Credit Card" && (
            <div className="pymnt__option__details">
              <div className="pymtn__option__field">
                <label htmlFor="card-number">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="Card Number"
                  {...register("cardNumber", validationRules.cardNumber)}
                  maxLength={16}
                />
                <PaymentError error={errors.cardNumber} />
              </div>
              <div className="pymtn__option__field">
                <label htmlFor="expiration-date">Expiration Date</label>
                <input
                  type="text"
                  id="expirationDate"
                  placeholder="MM/YY"
                  {...register(
                    "expirationDate",
                    validationRules.expirationDate
                  )}
                  maxLength={4}
                />
                <PaymentError error={errors.expirationDate} />
              </div>
              <div className="pymtn__option__field">
                <label htmlFor="card-holder">Card Holder</label>
                <input
                  type="text"
                  id="cardHolder"
                  placeholder="Card holder"
                  {...register("cardHolder", validationRules.cardHolder)}
                />
                <PaymentError error={errors.cardHolder} />
              </div>
              <div className="pymtn__option__field">
                <label htmlFor="cvc">CVC</label>
                <input
                  type="text"
                  id="cvc"
                  placeholder="CVC"
                  {...register("cvc", validationRules.cvc)}
                  maxLength={3}
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
                onChange={() => changePayMethod("PayPal")}
              />
              <label htmlFor="paypal">PayPal</label>
            </div>
            <PaypalIcon width={92} height={20} />
          </div>
          {selectedMethod === "PayPal" && (
            <div className="pymnt__option__details">
              <div className="pymtn__option__field">
                <label htmlFor="paypal-email">PayPal Email</label>
                <input
                  type="email"
                  id="paypal-email"
                  placeholder="Enter your PayPal email"
                  {...register("paypalEmail", validationRules.paypalEmail)}
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
                onChange={() => changePayMethod("Bitcoin")}
              />
              <label htmlFor="bitcoin">BitCoin</label>
            </div>
            <BitcoinIcon width={92} height={20} />
          </div>
          {selectedMethod === "Bitcoin" && (
            <div className="pymnt__option__details">
              <div className="pymtn__option__field">
                <label htmlFor="bitcoin-email">Bitcoin Email</label>
                <input
                  type="email"
                  id="bitcoin-email"
                  placeholder="Enter your Bitcoin email"
                  {...register("bitcoinEmail", validationRules.bitcoinEmail)}
                />
                <PaymentError error={errors.bitcoinEmail} />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default PaymentMethod
