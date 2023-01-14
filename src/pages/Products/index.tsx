import { BreadCrumbs, Products as ProductList } from "../../components";

type Props = {};

const Products = (props: Props) => {
  return (
    <main>
      <BreadCrumbs />
      <ProductList />
    </main>
  );
};

export default Products;
