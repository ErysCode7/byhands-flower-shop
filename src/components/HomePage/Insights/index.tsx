import { SlCompass } from "react-icons/sl";

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
      icon: <SlCompass />,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
    {
      id: 3,
      icon: <SlCompass />,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
  ];

  return (
    <section className="bg-gray-300 my-3">
      <div className="w-[90%] m-auto py-5">
        <div>
          <h3>Custom Furniture Built Only For You</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Insights;
