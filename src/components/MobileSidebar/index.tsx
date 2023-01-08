import { FaShoppingCart } from "react-icons/fa";
import { GiTwirlyFlower } from "react-icons/gi";
import { Link } from "react-router-dom";

type Props = {
  showMobileNav: boolean;
};

const MobileSidebar = ({ showMobileNav }: Props) => {
  const links = [
    {
      link: "/",
      linkName: "Home",
    },
    {
      link: "/about",
      linkName: "About",
    },
    {
      link: "/product",
      linkName: "Product",
    },
  ];

  return (
    <div className="w-full h-screen bg-[rgba(0,0,0,_0.5)] fixed right-0 left-[275px] top-0 bottom-0 laptop:hidden">
      <div className="laptop:hidden bg-white h-screen fixed left-0 w-[275px] sm:w-[375px]">
        <div className="pt-5">
          <div className="px-5">
            <Link to="/" className="flex items-center">
              <GiTwirlyFlower className="text-6xl text-red-500" />
              <h2 className="ml-1 text-4xl font-bold tracking-wide text-gray-700">
                ByHands
              </h2>
            </Link>
          </div>
          <ul className="flex flex-col mt-10 gap-3 text-xl">
            {links.map((link) => (
              <li key={link.linkName} className="hover:bg-gray-100 p-5 group">
                <Link
                  to={link.link}
                  className="group-hover:pl-3 duration-300 transition-all ease-in-out"
                >
                  {link.linkName}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-5 pt-7 flex items-center gap-2">
            <h3 className="text-2xl">Cart</h3>
            <FaShoppingCart className="text-2xl text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
