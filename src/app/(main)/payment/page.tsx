import dynamic from 'next/dynamic';

const DynamicPaymentBoard = dynamic(() => import('@/components/paymentboard'), {
  ssr: false,
});

const Payment: React.FC = () => {
  return <DynamicPaymentBoard />;
};

export default Payment;
