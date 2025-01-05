import dynamic from 'next/dynamic';

const DynamicNavbar = dynamic(() => import('@/components/Navbar/index'), {
  ssr: false,
});

const Navbar: React.FC = () => {
  return <DynamicNavbar />;
};

export default Navbar;
