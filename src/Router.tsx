import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, PrskLayout, RadioLayout } from "./pages";
import { HOME_URL, RADIO_PROGRAM_URL } from "./consts";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<Home />} />
        <Route path={RADIO_PROGRAM_URL} element={<RadioLayout />} />
        <Route path={RADIO_PROGRAM_URL} element={<PrskLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
