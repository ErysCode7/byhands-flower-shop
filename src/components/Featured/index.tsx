import FeaturedProducts from "../FeaturedProducts";
import { data } from "./data";

type Props = {};

const Featured = (props: Props) => {
  return (
    <section className="w-full my-20 bg-gray-50">
      <div className="px-10 py-20">
        <h2 className="text-center mb-10 text-2xl sm:text-3xl md:text-4xl laptop:text-5xl font-semibold text-[#333]">
          Featured Products
        </h2>
        <div className="flex flex-col gap-7 laptop:flex-row items-center justify-between w-[80%] m-auto">
          {data.map((item) => (
            <FeaturedProducts key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
