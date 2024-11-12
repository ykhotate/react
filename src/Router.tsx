import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components";

function AppRoutes() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE || ''}>
      <Layout />
    </BrowserRouter>
  );
}

export default AppRoutes;
