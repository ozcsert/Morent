import { ChangeEvent } from "react"
import { PaymentFormValues } from "@/types/typeList"

export const handleInputValue = (
  e: ChangeEvent<HTMLInputElement>,
  setFormattedValues: React.Dispatch<React.SetStateAction<PaymentFormValues>>
): void => {
  const { id, value } = e.target

  const formatValue = (
    val: string,
    pattern: RegExp,
    limit?: number,
    lettersOnly: boolean = false
  ): string => {
    const cleanedVal = lettersOnly
      ? val.replace(/[^a-zA-Z\s]/g, "")
      : val.replace(/\D/g, "")

    const limitedVal = cleanedVal.slice(0, limit)

    if (lettersOnly) {
      return limitedVal
    }

    return limitedVal.match(pattern)?.join(" / ") || limitedVal
  }

  let formattedValue: string

  switch (id) {
    case "cardNumber":
      formattedValue = formatValue(value, /.{1,4}/g, 16)
      break
    case "expirationDate":
      formattedValue = formatValue(value, /.{1,2}/g, 4)
      break
    case "cardHolder":
      formattedValue = formatValue(value, /.{1,2}/g, undefined, true) // Set lettersOnly to true
      break
    case "cvc":
      formattedValue = formatValue(value, /.{1,3}/g, 3)
      break
  }

  setFormattedValues((prevValues) => ({
    ...prevValues,
    [id]: formattedValue,
  }))
}
