import React from 'react';
import { IInvestmentItem } from "@/src/interfaces/IInvestment.interface";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface IInvestmentCardProps {
  investment: IInvestmentItem;
  onClose: (investmentId: number) => void;
}

const InvestmentCard = ({ investment, onClose }: IInvestmentCardProps) => {
  return (
    <Card variant="outlined" elevation={3}>
      <CardContent>
        <Typography variant="h5" component="div">
          {investment.name}
        </Typography>
        <Typography color="text.secondary">
          {investment.type}
        </Typography>
        <Typography variant="body2">
          Status: {investment.status}<br />
          Date: {investment.date} <br />
          Value: {investment.value}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onClose(investment.id)} disabled={investment.status === 'Closed'}>
          Close Investment
        </Button>
      </CardActions>
    </Card>
  );
};

export default InvestmentCard;
