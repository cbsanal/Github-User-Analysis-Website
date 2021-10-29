import { useContext } from "react";
import { GithubUserContext } from "../context/context";
const Followers = () => {
  const { followers } = useContext(GithubUserContext);
  return (
    <section className="followers">
      <div className="followers-container">
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <div key={index} className="follower">
              <img src={img} alt={login} />
              <div className="follower-username">
                <p>{login}</p>
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                  {html_url}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Followers;
