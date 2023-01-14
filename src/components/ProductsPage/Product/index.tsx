type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  category: string;
};

const Product = ({ category, id, imgUrl, name, price }: Props) => {
  return (
    <div className="rounded py-1 h-[300px] w-full my-10 bg-gray-100">
      <img src={imgUrl} alt={name} className="w-full h-full" />
      <div className="flex items-center justify-between pt-2">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div className="text-center mt-2">
        <button className="bg-blue-500 text-white py-1 px-2 rounded w-full">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
