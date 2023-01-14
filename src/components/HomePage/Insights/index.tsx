import { FaHistory } from "react-icons/fa";
import { GiDiamondHard } from "react-icons/gi";
import { SlCompass } from "react-icons/sl";
import Cards from "../../common/Cards";

type Props = {};

const Insights = (props: Props) => {
  const cardsData = [
    {
      id: 1,
      icon: <SlCompass />,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
    {
      id: 3,
      icon: <GiDiamondHard />,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
    {
      id: 3,
      icon: <FaHistory />,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
  ];

  return (
    <section className="bg-gray-200 my-3">
      <div className="w-[90%] lg:w-4/5 m-auto py-5">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex flex-col text-main text-xl md:text-2xl lg:text-3xl font-bold xl:text-4xl mb-5">
            <h3>Custom Furniture</h3>
            <h3>Built Only For You</h3>
          </div>
          <p className="lg:w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div>
          {cardsData.map((card, index) => (
            <Cards key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
