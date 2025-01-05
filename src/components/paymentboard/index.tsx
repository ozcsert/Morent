'use client';
import './styles.scss';
import PaymentMethod from '@/components/Payment';
import { useForm, SubmitHandler } from 'react-hook-form';
import Confirmation from '@/components/Confirmation';
import { PaymentFormValues } from '@/types/typeList';
import RentalInfo from '@/components/RentalInfo';
import BillingInfo from '@/components/BillingInfo';
import { useState } from 'react';
import RentalSummary from '@/components/RentalSummary';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';

export interface BillingForm {
  name: string;
  phone: string;
  address: string;
  town: string;
}

const fetcherRentalSummary = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const PaymentBoard: React.FC = () => {
  const [billingForm, setBillingForm] = useState<BillingForm>({
    name: '',
    phone: '',
    address: '',
    town: '',
  });

  const query = useSearchParams()?.get('id'); // Client-side only
  const { data, error, isLoading } = useSWR(
    query
      ? `https://66ff850d2b9aac9c997f84c6.mockapi.io/api/morent/cars?id=${query}`
      : null,
    fetcherRentalSummary
  );

  // Hooks are declared unconditionally here
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const data: any = [];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBillingForm({ ...billingForm, [name]: value });
  };

  const handleSubmitBillingForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(billingForm);
  };

  const onSubmit: SubmitHandler<PaymentFormValues> = (
    formData: PaymentFormValues
  ) => {
    console.log('Form Data Submitted:', formData);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching rental summary</div>;
  }

  return (
    <div className="billing-payment-container">
      <div className="billing-payment-subcontainer"></div>
      <div className="payment">
        <RentalInfo control={control} register={register} errors={errors} />
        <BillingInfo
          handleInputChange={handleInputChange}
          handleSubmitBillingForm={handleSubmitBillingForm}
          billingForm={billingForm}
        />
        <PaymentMethod
          register={register}
          errors={errors}
          setValue={setValue}
        />
        <Confirmation handleSubmit={handleSubmit} onSubmit={onSubmit} />
      </div>
      <div className="rental-summary-container">
        {data && (
          <RentalSummary
            carName={data[0]?.name || 'Car'}
            imageUrl={data[0]?.imageUrl || ''}
            rating={data[0]?.rating || 0}
            reviewCount={data[0]?.reviewCount || 0}
            subtotal={data[0]?.subtotal || 0}
            carInfo={data[0]}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentBoard;
