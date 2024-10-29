import { SnackbarProvider } from "notistack";
import { UnitList } from "./components";

const PrskLayout = () => {
  return (
    <>
      <SnackbarProvider>
        <UnitList />
      </SnackbarProvider>
    </>
  );
};
export default PrskLayout;
