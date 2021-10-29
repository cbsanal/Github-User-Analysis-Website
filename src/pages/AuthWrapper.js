import { useAuth0 } from "@auth0/auth0-react";
import loading from "../assets/loading.gif";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return <img className="loading-middle" src={loading} alt="loading" />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return <>{children}</>;
};

export default AuthWrapper;
