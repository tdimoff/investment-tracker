import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchInvestments, closeInvestment } from "../api/api";
import {
  IInvestment,
  IInvestmentItem,
} from "../interfaces/IInvestment.interface";

interface InvestmentState {
  investments: IInvestment;
  loading: boolean;
  error: string | null;
}

const initialState: InvestmentState = {
  investments: {
    investedValue: [],
    portfolio: [],
    activeClosed: [],
    investments: [],
  },
  loading: false,
  error: null,
};

export const fetchInvestmentsThunk = createAsyncThunk(
  "investments/fetchInvestments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchInvestments();

      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const closeInvestmentStatusThunk = createAsyncThunk(
  "investments/toggleInvestmentStatus",
  async (investment: IInvestmentItem, { rejectWithValue }) => {
    try {
      const response = await closeInvestment(investment);

      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const investmentsSlice = createSlice({
  name: "investments",
  initialState,
  reducers: {
    // addInvestment: (state, action: PayloadAction<any>) => {
    //   state.investments.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvestmentsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInvestmentsThunk.fulfilled, (state, action) => {
        state.investments = action.payload;
        state.loading = false;
      })
      .addCase(fetchInvestmentsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(closeInvestmentStatusThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(closeInvestmentStatusThunk.fulfilled, (state, action) => {
        state.investments.investments.find(
          (investment) => investment.id === action.payload.id
        )!.status = action.payload.status;
        state.loading = false;
      })
      .addCase(closeInvestmentStatusThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// export const { addInvestment } = investmentsSlice.actions;
export default investmentsSlice.reducer;
