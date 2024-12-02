import type { Metadata } from 'next';
import './layout.scss';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Morent Category',
  description: 'Category page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
