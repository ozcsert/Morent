import React from 'react'
import './style.scss'

type LogoProps = {
    text:string
}

const Logo = ({text}: LogoProps) => {
  return (
    <div className='logo'>
        <h1 >{text}</h1>
        <p>Our vision is to provide convenience and help increase your sales business.</p>
    </div>
  )
}

export default Logo;