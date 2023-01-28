type Props = {};

const Story = (props: Props) => {
  return (
    <div className="flex flex-col laptop:flex-row items-center justify-between w-[85%] m-auto mt-5 laptop:mt-10 laptop:gap-10">
      <div className="laptop:flex-[2] order-2 laptop:order-1">
        <img
          src="/images/flower-shop.jpeg"
          alt="Flower shop"
          className="object-contain rounded h-[400px] laptop:h-[500px] w-full"
        />
      </div>
      <div className="order-1 laptop:order-2 laptop:flex-[1.5] mt-5 laptop:mt-0">
        <h1 className="font-bold text-3xl md:text-4xl laptop:text-5xl xl:text-6xl mb-5 text-main">
          Our Story
        </h1>
        <p className="text-secondary text-base sm:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
          delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
          Eos quod quisquam esse recusandae vitae neque dolore, obcaecati
          incidunt sequi blanditiis est exercitationem molestiae delectus saepe
          odio eligendi modi porro eaque in libero minus unde sapiente
          consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis
          nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate
          accusamus nesciunt totam vitae esse iste.
        </p>
      </div>
    </div>
  );
};

export default Story;
