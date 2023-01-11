import { Link, useLocation } from "react-router-dom";

type Props = {};

const BreadCrumbs = (props: Props) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="h-28 w-full bg-gray-100 flex items-center capitalize">
      <div className="w-4/5 m-auto py-5">
        <h3 className="text-xl md:text-2xl font-bold lg:text-4xl text-main">
          <Link to="/">Home</Link> /{" "}
          <span className="text-gray-500">{pathname.slice(1)}</span>
        </h3>
      </div>
    </div>
  );
};

export default BreadCrumbs;
