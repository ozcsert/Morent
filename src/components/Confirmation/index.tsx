import { PaymentFormValues } from '@/types/typeList';
import { UseFormHandleSubmit } from 'react-hook-form';
import Security from '@/app/images/payment/Security.svg';

import './styles.scss';

type ConfirmationProps = {
  handleSubmit: UseFormHandleSubmit<PaymentFormValues>;
  onSubmit: (formValues: PaymentFormValues) => void;
};

const Confirmation: React.FC<ConfirmationProps> = ({
  handleSubmit,
  onSubmit,
}) => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-container-title">
        <h2>Confirmation</h2>
        <div className="confirmation-subinfo">
          <p>
            We are getting to the end. Just few clicks and your rental is ready!
          </p>
          <p className="step">Step 4 of 4</p>
        </div>
      </div>
      <form className="confirmation-form">
        <div className="confirmation-option">
          <div className="confirmation-option-name">
            <div>
              <input
                type="checkbox"
                id="agreed"
                name="agreement"
                value="agreed"
              />
              <label htmlFor="agreed">
                I agree with sending an Marketing and newsletter emails. No
                spam, promissed!
              </label>
            </div>
          </div>
        </div>
      </form>

      <form className="confirmation-form">
        <div className="confirmation-option">
          <div className="confirmation-option-name">
            <div>
              <input type="checkbox" id="terms" name="terms-agreement" />
              <label htmlFor="terms">
                I agree with our terms and conditions and privacy policy.
              </label>
            </div>
          </div>
        </div>
      </form>
      <button className="confirmation-btn" onClick={handleSubmit(onSubmit)}>
        Rent Now
      </button>
      <div className="security-info">
        <div className="security-img">
          <Security width={32} height={32} />
        </div>
        <div className="security-title">
          <h2>All your data are safe</h2>
          <div className="security-subinfo">
            <p>
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
