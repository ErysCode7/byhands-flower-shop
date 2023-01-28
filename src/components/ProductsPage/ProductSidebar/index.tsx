type Props = {};

const ProductSidebar = (props: Props) => {
  const categories = [
    "books",
    "flowers",
    "gadgets",
    "furniture",
    "bags",
    "shoes",
    "caps",
  ];

  return (
    <div className="relative lg:pr-28 flex flex-col">
      <input
        type="text"
        placeholder="Search products"
        className="border-none outline-none w-full bg-light-gray h-[50px] px-2 rounded order-2 lg:order-1 my-2 sm:mb-4"
      />
      <div className="order-1 lg:order-2">
        <h3 className="text-main font-bold text-base md:text-xl mb-2">
          Category
        </h3>
        <div className="flex flex-wrap gap-3 md:gap-5 lg:block">
          {categories.map((category, idx) => (
            <div key={category} className="capitalize py-1">
              <h4 className="text-secondary cursor-pointer text-sm sm:text-base">
                {category}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
