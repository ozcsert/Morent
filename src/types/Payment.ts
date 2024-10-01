import { UseFormRegister, FieldErrors, UseFormReset } from "react-hook-form"

export type PaymentFormValues = {
  cardNumber: string
  expirationDate: string
  cardHolder: string
  cvc: string
  paypalEmail: string
  bitcoinEmail: string
}

type ValidationRule = {
  required: string | boolean
  pattern?: {
    value: RegExp
    message: string
  }
  validate?: (value: string) => boolean | string
}

export type ValidationRules = {
  cardNumber: ValidationRule
  expirationDate: ValidationRule
  cardHolder: ValidationRule
  cvc: ValidationRule
  paypalEmail: ValidationRule
  bitcoinEmail: ValidationRule
}

export type PaymentMethodProps = {
  register: UseFormRegister<PaymentFormValues>
  errors: FieldErrors<PaymentFormValues>
  reset: UseFormReset<PaymentFormValues>
}
