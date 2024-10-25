import { PaymentFormValues } from '@/types/typeList';
import { UseFormHandleSubmit } from 'react-hook-form';

type ConfirmationProps = {
  handleSubmit: UseFormHandleSubmit<PaymentFormValues>;
  onSubmit: (formValues: PaymentFormValues) => void;
};

const Confirmation: React.FC<ConfirmationProps> = ({
  handleSubmit,
  onSubmit,
}) => {
  return (
    <div>
      <button onClick={handleSubmit(onSubmit)}>Confirm Payment</button>
    </div>
  );
};

export default Confirmation;
