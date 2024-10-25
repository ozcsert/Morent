import {
  UseFormRegister,
  FieldErrors,
  Control,
  UseFormSetValue,
} from 'react-hook-form';

export type PaymentFormValues = {
  cardNumber: string;
  expirationDate: string;
  cardHolder: string;
  cvc: string;
  paypalEmail: string;
  bitcoinEmail: string;
  pickUp: {
    location: string;
    date: Date;
    time: string;
  };
  dropOff: {
    location: string;
    date: Date;
    time: string;
  };
};

type ValidationRule = {
  required: string | boolean;
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: (value: string) => boolean | string;
};

type DateValidationRule = {
  required: string | boolean;
  validate: (value: Date, formValues: PaymentFormValues) => boolean | string;
};

type TimeValidationRule = {
  required: string | boolean;
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate: (value: string, formValues: PaymentFormValues) => boolean | string;
};
export type ValidationRules = {
  cardNumber: ValidationRule;
  expirationDate: ValidationRule;
  cardHolder: ValidationRule;
  cvc: ValidationRule;
  paypalEmail: ValidationRule;
  bitcoinEmail: ValidationRule;
  pickUp: {
    location: ValidationRule;
    date: DateValidationRule;
    time: TimeValidationRule;
  };
  dropOff: {
    location: ValidationRule;
    date: DateValidationRule;
    time: TimeValidationRule;
  };
};

export type PaymentMethodProps = {
  register: UseFormRegister<PaymentFormValues>;
  errors: FieldErrors<PaymentFormValues>;
  setValue: UseFormSetValue<PaymentFormValues>;
};

export type RentalInfoProps = {
  register: UseFormRegister<PaymentFormValues>;
  errors: FieldErrors<PaymentFormValues>;
  control: Control<PaymentFormValues>;
};

export type RentalInputAreaProps = {
  title: string;
  register: UseFormRegister<PaymentFormValues>;
  registerField: 'pickUp' | 'dropOff';
  control: Control<PaymentFormValues>;
  errors: FieldErrors<PaymentFormValues>;
};
