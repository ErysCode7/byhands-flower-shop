import items from "../../../data/data.json";
import Product from "../Product";

type Props = {};

const Products = (props: Props) => {
  return (
    <div>
      <div>
        {items.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
