import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type Props = {};

const Cart = (props: Props) => {
  const { cartItems } = useShoppingCart();

  if (cartItems.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="mt-28 md:mt-40 font-bold text-3xl md:text-4xl laptop:text-5xl xl:text-6xl mb-5 text-[#333]">
          Your cart is empty
        </h2>
        <button className="uppercase text-base md:text-lg tracking-wider mt-1 bg-[#111] text-white py-2 px-3 rounded active:scale-[0.98]">
          <Link to="/products">Fill it</Link>
        </button>
      </div>
    );
  }

  return <div>Cart</div>;
};

export default Cart;
