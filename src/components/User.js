import { useContext } from "react";
import { GithubUserContext } from "../context/context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const User = () => {
  const { users } = useContext(GithubUserContext);
  const { avatar_url, html_url, name, company, blog, login } = users;
  const { bio, location } = users;

  return (
    <section className="user">
      <div className="top-info">
        <div>
          <img src={avatar_url} alt={name} />
          <div className="username">
            <p>{name}</p>
            <p>@{login}</p>
          </div>
        </div>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          Follow
        </a>
      </div>
      <div className="bottom-info">
        <p>
          {bio?.length > 110 ? bio.substr(0, 110) + "..." : bio || "(empty)"}
        </p>
        <p>
          <MdBusiness />
          {company || "(empty)"}
        </p>
        <p>
          <MdLocationOn />
          {location || "(empty)"}
        </p>
        <p>
          <MdLink />
          <a href={`${blog}`}>{blog || "(empty)"}</a>
        </p>
      </div>
    </section>
  );
};

export default User;
