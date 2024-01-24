import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/src/store';
import { updateUser, fetchUser } from '@/src/api/api';
import { IUser } from '@/src/interfaces/IUser.interface';

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

export const fetchUserDetailsThunk = createAsyncThunk(
  'user/fetchUserDetails',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUser();

      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateUserDetailsThunk = createAsyncThunk(
    'user/updateUserDetails',
    async (user: IUser, { rejectWithValue }) => {
      try {
        const response = await updateUser(user);

        return response.data;
      } catch (err: any) {
        return rejectWithValue(err.response.data);
      }
    }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUserDetailsThunk.pending, (state) => {
      console.log('submitting')
      state.loading = true;
    });
    builder.addCase(updateUserDetailsThunk.fulfilled, (state, action) => {
      state.details = action.payload;
    });
    builder.addCase(updateUserDetailsThunk.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchUserDetailsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserDetailsThunk.fulfilled, (state, action) => {
      state.details = action.payload;
    });
    builder.addCase(fetchUserDetailsThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const selectUserDetails = (state: RootState) => state.user.details;

export default userSlice.reducer;
