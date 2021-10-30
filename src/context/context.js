import { useState, useEffect, createContext } from "react";
import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";
import axios from "axios";

const baseUrl = "https://api.github.com";
const GithubUserContext = createContext();

const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [allowRequestNum, setAllowRequestNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  const searchGithubUser = async (user) => {
    toggleError();
    setLoading(true);
    try {
      const res = await axios(`${baseUrl}/users/${user}`);
      if (res.status === 200) {
        setUsers(res.data);
        console.log(res.data);
        const { followers_url, repos_url } = res.data;
        const repos = axios(`${repos_url}?per_page=100`);
        const followers = axios(`${followers_url}?per_page=100`);
        await Promise.allSettled([repos, followers])
          .then((result) => {
            if (result[0].status === "fulfilled")
              setRepos(result[0].value.data);
            else throw new Error("Problem occured while fetching repos!");
            if (result[1].status === "fulfilled")
              setFollowers(result[1].value.data);
            else throw new Error("Problem occured while fetching followers!");
            console.log(result[1].value.data);
            console.log(result[0].value.data);
          })
          .catch((err) => toggleError(true, `${err}`));
      }
    } catch (err) {
      if (err.response.status === 404)
        toggleError(true, "Sorry, there is no user with that username");
      else toggleError(true, "Upps, something went wrong...");
    }
    checkRequests();
    setLoading(false);
  };

  const checkRequests = async () => {
    try {
      const { data } = await axios(`${baseUrl}/rate_limit`);
      const { remaining } = data.rate;
      setAllowRequestNum(remaining);
      if (remaining === 0)
        toggleError(true, "Sorry, you reached your hourly limit!");
    } catch (err) {
      toggleError(true, "Sorry, you reached your hourly limit!");
    }
  };

  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };

  useEffect(() => {
    checkRequests();
    // eslint-disable-next-line
  }, []);

  return (
    <GithubUserContext.Provider
      value={{
        users,
        repos,
        followers,
        allowRequestNum,
        error,
        searchGithubUser,
        loading,
      }}
    >
      {children}
    </GithubUserContext.Provider>
  );
};

export { GithubProvider, GithubUserContext };
