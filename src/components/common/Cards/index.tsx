type Props = {
  icon: JSX.Element;
  title: string;
  text: string;
};

const Cards = ({ icon, text, title }: Props) => {
  return (
    <div className="rounded w-full bg-white flex flex-col justify-center items-center p-5 text-center md:h-[250px]">
      <div className="bg-gray-300 rounded-full p-3">
        <p className="text-3xl">{icon}</p>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Cards;
