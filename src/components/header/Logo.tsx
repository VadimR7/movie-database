import logo from '../../images/letterboxd-logo-h-pos-rgb.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
