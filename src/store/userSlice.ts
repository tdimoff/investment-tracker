import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/src/store';

interface UserState {
  loading: boolean;
  details: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    age: number;
  };
}

const initialState: UserState = {
  loading: false,
  details: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: 0,
  },
};

export const updateUserDetailsThunk = createAsyncThunk(
    'user/updateUserDetails',
    async (details: UserState['details']) => {
        return details;
    }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUserDetailsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUserDetailsThunk.fulfilled, (state, action) => {
      state.details = action.payload;
    });
    builder.addCase(updateUserDetailsThunk.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

// Other logic such as selectors can be exported here
export const selectUserDetails = (state: RootState) => state.user.details;

// Export the reducer, to be used in the store
export default userSlice.reducer;
