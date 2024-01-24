import { Paper, Typography, Grid } from "@mui/material";
import { IInvestment } from "@/src/interfaces/IInvestment.interface";
import InvestedValue from "./InvestedValue";
import Portfolio from "./Portfolio";
import ActiveClosed from "./ActiveClosed";

interface IDashboardProps {
  data: IInvestment;
}

const Dashboard = ({ data }: IDashboardProps) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3} className="flex">
        <InvestedValue />
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <ActiveClosed />
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Portfolio items={data.portfolio.items} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
