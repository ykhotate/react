import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, PrskLayout, RadioLayout } from "./pages";
import { HOME_URL, PRSK_PAGE_URL, RADIO_PROGRAM_URL } from "./consts";

function AppRoutes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={HOME_URL} element={<Home />} />
        <Route path={RADIO_PROGRAM_URL} element={<RadioLayout />} />
        <Route path={PRSK_PAGE_URL} element={<PrskLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
