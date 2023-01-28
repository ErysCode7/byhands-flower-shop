import { AiTwotoneAppstore } from "react-icons/ai";
import { MdFormatLineSpacing } from "react-icons/md";
import items from "../../../data/data.json";
import Product from "../Product";
import ProductSidebar from "../ProductSidebar";

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="w-[90%] lg:w-[85%] m-auto">
      <div className="flex flex-col lg:flex-row mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[50px]">
        <ProductSidebar />
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="hidden lg:flex items-center">
              <AiTwotoneAppstore />
              <MdFormatLineSpacing />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center sm:gap-2 md:gap-5">
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
