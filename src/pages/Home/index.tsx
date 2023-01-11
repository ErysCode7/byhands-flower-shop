import { FeaturedProducts, Hero } from "../../components";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
    </main>
  );
};

export default Home;
