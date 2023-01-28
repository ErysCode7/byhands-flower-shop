type Props = {
  icon: JSX.Element;
  title: string;
  text: string;
};

const Cards = ({ icon, text, title }: Props) => {
  return (
    <div className="rounded w-full bg-light-gray flex flex-col justify-center items-center p-5 text-center md:h-[250px] lg:h-full lg:py-7">
      <div className="bg-gray-300 rounded-full p-3">
        <p className="text-3xl lg:text-4xl ">{icon}</p>
      </div>
      <h3 className="font-bold py-2 text-2xl lg:text-3xl">{title}</h3>
      <p className="lg:leading-8 text-secondary">{text}</p>
    </div>
  );
};

export default Cards;
