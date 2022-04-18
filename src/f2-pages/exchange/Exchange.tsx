import { CurrencyForm } from "./components";
import { Wrapper } from "./styles/style";
import { useDispatch, useSelector } from "react-redux";
import {
  selectInputOne,
  selectInputTwo,
  selectIsLoading,
  selectOptionOne,
  selectOptionTwo,
} from "../../f3-selectors/selectors";
import {
  changeInputOneValue,
  changeInputTwoValue,
  changeOptionOneCurrency,
  changeOptionOneValue,
  changeOptionTwoCurrency,
  changeOptionTwoValue,
  getAllCurrencies,
} from "../../f1-main/bll/reducer/currencyExchangeReducer";
import { useEffect } from "react";
import { Box, Container } from "@mui/material";

export const Exchange = () => {
  const dispatch: any = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const inputOne = useSelector(selectInputOne);
  const inputTwo = useSelector(selectInputTwo);
  const optionOne = useSelector(selectOptionOne);
  const optionTwo = useSelector(selectOptionTwo);

  useEffect(() => {
    dispatch(getAllCurrencies());
  }, []);

  useEffect(() => {
    if (!isLoading) {
      dispatch(
        changeOptionOneCurrency({
          from: optionOne,
          to: optionTwo,
          quantity: inputOne,
        })
      );
    }
  }, [inputOne, optionTwo]);

  useEffect(() => {
    if (!isLoading) {
      dispatch(
        changeOptionTwoCurrency({
          from: optionTwo,
          to: optionOne,
          quantity: inputTwo,
        })
      );
    }
  }, [inputTwo, optionOne]);

  return (
    <Wrapper>
      <Box sx={{display: "flex", gap: "1rem", maxWidth: "60%"}}>
        <CurrencyForm
          inputValue={inputOne}
          optionValue={optionOne}
          onChangeCallback={changeInputOneValue}
          onChangeCurrencyCallback={changeOptionOneValue}
        />
        <CurrencyForm
          inputValue={inputTwo}
          optionValue={optionTwo}
          onChangeCallback={changeInputTwoValue}
          onChangeCurrencyCallback={changeOptionTwoValue}
        />
      </Box>
    </Wrapper>
  );
};
