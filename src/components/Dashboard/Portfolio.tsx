import { IInvestment } from "@/src/interfaces/IInvestment.interface";
import { Paper, Typography } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { IPortfolio } from "@/src/interfaces/IInvestment.interface";

const Portfolio = ({ items }: IPortfolio) => {
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
    <div className="portfolio">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Portfolio;
