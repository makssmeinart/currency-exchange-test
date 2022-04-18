import { RootState } from "../f1-main/bll/store";

// Inputs
export const selectInputOne = (state: RootState) =>
  state.currencyExchange.inputOne;
export const selectInputTwo = (state: RootState) =>
  state.currencyExchange.inputTwo;
// Select Options
export const selectOptionOne = (state: RootState) =>
  state.currencyExchange.optionOne;
export const selectOptionTwo = (state: RootState) =>
  state.currencyExchange.optionTwo;

// Currency
export const selectAllCurrencies = (state: RootState) =>
  state.currencyExchange.allCurrencies;

// Utils
export const selectIsLoading = (state: RootState) =>
  state.currencyExchange.isLoading;
