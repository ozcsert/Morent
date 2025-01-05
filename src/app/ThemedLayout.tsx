'use client';

import './globals.scss';
import { ThemeProvider } from '@/app/context/ThemeContext';
import Navbar from '@/components/Navbar/index';
// import Navbar from '@/components/Navbar/dynamicNavbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ThemedLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <div>{children}</div>
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
}
