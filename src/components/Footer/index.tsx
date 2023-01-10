type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 w-full h-[80px] flex items-center justify-center mt-10 absolute bottom-0">
      <h3 className="text-[#333] text-base">
        © {year} ByHands All rights reserved
      </h3>
    </footer>
  );
};

export default Footer;
