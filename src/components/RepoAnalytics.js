import { Pie3D, Doughnut2D, Column3D, Bar3D } from "../charts";
import { useContext } from "react";
import { GithubUserContext } from "../context/context";
const RepoAnalytics = () => {
  const { repos } = useContext(GithubUserContext);
  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = {
        label: language.length > 12 ? language.substr(0, 9) + "..." : language,
        value: 1,
        starts: stargazers_count,
      };
    } else
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        starts: total[language].starts + stargazers_count,
      };
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // most start per language
  const mostPopuler = Object.values(languages)
    .sort((a, b) => b.starts - a.starts)
    .map((item) => {
      return { ...item, value: item.starts };
    })
    .slice(0, 5);

  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = {
        label: name.length > 15 ? name.substr(0, 12) + "..." : name,
        value: stargazers_count,
      };
      total.forks[forks] = {
        label: name.length > 15 ? name.substr(0, 12) + "..." : name,
        value: forks,
      };
      return total;
    },
    { stars: {}, forks: {} }
  );

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <>
      <div className="pie-column-container">
        <div className="pie-container">
          <Pie3D chartData={mostUsed} />
        </div>
        <div className="column-container">
          <Column3D chartData={stars} />
        </div>
      </div>
      <div className="doughnut-bar-container">
        <div className="doughnut-container">
          <Doughnut2D chartData={mostPopuler} />
        </div>
        <div className="bar-container">
          <Bar3D chartData={forks} />
        </div>
      </div>
    </>
  );
};

export default RepoAnalytics;
