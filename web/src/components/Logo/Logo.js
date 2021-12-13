import logo from './boat-logo.jpg';

const Logo = () => {
  return (
    <div>
      {/* <h2>{'Logo'}</h2> */}
      <img
        src={logo}
        width="420px"
        height="420px"
        style={{ marginTop: '30px' }}
      />
    </div>
  );
};

export default Logo;
