import React from 'react'
import Link from 'next/link'
import './styles.scss'




type FooterProps = {
  text: string,
  url: string
}

const Footer = ({ url, text }: FooterProps) => {

  return (
    <>
      <footer className='footer-container'>
        <ul className='footer-list'>
        <Link href={url}>{text}</Link>
        </ul>

      </footer>
    </>
  )
}

export default Footer