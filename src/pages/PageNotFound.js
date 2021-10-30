import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const PageNotFound = () => {
  return (
    <>
      <p className="not-found">404</p>
      <Link to="/" className="go-back">
        <IoIosArrowBack />
        Back home
      </Link>
    </>
  );
};

export default PageNotFound;
