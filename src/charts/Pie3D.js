import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Chart = ({ chartData }) => {
  const chartConfigs = {
    type: "pie2d",
    width: "100%",
    height: "350",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        decimals: 0,
        pieRadius: "35%",
        theme: "fusion",
      },
      data: chartData,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Chart;
