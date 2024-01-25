import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchInvestments,  } from '../api/api';
import { IInvestment } from '../interfaces/IInvestment.interface';

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
    investments: []
  },
  loading: false,
  error: null,
};

export const fetchInvestmentsThunk = createAsyncThunk(
  'investments/fetchInvestments',
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
  'investments/toggleInvestmentStatus',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetchInvestments();

      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const investmentsSlice = createSlice({
  name: 'investments',
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
      });
  },
});

// export const { addInvestment } = investmentsSlice.actions;
export default investmentsSlice.reducer;
