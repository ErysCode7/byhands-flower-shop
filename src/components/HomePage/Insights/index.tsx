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
      title: "Mission",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
    {
      id: 3,
      icon: <GiDiamondHard />,
      title: "Vision",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
    {
      id: 3,
      icon: <FaHistory />,
      title: "History",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
  ];

  return (
    <section className="bg-gray-200 mt-3 relative">
      <div className="w-[90%] lg:w-4/5 m-auto py-5 lg:pb-0 lg:pt-[70px]">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex flex-col text-main text-xl md:text-2xl lg:text-3xl font-bold xl:text-4xl mb-5">
            <h3>Custom Furniture</h3>
            <h3>Built Only For You</h3>
          </div>
          <p className="lg:w-[500px] text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center mt-5 lg:pt-0 lg:translate-y-[70px]">
          {cardsData.map((card) => (
            <Cards key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
