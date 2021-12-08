import FooterLink from './FooterLink';

const footerLinks = {
  linkText: [
    'About',
    'News',
    'Pro',
    'Year in Review',
    'Gift Guide',
    'Podcast',
    'Helo',
    'Terms',
    'API',
    'Contact',
  ],
  linkAddress: '#',
};

const FooterLinksList = () => {
  return (
    <ul className="footer__linkList">
      {footerLinks.linkText.map((link) => (
        <li className="footer__link" key={link}>
          <FooterLink linkAddress={footerLinks.linkAddress} linkText={link} />
        </li>
      ))}
    </ul>
  );
};

export default FooterLinksList;
