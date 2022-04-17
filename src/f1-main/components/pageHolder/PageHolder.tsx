import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../bll/routes/routes";

export const PageHolder = () => {
  return (
    <Container maxWidth={"xl"}>
      <Routes>
        <Route path={routes.exchange} element={<h1>Exchange Page</h1>} />
        <Route
          path={routes.currencyDifference}
          element={<h1>Currency Difference</h1>}
        />
      </Routes>
    </Container>
  );
};
