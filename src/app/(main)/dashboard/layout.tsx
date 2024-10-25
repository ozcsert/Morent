import type { Metadata } from 'next';
import SideBar from '@/components/admin/SidebarMenu';
import './layout.scss';

export const metadata: Metadata = {
  title: 'Morent Admin Dashboard',
  description: 'Admin dashboard page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="ad-container">
      <nav className="ad-navbar">NAVBAR</nav>
      <main className="ad-main">
        <div className="ad-sidebar-menu">
          <SideBar />
        </div>
        <section className="ad-content">{children}</section>
      </main>
    </div>
  );
}
