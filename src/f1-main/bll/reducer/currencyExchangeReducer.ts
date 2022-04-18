import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { changeError, changeLoading } from "./appReducer";
import { api, ExchangeCurrenciesPayloadType } from "../../dal/request/request";
import { AxiosError } from "axios";

// Thunk

export const getAllCurrencies = createAsyncThunk(
  "exchange/all/currencies",
  async (payload, { dispatch, rejectWithValue }) => {
    dispatch(changeLoading("loading"));

    try {
      dispatch(changeLoading("completed"));
      const res = await api.getAllCurrencies();
      return res;
    } catch (err) {
      const error = err as AxiosError;
      dispatch(changeLoading("failed"));
      dispatch(changeError(error.message));
      return rejectWithValue(null);
    }
  }
);

export const changeOptionOneCurrency = createAsyncThunk(
  "exchange/change/one",
  async (
    payload: ExchangeCurrenciesPayloadType,
    { dispatch, rejectWithValue }
  ) => {
    dispatch(changeLoading("loading"));

    try {
      const res = await api.exchangeCurrencies(payload);
      return Math.round(payload.quantity * res)
    } catch (err) {
      const error = err as AxiosError;
      dispatch(changeLoading("failed"));
      dispatch(changeError(error.message));
      return rejectWithValue(null);
    } finally {
      dispatch(changeIsLoading(true));
    }
  }
);

export const changeOptionTwoCurrency = createAsyncThunk(
  "exchange/change/two",
  async (
    payload: ExchangeCurrenciesPayloadType,
    { dispatch, rejectWithValue }
  ) => {
    dispatch(changeLoading("loading"));

    try {
      const res = await api.exchangeCurrencies(payload);
      return Math.round(payload.quantity * res)
    } catch (err) {
      const error = err as AxiosError;
      dispatch(changeLoading("failed"));
      dispatch(changeError(error.message));
      return rejectWithValue(null);
    } finally {
      dispatch(changeIsLoading(true));
    }
  }
);

const currencyExchange = createSlice({
  name: "exchange",
  initialState: {
    inputOne: 0,
    inputTwo: 0,
    optionOne: "RUB",
    optionTwo: "USD",
    allCurrencies: [],
    isLoading: false,
  } as InitStateType,
  reducers: {
    changeInputOneValue: (state, action: PayloadAction<number>) => {
      state.inputOne = action.payload;
      state.isLoading = false
    },
    changeInputTwoValue: (state, action: PayloadAction<number>) => {
      state.inputTwo = action.payload;
      state.isLoading = false
    },
    changeOptionOneValue: (state, action: PayloadAction<string>) => {
      state.optionOne = action.payload;
      state.isLoading = false
    },
    changeOptionTwoValue: (state, action: PayloadAction<string>) => {
      state.optionTwo = action.payload;
      state.isLoading = false
    },
    changeIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getAllCurrencies.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.allCurrencies = action.payload;
      }
    );
    builder.addCase(
      changeOptionOneCurrency.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.inputTwo = action.payload;
      }
    );
    builder.addCase(
      changeOptionTwoCurrency.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.inputOne = action.payload;
      }
    );
  },
});

// Actions

export const changeInputOneValue = currencyExchange.actions.changeInputOneValue;
export const changeInputTwoValue = currencyExchange.actions.changeInputTwoValue;
export const changeOptionOneValue =
  currencyExchange.actions.changeOptionOneValue;
export const changeOptionTwoValue =
  currencyExchange.actions.changeOptionTwoValue;
export const changeIsLoading = currencyExchange.actions.changeIsLoading;

// Reducer
export const currencyExchangeReducer = currencyExchange.reducer;

// Types

type InitStateType = {
  inputOne: number;
  inputTwo: number;
  optionOne: string;
  optionTwo: string;
  allCurrencies: string[];
  isLoading: boolean;
};
