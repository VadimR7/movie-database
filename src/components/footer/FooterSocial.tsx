import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterSocial = () => {
  return (
    <div className="footer__social">
      <button type="button">
        <FaTwitter className="footer__icon" />
      </button>{' '}
      /{' '}
      <button type="button">
        <FaFacebook className="footer__icon" />
      </button>{' '}
      /{' '}
      <button type="button">
        <FaInstagram className="footer__icon" />
      </button>{' '}
      /{' '}
      <button type="button">
        <FaYoutube className="footer__icon" />
      </button>
    </div>
  );
};

export default FooterSocial;
