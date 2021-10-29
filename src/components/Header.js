import { ImExit } from "react-icons/im";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated, logout, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <header className="header">
      {isUser && (
        <>
          <div>
            <img src={user.picture} alt={user.name} />
            <h4>
              Welcome, <b>{user.name.toUpperCase()}</b>
            </h4>
          </div>
          <button
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            <ImExit /> Logout
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
