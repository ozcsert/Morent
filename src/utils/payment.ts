// import { ValidationRules } from "@/types/typeList"

// const detectCardType = (cardNumber: string) => {
//   if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber)) {
//     return "Visa"
//   } else if (/^5[1-5][0-9]{14}$/.test(cardNumber)) {
//     return "MasterCard"
//   }
//   return "Unknown"
// }

// export const validationRules: ValidationRules = {
//   cardNumber: {
//     required: "Card number is required",
//     pattern: {
//       value: /^\d{16}$/,
//       message: "Card number must be 16 digits",
//     },
//     validate: (value: string) => {
//       const cardType = detectCardType(value)
//       if (cardType === "Unknown") {
//         return "Please Enter Visa or Mastercard"
//       }
//       return true
//     },
//   },
//   expirationDate: {
//     required: "Expiration date is required",
//     pattern: {
//       value: /^(0[1-9]|1[0-2])\d{2}$/,
//       message: "Expiration date must be in MMYY format",
//     },
//     validate: (value: string) => {
//       const month = parseInt(value.slice(0, 2), 10)
//       const year = parseInt(value.slice(2, 4), 10)
//       const currentYear = new Date().getFullYear() % 100
//       const currentMonth = new Date().getMonth() + 1

//       return (
//         year > currentYear ||
//         (year === currentYear && month >= currentMonth) ||
//         "Expiration date is in the past"
//       )
//     },
//   },
//   cardHolder: {
//     required: "Card holder name is required",
//     pattern: {
//       value: /^[a-zA-Z\s\-]+$/,
//       message: "Card holder should only include letters",
//     },
//   },
//   cvc: {
//     required: "CVC is required",
//     pattern: {
//       value: /^\d{3}$/,
//       message: "CVC must be 3 digits",
//     },
//   },
//   paypalEmail: {
//     required: "PayPal email is required",
//     pattern: {
//       value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//       message: "Invalid email format",
//     },
//   },
//   bitcoinEmail: {
//     required: "Bitcoin email is required",
//     pattern: {
//       value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//       message: "Invalid email format",
//     },
//   },
//   pickUp: {
//     location: {
//       required: "Please select a city",
//       pattern: {
//         value:
//           /^(?!.*Select your city)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         message: "Please select a city",
//       },
//     },
//     date: {
//       required: "Bitcoin email is required",
//       pattern: {
//         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         message: "Invalid email format",
//       },
//     },
//     time: {
//       required: "Bitcoin email is required",
//       pattern: {
//         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         message: "Invalid email format",
//       },
//     },
//   },
//   dropOff: {
//     location: {
//       required: "Please select a city",
//       pattern: {
//         value:
//           /^(?!.*Select a city)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         message: "Please select a city",
//       },
//     },
//     date: {
//       required: "Bitcoin email is required",
//       pattern: {
//         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         message: "Invalid email format",
//       },
//     },
//     time: {
//       required: "Bitcoin email is required",
//       pattern: {
//         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         message: "Invalid email format",
//       },
//     },
//   },
// }

import { PaymentFormValues, ValidationRules } from "@/types/typeList"

const detectCardType = (cardNumber: string) => {
  if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber)) {
    return "Visa"
  } else if (/^5[1-5][0-9]{14}$/.test(cardNumber)) {
    return "MasterCard"
  }
  return "Unknown"
}

const isFutureDate = (date: Date | null): boolean => {
  if (!date) return false
  return date > new Date()
}

const isLaterThan = (time1: string, time2: string): boolean => {
  console.log(time1)
  const hours1 = parseInt(time1.substring(0, 2), 10)
  const hours2 = parseInt(time2.substring(0, 2), 10)

  return hours1 > hours2
}

const areSameDates = (date1: Date, date2: Date): boolean => {
  if ((date1 && date2) !== undefined) {
    return date1.getTime() === date2.getTime()
  }
  return false
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
      const year = parseInt(value.slice(2, 4), 10) + 2000
      const expirationDate = new Date(year, month - 1)

      return isFutureDate(expirationDate) || "Expiration date is in the past"
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
  pickUp: {
    location: {
      required: "Please select a city",
      pattern: {
        value: /^(?!.*Select your city).*$/,
        message: "Please select a city",
      },
    },
    date: {
      required: "Pick up date is required",
      validate: (value: Date, formValues: PaymentFormValues) => {
        if (!value) return "Pick up date is required"
        if (!isFutureDate(value)) return "Pick up date must be in the future"
        if (formValues.dropOff.date && value > formValues.dropOff.date) {
          return "Pick up date cannot be later than drop off date"
        }
        return true
      },
    },
    time: {
      required: "Pick up time is required",
      pattern: {
        value: /^(?!.*Select your time).*$/,
        message: "Please select pick up time",
      },
      validate: (value: string, formValues: PaymentFormValues) => {
        if (areSameDates(formValues.pickUp.date, formValues.dropOff.date)) {
          if (isLaterThan(formValues.pickUp.time, value)) {
            return "Drop off time cannot be earlier than pick up time"
          }
          return true
        }
        return true
      },
    },
  },
  dropOff: {
    location: {
      required: "Please select a city",
      pattern: {
        value: /^(?!.*Select your city).*$/,
        message: "Please select a city",
      },
    },
    date: {
      required: "Drop off date is required",
      validate: (value: Date, formValues: PaymentFormValues) => {
        if (!value) return "Drop off date is required"
        if (!isFutureDate(value)) return "Drop off date must be in the future"
        if (formValues.pickUp.date && value < formValues.pickUp.date) {
          return "Drop off date cannot be earlier than pick up date"
        }
        return true
      },
    },
    time: {
      required: "Drop off time is required",
      pattern: {
        value: /^(?!.*Select your time).*$/,
        message: "Please select drop off time",
      },
      validate: (value: string, formValues: PaymentFormValues) => {
        if (areSameDates(formValues.pickUp.date, formValues.dropOff.date)) {
          if (isLaterThan(formValues.pickUp.time, value)) {
            return "Drop off time cannot be earlier than pick up time"
          }
          return true
        }
        return true
      },
    },
  },
}
