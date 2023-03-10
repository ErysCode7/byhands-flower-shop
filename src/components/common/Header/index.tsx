import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu, GiTwirlyFlower } from "react-icons/gi";
import { SlClose } from "react-icons/sl";
import { Link } from "react-router-dom";
import MobileSidebar, { links } from "../MobileSidebar";

type Props = {};

const Header = (props: Props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <header className="bg-white w-full h-24 mb-5 shadow-md">
        <div className="relative flex item-center justify-between w-[95%] laptop:w-[85%] m-auto h-full">
          <Link to="/" className="flex items-center">
            <GiTwirlyFlower className="text-6xl text-red-500" />
            <h2 className="ml-1 text-4xl font-bold tracking-wide text-gray-700">
              ByHands
            </h2>
          </Link>
          <ul className="hidden laptop:flex items-center justify-center gap-7 flex-grow">
            {links.map((link) => (
              <li key={link.linkName}>
                <Link to={link.link} className="byhands__hover-links">
                  {link.linkName}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/cart"
            className="hidden laptop:flex items-center h-full gap-1 laptop:cursor-pointer"
          >
            <h3 className="text-2xl text-black font-semibold">Cart</h3>
            <FaShoppingCart className="text-2xl text-gray-600" />
          </Link>

          {/* HAMBURGER */}
          <div className="laptop:hidden flex items-center">
            {showMobileNav ? (
              <SlClose
                className="laptop:hidden text-4xl text-white absolute right-[5px] z-50"
                onClick={() => setShowMobileNav((prev) => !prev)}
              />
            ) : (
              <GiHamburgerMenu
                className="laptop:hidden text-4xl text-gray-700 absolute right-[5px] z-50"
                onClick={() => setShowMobileNav((prev) => !prev)}
              />
            )}
          </div>

          {/* MOBILE SIDEBAR */}
          {showMobileNav && <MobileSidebar showMobileNav={showMobileNav} />}
        </div>
      </header>
    </>
  );
};

export default Header;
