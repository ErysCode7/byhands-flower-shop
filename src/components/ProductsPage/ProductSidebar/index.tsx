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
    <div className="relative pr-10 md:pr-20 lg:pr-28">
      <h3 className="text-main font-bold text-xl mb-2">Category</h3>
      {categories.map((category, idx) => (
        <div key={idx} className="capitalize py-1">
          <h4 className="text-secondary cursor-pointer">{category}</h4>
        </div>
      ))}
    </div>
  );
};

export default ProductSidebar;
