"use client"
import "./styles.scss"
import PaymentMethod from "@/components/Payment"
import { useForm, SubmitHandler } from "react-hook-form"
import Confirmation from "@/components/Confirmation"
import { PaymentFormValues } from "@/types/typeList"

const Payment: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PaymentFormValues>({
    mode: "onChange",
    defaultValues: {
      cardHolder: "",
      cardNumber: "",
      cvc: "",
      paypalEmail: "",
      bitcoinEmail: "",
    },
  })

  const onSubmit: SubmitHandler<PaymentFormValues> = (
    data: PaymentFormValues
  ) => {
    console.log("Form Data Submitted:", data)
  }

  return (
    <div>
      <PaymentMethod register={register} errors={errors} reset={reset} />
      <Confirmation handleSubmit={handleSubmit} onSubmit={onSubmit} />
    </div>
  )
}

export default Payment
