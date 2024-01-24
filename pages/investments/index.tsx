import { NextPage } from "next";
import { useEffect } from "react";
import { fetchInvestmentsThunk } from "@/src/store/investmentSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/store";
import { IInvestment } from "@/src/interfaces/IInvestment.interface";
import { Box, Paper, Container } from "@mui/material";
import Dashboard from "@/src/components/Dashboard";

const InvestmentsPage: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const investments = useSelector((state: RootState) => state.investments.investments);

  useEffect(() => {
    dispatch(fetchInvestmentsThunk());
  }, []);

  return (
    <Box display="flex">
      <Container maxWidth="lg">
        <Dashboard data={investments} />
      </Container>
    </Box>
  );
};

export default InvestmentsPage;
