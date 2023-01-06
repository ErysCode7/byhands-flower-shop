type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <h3>© {year} ByHands All rights reserved</h3>
    </footer>
  );
};

export default Footer;
