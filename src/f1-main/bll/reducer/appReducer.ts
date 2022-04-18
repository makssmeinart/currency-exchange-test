import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    loading: "idle",
    error: "",
  } as InitStateTypeProps,
  reducers: {
    changeLoading: (state, action: PayloadAction<LoadingType>) => {
      state.loading = action.payload;
    },
    changeError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

// Actions

export const changeLoading = appSlice.actions.changeLoading
export const changeError = appSlice.actions.changeError

// Reducer
export const appReducer = appSlice.reducer;

// Types

type InitStateTypeProps = {
  loading: LoadingType;
  error: string;
};

type LoadingType = "idle" | "loading" | "completed" | "failed";
