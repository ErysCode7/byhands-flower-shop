import items from "../../../data/data.json";

type Props = {};

const FeaturedProducts = (props: Props) => {
  return (
    <section>
      <div className="flex items-center">
        {items.slice(0, 3).map((item) => (
          <div>
            <h3>{item.name}</h3>
            <img src={item.imgUrl} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
