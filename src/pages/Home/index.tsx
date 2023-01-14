import { FeaturedProducts, Hero, Insights } from "../../components";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Insights />
    </main>
  );
};

export default Home;
