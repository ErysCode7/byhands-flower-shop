type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  category: string;
};

const Product = ({ category, id, imgUrl, name, price }: Props) => {
  return <div>Product</div>;
};

export default Product;
