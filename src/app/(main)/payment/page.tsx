"use client"
import "./styles.scss"
import PaymentMethod from "@/components/Payment"
import { useForm, SubmitHandler } from "react-hook-form"
import Confirmation from "@/components/Confirmation"
import { PaymentFormValues } from "@/types/typeList"
import RentalInfo from "@/components/RentalInfo"

const Payment: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
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
      pickUp: {
        location: "",
        date: undefined,
        time: "",
      },
      dropOff: {
        location: "",
        date: undefined,
        time: "",
      },
    },
  })

  const onSubmit: SubmitHandler<PaymentFormValues> = (
    data: PaymentFormValues
  ) => {
    console.log("Form Data Submitted:", data)
  }

  return (
    <div>
      <RentalInfo
        control={control}
        register={register}
        errors={errors}
        reset={reset}
      />
      <PaymentMethod register={register} errors={errors} reset={reset} />
      <Confirmation handleSubmit={handleSubmit} onSubmit={onSubmit} />
    </div>
  )
}

export default Payment
