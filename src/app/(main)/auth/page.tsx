import UserAuth from '@/components/UserAuth';

const UserAuthPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'fex-start',
        width: '100vw',
        height: '100vh',
      }}
    >
      <UserAuth />
    </div>
  );
};

export default UserAuthPage;
