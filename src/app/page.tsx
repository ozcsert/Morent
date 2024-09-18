
import "./page.scss";
import Link from "next/link";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";


export default function Home() {
  return (
    <div className="home">
      <div className="footer">

      <Logo text='MORENT'/>
      <div className="footer-menu">
      <div className="footer-about">
        <Link className="footer-link" href="#">About</Link>
        <Footer url="#" text="How it works"/>
        <Footer url="#" text="Featured"/>
        <Footer url="#" text="Partnership"/>
        <Footer url="#" text="Bussiness Relation"/>
        </div>
        <div className="footer-community">
        <Link className="footer-link" href="#">Community</Link>
        <Footer url="#" text="Events"/>
        <Footer url="#" text="Blog"/>
        <Footer url="#" text="Podcast"/>
        <Footer url="#" text="Invite a friend"/>
        </div>
      <div className="footer-socails">

      <Link className="footer-link" href="#">Socials</Link>
      <Footer url="//discord.com" text="Discord" />
      <Footer url="//instagram.com" text="Instagram" />
      <Footer url="//twitter.com" text="Twitter" />
      <Footer url="//facebook.com" text="Facebook" />
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
        
    </div>
  );
}
