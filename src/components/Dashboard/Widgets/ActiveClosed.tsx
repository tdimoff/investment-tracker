import { IActiveClosedItem } from "@/src/interfaces/IInvestment.interface";
import { Paper, Typography } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface IActiveClosedProps {
  items: IActiveClosedItem[];
}

const ActiveClosed = ({ items }: IActiveClosedProps) => {
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
        data: items.map((item) => ({
          name: item.name || 'a',
          y: item.value,
        })),
      },
    ],
  };

  return (
    <Paper elevation={3} className="p-4">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Paper>
  );
};

export default ActiveClosed;
