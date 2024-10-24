'use client';
import HomeBoard from '@/components/home';
import './page.scss';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="home">
        <HomeBoard />
        <Footer />
      </div>
    </>
  );
}
