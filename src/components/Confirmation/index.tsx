import { useFormContext } from "react-hook-form"
import React from "react"
import { PaymentFormValues } from "@/types/typeList"

const Confirmation = () => {
  const { handleSubmit } = useFormContext<PaymentFormValues>()

  const onSubmit = (formValues: PaymentFormValues) => {
    const cleanFormattedPaymentFormValues: PaymentFormValues = {
      ...formValues,
      cardNumber: formValues.cardNumber.replace(/\s+/g, "").replace(/\//g, ""),
      expirationDate: formValues.expirationDate
        .replace(/\s+/g, "")
        .replace(/\//g, ""),
    }

    console.log("Form Submitted: ", cleanFormattedPaymentFormValues)
  }

  return (
    <div>
      <button onClick={handleSubmit(onSubmit)}>Confirm Payment</button>
    </div>
  )
}

export default Confirmation
