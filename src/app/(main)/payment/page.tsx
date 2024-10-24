'use client';
import './styles.scss';
import PaymentMethod from '@/components/Payment';
import { useForm, SubmitHandler } from 'react-hook-form';
import Confirmation from '@/components/Confirmation';
import { PaymentFormValues } from '@/types/typeList';
import RentalInfo from '@/components/RentalInfo';
import BillingInfo from '@/components/BillingInfo';

const Payment: React.FC = () => {
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
    <div>
      <BillingInfo/>
      <RentalInfo control={control} register={register} errors={errors} />
      <PaymentMethod register={register} errors={errors} setValue={setValue} />
      <Confirmation handleSubmit={handleSubmit} onSubmit={onSubmit} />
    </div>
  );
};

export default Payment;
