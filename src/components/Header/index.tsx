import { FaShoppingCart } from "react-icons/fa";
import { GiTwirlyFlower } from "react-icons/gi";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-white w-full h-24">
      <div className="flex item-center justify-between w-[85%] m-auto h-full bg-red-100">
        <Link to="/" className="flex items-center">
          <GiTwirlyFlower className="text-6xl text-red-500" />
          <h2 className="ml-1 text-4xl font-bold tracking-wide text-gray-700">
            ByHands
          </h2>
        </Link>
        <ul className="flex items-center justify-center gap-5 flex-grow">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
        <div className="flex items-center laptop:cursor-pointer">
          <h3 className="text-4xl text-gray-700">Cart</h3>
          <FaShoppingCart className="text-4xl text-red-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
