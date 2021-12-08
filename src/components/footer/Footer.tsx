import FooterLinksList from './FooterLinksList';
import FooterSocial from './FooterSocial';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="_container">
        <div className="footer__row">
          <FooterLinksList />
          <FooterSocial />
        </div>
        <p className="footer__copyright">
          © Letterboxd Limited. Made by <button type="button">fans</button> in
          Aotearoa. <button type="button">Film data</button> from{' '}
          <button type="button">TMDb</button>.{' '}
          <button type="button">Mobile site</button>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
