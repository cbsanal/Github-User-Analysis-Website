import { useContext } from "react";
import { GithubUserContext } from "../context/context";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const UserInfo = () => {
  const { users } = useContext(GithubUserContext);
  const { public_repos, followers, following, public_gists } = users;

  return (
    <section className="user-info">
      <div className="info-container">
        <GoRepo className="stats-icon pink" />
        <div>
          {public_repos} <br />
          <span>Repos</span>
        </div>
      </div>
      <div className="info-container">
        <FiUsers className="stats-icon green" />
        <div>
          {followers} <br />
          <span>Followers</span>
        </div>
      </div>
      <div className="info-container">
        <FiUserPlus className="stats-icon purple" />
        <div>
          {following} <br />
          <span>Following</span>
        </div>
      </div>
      <div className="info-container">
        <GoGist className="stats-icon orange" />
        <div>
          {public_gists} <br />
          <span>Gists</span>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
