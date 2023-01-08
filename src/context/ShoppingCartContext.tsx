import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type TShoppingCartContext = {
  cartItems: CartItems[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>;
  getItemQuantity: (id: number) => number;
  increaseCartItem: (id: number) => void;
  decreaseCartItem: (id: number) => void;
  removeFromCart: (id: number) => void;
};

type CartItems = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const getItemQuantity = (id: number) => {
    return 1;
  };

  const increaseCartItem = (id: number) => {};

  const decreaseCartItem = (id: number) => {};

  const removeFromCart = (id: number) => {};

  const value = {
    //state
    cartItems,
    //state func
    setCartItems,
    //functions
    getItemQuantity,
    increaseCartItem,
    decreaseCartItem,
    removeFromCart,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
