import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div>404</div>
      <Link to="/" className="btn">
        back home
      </Link>
    </>
  );
};

export default PageNotFound;
