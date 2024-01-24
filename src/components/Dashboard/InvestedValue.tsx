import { Paper, Typography } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const InvestedValue = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
  ];
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Monthly Investment Data",
    },
    xAxis: {
      categories: months,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Investment Value",
      },
    },
    series: [
      {
        name: "Investment Value",
        data: [100, 50, 300, 400, 60, 320, 700, 800, 900],
      },
    ],
  };

  return (
    <Paper>
      <Typography variant="h2">
        Invested value:{" "}
        {options.series[0].data.reduce((acc, curr) => acc + curr)}
      </Typography>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Paper>
  );
};

export default InvestedValue;
