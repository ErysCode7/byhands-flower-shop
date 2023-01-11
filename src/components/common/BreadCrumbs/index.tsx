import { Link, useLocation } from "react-router-dom";

type Props = {};

const BreadCrumbs = (props: Props) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="h-28 w-full bg-gray-100 flex items-center capitalize">
      <div className="w-4/5 m-auto py-5">
        <h3 className="text-xl md:text-2xl font-bold lg:text-4xl">
          <Link to="/">Home</Link> / {pathname.slice(1)}
        </h3>
      </div>
    </div>
  );
};

export default BreadCrumbs;
