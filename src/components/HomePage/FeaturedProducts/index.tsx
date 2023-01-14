import items from "../../../data/data.json";

type Props = {};

const FeaturedProducts = (props: Props) => {
  return (
    <section className="my-[80px]">
      <div className="w-[90%] m-auto lg:w-4/5">
        <h2 className="text-center text-3xl font-bold text-main lg:text-5xl mb-4">
          Featured Products
        </h2>
        <div className="flex flex-col items-center lg:flex-row lg:gap-4 3xl:gap-[30px]">
          {items.slice(0, 3).map((item) => (
            <div key={item.id} className="py-5 w-full">
              <img
                src={item.imgUrl}
                alt={item.name}
                className="w-[90%] h-[230px] rounded m-auto md:h-[400px] lg:h-[250px] lg:w-[250px] xl:w-[350px] 3xl:w-full 3xl:h-[300px]"
              />
              <div className="w-[90%] m-auto flex items-center justify-between lg:w-[250px] pt-2 xl:pt-3 3xl:w-[100%]">
                <h3 className="md:text-lg xl:text-xl">{item.name}</h3>
                <p className="text-gray-400 xl:text-lg">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
