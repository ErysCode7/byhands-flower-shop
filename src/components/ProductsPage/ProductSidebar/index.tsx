type Props = {};

const ProductSidebar = (props: Props) => {
  const categories = ["books", "flowers", "gadgets"];

  return (
    <div className="h-screen w-56">
      <h3 className="text-main font-bold">Category</h3>
      {categories.map((category, idx) => (
        <div key={idx}>
          <h4>{category}</h4>
        </div>
      ))}
    </div>
  );
};

export default ProductSidebar;
