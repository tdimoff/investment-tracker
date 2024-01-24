import { configureStore } from "@reduxjs/toolkit";

import investmentReducer from "./store/investmentSlice";
// import settingReducer from "./store/settingSlice";
import themeReducer from "./store/themeSlice";

export const store = configureStore({
  reducer: {
    investments: investmentReducer,
    theme: themeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
