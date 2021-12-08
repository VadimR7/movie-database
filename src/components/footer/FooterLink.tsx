interface FooterLinkProps {
  linkText: string;
  linkAddress: string;
}

const FooterLink = ({ linkText, linkAddress }: FooterLinkProps) => {
  return <a href={linkAddress}>{linkText}</a>;
};

export default FooterLink;
