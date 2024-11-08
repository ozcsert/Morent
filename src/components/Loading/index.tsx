import Spinner from '../Spinner';

export const Loading = () => {
  return (
    <div className="loading" style={{ height: '800px' }}>
      <Spinner size={36} color="#0099ff">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="pulse-dot" />
        ))}
      </Spinner>
    </div>
  );
};
