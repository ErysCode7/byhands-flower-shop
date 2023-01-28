import { AiTwotoneAppstore } from "react-icons/ai";
import { MdFormatLineSpacing } from "react-icons/md";
import items from "../../../data/data.json";
import Product from "../Product";
import ProductSidebar from "../ProductSidebar";

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="w-[90%] lg:w-[85%] m-auto">
      <div className="flex mt-[40px] lg:mt-[50px]">
        <ProductSidebar />
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="hidden lg:flex items-center">
              <AiTwotoneAppstore />
              <MdFormatLineSpacing />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between">
            {items.map((item) => (
              <Product key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
