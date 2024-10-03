import { ValidationRules } from "@/types/typeList"

const detectCardType = (cardNumber: string) => {
  if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber)) {
    return "Visa"
  } else if (/^5[1-5][0-9]{14}$/.test(cardNumber)) {
    return "MasterCard"
  }
  return "Unknown"
}

export const validationRules: ValidationRules = {
  cardNumber: {
    required: "Card number is required",
    pattern: {
      value: /^\d{16}$/,
      message: "Card number must be 16 digits",
    },
    validate: (value: string) => {
      const cardType = detectCardType(value)
      if (cardType === "Unknown") {
        return "Please Enter Visa or Mastercard"
      }
      return true
    },
  },
  expirationDate: {
    required: "Expiration date is required",
    pattern: {
      value: /^(0[1-9]|1[0-2])\d{2}$/,
      message: "Expiration date must be in MMYY format",
    },
    validate: (value: string) => {
      const month = parseInt(value.slice(0, 2), 10)
      const year = parseInt(value.slice(2, 4), 10)
      const currentYear = new Date().getFullYear() % 100
      const currentMonth = new Date().getMonth() + 1

      return (
        year > currentYear ||
        (year === currentYear && month >= currentMonth) ||
        "Expiration date is in the past"
      )
    },
  },
  cardHolder: {
    required: "Card holder name is required",
    pattern: {
      value: /^[a-zA-Z\s\-]+$/,
      message: "Card holder should only include letters",
    },
  },
  cvc: {
    required: "CVC is required",
    pattern: {
      value: /^\d{3}$/,
      message: "CVC must be 3 digits",
    },
  },
  paypalEmail: {
    required: "PayPal email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email format",
    },
  },
  bitcoinEmail: {
    required: "Bitcoin email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email format",
    },
  },
}
