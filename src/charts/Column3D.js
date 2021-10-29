import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Chart = ({ chartData }) => {
  const chartConfigs = {
    type: "column2d",
    width: "100%",
    height: "350",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Popular",
        yAxisName: "Stars",
        xAxisName: "Repos",
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px",
        paletteColors: "5d62b5,29c3be,f2726f",
        theme: "fusion",
      },
      data: chartData,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Chart;
