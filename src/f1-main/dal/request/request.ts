import { instance } from "../config/config";

export const api = {
  getAllCurrencies: () => {
    return instance.get("listquotes").then((resp) => resp.data);
  },
  exchangeCurrencies: (payload: ExchangeCurrenciesPayloadType) => {
    return instance
      .get("exchange", { params: { ...payload } })
      .then((resp) => resp.data);
  },
};

// Types

export type ExchangeCurrenciesPayloadType = {
  from: string;
  to: string;
  quantity: number;
};
