import FeaturedProducts from "../FeaturedProducts";
import { data } from "./data";

type Props = {};

const Featured = (props: Props) => {
  return (
    <section>
      <div>
        {data.map((item) => (
          <FeaturedProducts key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
