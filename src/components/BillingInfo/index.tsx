import { BillingForm } from '@/components/paymentboard';
import './styles.scss';

type BillingFormProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitBillingForm: (event: React.FormEvent<HTMLFormElement>) => void;
  //handleButtonClick: () => void;
  billingForm: BillingForm;
};

const BillingInfo = ({
  handleInputChange,
  handleSubmitBillingForm,
  //handleButtonClick,
  billingForm,
}: BillingFormProps) => {
  return (
    <div>
      <div className="billing-container">
        <div className="billing-container-title">
          <h2>Billing Info</h2>
          <div className="billing--subinfo">
            <p>Please enter your billing info</p>
            <p>Step 1 of 4</p>
          </div>
        </div>
        <form onSubmit={handleSubmitBillingForm} className="billing--form">
          <div className="billing-input">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              value={billingForm.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="billing-input">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={billingForm.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="billing-input">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              name="address"
              placeholder="Address"
              value={billingForm.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="billing-input">
            <label htmlFor="town">Town/City</label>
            <input
              id="town"
              type="text"
              name="town"
              placeholder="Town/City"
              value={billingForm.town}
              onChange={handleInputChange}
            />
          </div>
          {/* <button type="submit" className="submit-button" onClick={handleButtonClick}>
        Submit
      </button> */}
        </form>
      </div>
    </div>
  );
};

export default BillingInfo;
