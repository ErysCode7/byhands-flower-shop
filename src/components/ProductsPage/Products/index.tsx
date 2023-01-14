import items from "../../../data/data.json";
import Product from "../Product";

type Props = {};

const Products = (props: Props) => {
  return (
    <div>
      <div className="w-[90%] lg:w-4/5 m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-10 place-items-center">
        {items.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
