type Props = {};

const Hero = (props: Props) => {
  return (
    <main className="flex flex-col laptop:flex-row items-center justify-between w-[85%] m-auto mt-5 laptop:mt-10 laptop:gap-10">
      <div className="order-2 laptop:order-1 laptop:flex-[1.5] mt-5 laptop:mt-0">
        <h1 className="font-bold text-3xl md:text-4xl laptop:text-5xl xl:text-6xl mb-5 text-[#333]">
          Design Your Comfort Zone
        </h1>
        <p className="text-gray-500 text-base sm:text-xl xl:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias
        </p>
        <button className="uppercase text-base md:text-lg tracking-wider mt-4 bg-[#111] text-white py-2 px-3 rounded active:scale-[0.98]">
          Shop now
        </button>
      </div>
      <div className="laptop:flex-[2] order-1 laptop:order-2">
        <img
          src="/images/flower-shop.jpeg"
          alt="Flower shop"
          className="object-contain rounded h-[400px] laptop:h-[500px] w-full"
        />
      </div>
    </main>
  );
};

export default Hero;
