type Props = {};

const SearchProducts = (props: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        className="bg-gray-300 border-none outline-none"
      />
    </div>
  );
};

export default SearchProducts;
