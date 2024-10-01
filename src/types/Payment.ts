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
