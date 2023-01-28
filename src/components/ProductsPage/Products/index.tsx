import items from "../../../data/data.json";
import Product from "../Product";
import ProductSidebar from "../ProductSidebar";

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="w-[90%] m-auto">
      <div className="flex justify-between mt-[50px]">
        <ProductSidebar />
        <div className="">
          {/* {items.map((item) => (
            <Product key={item.id} {...item} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Products;
