import { useLocation } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  const location = useLocation();
  const year = new Date().getFullYear();

  return (
    <footer
      className={`bg-gray-100 w-full h-[80px] flex items-center justify-center mt-10
      ${location.pathname === "/" ? "translate-y-28" : ""}
      ${
        location.pathname === "/cart" ? "absolute" : "relative"
      } bottom-0 z-[-1]`}
    >
      <h3 className="text-main text-base">
        © {year} ByHands All rights reserved
      </h3>
    </footer>
  );
};

export default Footer;
