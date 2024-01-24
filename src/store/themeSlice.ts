import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      if (state.mode === 'light') {
        console.log('setting to dark')
        state.mode = 'dark'
      } else {
        state.mode = 'light'
        console.log('setting to light')
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
