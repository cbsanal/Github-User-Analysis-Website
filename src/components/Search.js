import { BsSearch } from "react-icons/bs";
import { useState, useContext } from "react";
import { GithubUserContext } from "../context/context";

const Search = () => {
  const [user, setUser] = useState("");
  const { allowRequestNum, error, searchGithubUser } =
    useContext(GithubUserContext);

  const handleSubmit = () => {
    if (user) searchGithubUser(user);
  };
  return (
    <>
      <div className="search">
        <div>
          <input
            type="text"
            className="search-input"
            placeholder="Enter Github User..."
            value={user}
            onChange={(e) => setUser(e.target.value)}
            autoFocus
          />
          <button
            disabled={allowRequestNum === 0}
            className="search-btn"
            onClick={handleSubmit}
          >
            <BsSearch className="search-icon" />
            Search
          </button>
          {error.show && <span className="error-message">{error.msg}</span>}
        </div>
        <span className="remaining-request">
          Remaining request: {allowRequestNum} / 60
        </span>
      </div>
    </>
  );
};

export default Search;
