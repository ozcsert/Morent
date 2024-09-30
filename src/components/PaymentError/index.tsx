import React from "react"

type PaymentErrorProps = {
  error?: { message?: string }
  key: string
}

const PaymentError: React.FC<PaymentErrorProps> = ({ error, key }) => {
  const baseStyle: React.CSSProperties = {
    marginTop: "-60px",
    zIndex: -1,
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "green",
    color: "white",
    transition: "all 0.5s ease",
  }

  const activeStyle: React.CSSProperties = {
    zIndex: 0,
    marginTop: "0px",
    backgroundColor: "#ee6b61",
  }

  return (
    <div
      key={key}
      style={error ? { ...baseStyle, ...activeStyle } : baseStyle} // Merge styles when active
    >
      <p>{error && error.message ? error.message : ""}</p>
    </div>
  )
}

export default PaymentError
