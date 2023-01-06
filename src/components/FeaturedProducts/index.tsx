type Props = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const FeaturedProducts = ({ id, imageUrl, name, price }: Props) => {
  return (
    <div className="w-[325px] h-[200px] rounded mt-10 laptop:mt-0">
      <img
        src={imageUrl}
        alt={name}
        className="object-cover h-full w-full rounded"
      />
      <div className="flex items-center justify-between mt-3">
        <p className="text-gray-500">{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default FeaturedProducts;
