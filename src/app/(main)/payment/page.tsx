"use client"

import React from "react"
import "./styles.scss"
import PaymentMethod from "@/components/Payment"
import { useForm, FormProvider } from "react-hook-form"
import Confirmation from "@/components/Confirmation"
const Payment = () => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <PaymentMethod />
      <Confirmation />
    </FormProvider>
  )
}

export default Payment
