import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCurrencies } from "../../../../../../f3-selectors/selectors";

export const CurrencySelect = ({
  optionValue,
  onChangeCurrencyCallback,
}: CurrencySelectPropsType) => {
  const allCurrencies = useSelector(selectAllCurrencies);
  const dispatch: any = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(onChangeCurrencyCallback(event.target.value as string));
  };

  const displayAllCurrencies =
    allCurrencies &&
    allCurrencies.map((currency) => (
      <MenuItem key={`id:${currency}`} value={currency}>
        {currency}
      </MenuItem>
    ));

  return (
    <FormControl fullWidth>
      <InputLabel id="currency-select-label">Currency</InputLabel>
      <Select
        labelId="currency-select-label"
        value={optionValue}
        label="Currency"
        onChange={handleChange}
      >
        {displayAllCurrencies}
      </Select>
    </FormControl>
  );
};

type CurrencySelectPropsType = {
  optionValue: string;
  onChangeCurrencyCallback: (value: string) => any;
};
