import { Paper, Typography, Grid } from "@mui/material";
import { IInvestment, IInvestmentItem } from "@/src/interfaces/IInvestment.interface";
import InvestedValue from "./Widgets/InvestedValue";
import Portfolio from "./Widgets/Portfolio";
import ActiveClosed from "./Widgets/ActiveClosed";
import InvestmentCard from "./Widgets/InvestmentCard";
import { AppDispatch } from "@/src/store";
import { useDispatch } from "react-redux";
import { closeInvestmentStatusThunk } from "@/src/store/investmentSlice";

interface IDashboardProps {
  data: IInvestment;
}


const Dashboard = ({ data }: IDashboardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleCloseInvestment = (investment: IInvestmentItem) => {
    dispatch(closeInvestmentStatusThunk(investment));
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={4} className="flex">
        <InvestedValue items={data.investedValue} />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <ActiveClosed items={data.activeClosed} />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Portfolio items={data.portfolio} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h6" gutterBottom>
          Investments
        </Typography>
        <Grid container spacing={2}>
          {data.investments.map((investment) => (
            <Grid item key={investment.id} xs={12} sm={6} md={4} lg={4}>
              <InvestmentCard
                investment={investment} 
                onClose={() => handleCloseInvestment(investment)} 
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
