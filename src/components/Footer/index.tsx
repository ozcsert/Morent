import React from "react";
import Link from "next/link";
import "./styles.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <ul className="footer-list">
          <div className="footer">
            <div className="logo">
              <h1>MORENT</h1>
              <p>
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
            </div>
            <div className="footer-menu">
              <div className="footer-about">
                <Link className="footer-link" href="#">
                  About
                </Link>
                <Link href="#">How it works</Link>
                <Link href="#">Featured</Link>
                <Link href="#">Partnership</Link>
                <Link href="#">Bussiness Relation</Link>
              </div>
              <div className="footer-community">
                <Link className="footer-link" href="#">
                  Community
                </Link>
                <Link href="#">Events</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Podcast</Link>
                <Link href="#">Invite a friend</Link>
              </div>
              <div className="footer-socails">
                <Link className="footer-link" href="#">
                  Socials
                </Link>
                <Link href="//discord.com">Discord</Link>
                <Link href="//instagram.com">Instagram</Link>
                <Link href="//twitter.com">Twitter</Link>
                <Link href="//facebook.com">Facebook</Link>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="footer-bottom">
            <Link href="#">©2022 MORENT. All rights reserved</Link>
            <div className="footer-privacy">
              <Link href="#">Privacy & Policy</Link>
              <Link href="#">Terms & Condition</Link>
            </div>
          </div>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
