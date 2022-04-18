import { Route, Routes } from "react-router-dom";
import { routes } from "../../bll/routes/routes";
import {Wrapper} from "./styles/styles";
import {Exchange} from "../../../f2-pages/exchange/Exchange";

export const PageHolder = () => {
  return (
    <Wrapper maxWidth={"lg"}>
      <Routes>
        <Route path={routes.exchange} element={<Exchange />} />
        <Route
          path={routes.currencyDifference}
          element={<h1>Currency Difference</h1>}
        />
      </Routes>
    </Wrapper>
  );
};
