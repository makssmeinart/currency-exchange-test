import { FormItem, FormWrapper, Input } from "./styles/styles";
import React from "react";
import { CurrencySelect } from "./components";
import { useDispatch } from "react-redux";
import { changeIfNumber } from "../../../../f1-main/utils/changeIfNumber";

export const CurrencyForm = React.memo(
  ({
    inputValue,
    optionValue,
    onChangeCallback,
    onChangeCurrencyCallback,
  }: CurrencyFormPropsType) => {
    const dispatch = useDispatch();

    return (
      <FormWrapper container>
        <FormItem item>
          <Input
            value={inputValue}
            onChange={(e) => changeIfNumber(e, dispatch, onChangeCallback)}
          />
        </FormItem>
        <FormItem item>
          <CurrencySelect
            optionValue={optionValue}
            onChangeCurrencyCallback={onChangeCurrencyCallback}
          />
        </FormItem>
      </FormWrapper>
    );
  }
);

type CurrencyFormPropsType = {
  inputValue: number;
  optionValue: string;
  onChangeCallback: (value: number) => any;
  onChangeCurrencyCallback: (value: string) => any;
};
