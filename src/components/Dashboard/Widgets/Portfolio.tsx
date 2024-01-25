import { IInvestment } from "@/src/interfaces/IInvestment.interface";
import { Paper, Typography, Box } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { IPortfolioItem } from "@/src/interfaces/IInvestment.interface";

interface IPortfolioProps {
  items: IPortfolioItem[];
}

const Portfolio = ({ items }: IPortfolioProps) => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Portfolio",
    },
    series: [
      {
        name: "Investments",
        colorByPoint: true,
        data: items.map((item) => ({
          name: item.name,
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

export default Portfolio;
