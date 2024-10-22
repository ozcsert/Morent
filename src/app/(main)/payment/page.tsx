"use client";
import "./styles.scss";
import PaymentMethod from "@/components/Payment";
import { useForm, SubmitHandler } from "react-hook-form";
import Confirmation from "@/components/Confirmation";
import { PaymentFormValues } from "@/types/typeList";
import RentalInfo from "@/components/RentalInfo";
import RentalSummary from "@/components/RentalSummary";
import AllNewRush from "../../images/recommendation/All New Rush.png";

const Payment: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
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
  });

  const onSubmit: SubmitHandler<PaymentFormValues> = (
    data: PaymentFormValues
  ) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <div className="billing-container">
      <div className="billing-payment">
        <RentalInfo control={control} register={register} errors={errors} />
        <PaymentMethod
          register={register}
          errors={errors}
          setValue={setValue}
        />
        <Confirmation handleSubmit={handleSubmit} onSubmit={onSubmit} />
      </div>
      <div className="rental-summary-container">
        <RentalSummary
          carName="Audi A8"
          imageUrl={AllNewRush}
          rating={5}
          reviewCount={10}
          subtotal={1000}
        />
      </div>
    </div>
  );
};

export default Payment;
