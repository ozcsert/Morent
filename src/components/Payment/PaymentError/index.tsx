import './styles.scss';

type PaymentErrorProps = {
  error?: { message?: string };
};

const PaymentError: React.FC<PaymentErrorProps> = ({ error }) => {
  return (
    <div className={`payment__error ${error ? 'active' : ''}`}>
      <p>{error && error.message ? error.message : ''}</p>
    </div>
  );
};

export default PaymentError;
