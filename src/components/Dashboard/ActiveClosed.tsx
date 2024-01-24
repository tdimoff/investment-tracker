import { Paper, Typography } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ActiveClosed = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Active vs Closed Investments",
    },
    series: [
      {
        name: "Investments",
        colorByPoint: true,
        data: [
          {
            name: "Active",
            y: 5,
          },
          {
            name: "Closed",
            y: 2,
          },
        ],
      },
    ],
  };

  return (
    <Paper>
      <Typography variant="h2">
        Number of active/closed investments
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Typography>
    </Paper>
  );
};

export default ActiveClosed;
