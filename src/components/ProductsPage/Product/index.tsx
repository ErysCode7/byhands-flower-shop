type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  category: string;
};

const Product = ({ category, id, imgUrl, name, price }: Props) => {
  return (
    <div className="w-[250px] h-[250px] rounded">
      <img src={imgUrl} alt={name} className="object-cover h-full w-full" />
      <p>{name}</p>
    </div>
  );
};

export default Product;
