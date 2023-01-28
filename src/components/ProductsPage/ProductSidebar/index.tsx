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
    <div className="relative pr-2 md:pr-20 lg:pr-28">
      <input
        type="text"
        placeholder="Search products"
        className="border-none outline-none w-full bg-gray-100"
      />
      <h3 className="text-main font-bold text-base md:text-xl mb-2">
        Category
      </h3>
      <div className="flex flex-wrap gap-3 sm:block">
        {categories.map((category, idx) => (
          <div key={category} className="capitalize py-1">
            <h4 className="text-secondary cursor-pointer text-sm sm:text-base">
              {category}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSidebar;
