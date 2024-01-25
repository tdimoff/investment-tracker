import { IInvestedValueItem } from "@/src/interfaces/IInvestment.interface";
import { Box, Paper, Typography } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface IInvestedValueProps {
  items: IInvestedValueItem[];
}

const InvestedValue = ({ items }: IInvestedValueProps) => {
  const months = items.map((item) => item.period);
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
        data: items.map((item) => item.value),
      },
    ],
  };

  return (
    <Paper elevation={3} className="p-4" sx={{ width: '100%' }}>
      <HighchartsReact highcharts={Highcharts} options={options}/>
    </Paper>
  );
};

export default InvestedValue;
