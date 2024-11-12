import './styles.scss';

const ErrorComponent = (errortype: unknown) => {
  return (
    <div className="error" style={{ padding: '2rem', textAlign: 'center' }}>
      {errortype && errortype === 404
        ? "Serdest su API'yle oynayip durma kardesim"
        : 'Much picky? No Batmobile here sorry.'}
    </div>
  );
};

export default ErrorComponent;
