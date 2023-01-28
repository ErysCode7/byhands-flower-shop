type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  category: string;
};

const Product = ({ category, id, imgUrl, name, price }: Props) => {
  return (
    <div className="rounded w-full sm:w-[280px] md:w-full lg:w-[350px] my-3 bg-[#fefefe] shadow-md border-b">
      <img
        src={imgUrl}
        alt={name}
        className="w-full sm:object-cover h-[300px] rounded aspect-auto"
      />
      <div className="flex items-center justify-between pt-4 px-2">
        <p className="text-base sm:text-lg md:text-xl">{name}</p>
        <p className="text-gray-500 text-base md:text-lg">{price}</p>
      </div>
      <div className="text-center px-2 py-4">
        <button className="bg-blue-500 text-white py-1 px-2 rounded w-full active:scale-[0.98]">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
