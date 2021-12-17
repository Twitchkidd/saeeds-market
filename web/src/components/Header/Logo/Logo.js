import logo from './boat-logo.jpg';

const Logo = ({ onClick }) => (
  // <img src={logo} width="286px" height="286px" style={{ marginTop: '42px' }} />
  <img onClick={onClick} src={logo} width="286px" height="286px" />
);

export default Logo;
