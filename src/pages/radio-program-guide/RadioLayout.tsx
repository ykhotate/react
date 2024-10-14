import { Stack, ThemeProvider } from "@mui/material";

import { NavigateToHome } from "../../components";
import { SearchDayInput, TimeTable, UpdateButton } from "./components";
import { originalMuiTheme } from "../../features";

const RadioLayout = () => {
  const theme = originalMuiTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack spacing={1}>
          <NavigateToHome />
          <SearchDayInput />
          <UpdateButton />
          <TimeTable />
        </Stack>
      </ThemeProvider>
    </>
  );
};
export default RadioLayout;
