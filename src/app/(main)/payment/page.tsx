'use client';
import './styles.scss';
import PaymentMethod from '@/components/Payment';
import { useForm, SubmitHandler } from 'react-hook-form';
import Confirmation from '@/components/Confirmation';
import { PaymentFormValues } from '@/types/typeList';
import RentalInfo from '@/components/RentalInfo';
import BillingInfo from '@/components/BillingInfo';
import { useState } from 'react';

export interface BillingForm {
  name: string;
  phone: string;
  address: string;
  town: string;
}

const Payment: React.FC = () => {
  const [billingForm, setBillingForm] = useState<BillingForm>({
    name: '',
    phone: '',
    address: '',
    town: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBillingForm({ ...billingForm, [name]: value });
  };

  const handleSubmitBillingForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(billingForm);
  };
  // const handleButtonClick = () => {
  //   if (
  //     !billingForm.name ||
  //     !billingForm.phone ||
  //     !billingForm.address ||
  //     !billingForm.town
  //   ) {
  //     alert('Please fill in all the required fields!');
  //     return;
  //   }
  //   alert('Form submitted successfully!');
  // };
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<PaymentFormValues>({
    mode: 'onChange',
    defaultValues: {
      cardHolder: '',
      cardNumber: '',
      cvc: '',
      paypalEmail: '',
      bitcoinEmail: '',
      pickUp: {
        location: '',
        date: undefined,
        time: '',
      },
      dropOff: {
        location: '',
        date: undefined,
        time: '',
      },
    },
  });

  const onSubmit: SubmitHandler<PaymentFormValues> = (
    data: PaymentFormValues
  ) => {
    console.log('Form Data Submitted:', data);
  };

  return (
    <div className="payment">
      <BillingInfo
        //handleButtonClick={handleButtonClick}
        handleInputChange={handleInputChange}
        handleSubmitBillingForm={handleSubmitBillingForm}
        billingForm={billingForm}
      />
      <RentalInfo control={control} register={register} errors={errors} />
      <PaymentMethod register={register} errors={errors} setValue={setValue} />
      <Confirmation handleSubmit={handleSubmit} onSubmit={onSubmit} />
    </div>
  );
};

export default Payment;
