import { GithubUserContext } from "../context/context";
import { useContext } from "react";
import { UserInfo, User, Followers, Header, Search } from "../components";
import { RepoAnalytics } from "../components";
import loadingGif from "../assets/loading.gif";

const Dashboard = () => {
  const { loading } = useContext(GithubUserContext);

  if (loading) {
    return (
      <section className="main-container">
        <Header />
        <Search />
        <img className="loading" src={loadingGif} alt="loading..." />
      </section>
    );
  }

  return (
    <section className="main-container">
      <Header />
      <Search />
      <UserInfo />
      <div className="user-followers-container">
        <User />
        <Followers />
      </div>
      <RepoAnalytics />
      {/* <Followers /> */}
    </section>
  );
};

export default Dashboard;
