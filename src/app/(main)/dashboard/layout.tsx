import type { Metadata } from 'next';
import SideBar from '@/components/admin/SidebarMenu';
import './layout.scss';
import MobilSideBar from '@/components/admin/SidebarMenu/SidebarMobilMenu';

export const metadata: Metadata = {
  title: 'Morent Admin Dashboard',
  description: 'Admin dashboard page',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="ad-container">
      <main className="ad-main">
        <div className="ad-sidebar-menu">
          <SideBar />
        </div>
        <section className="ad-content">{children}</section>
        <MobilSideBar />
      </main>
    </div>
  );
}
