import { Stack, ThemeProvider } from "@mui/material";

import { SearchDayInput, TimeTable, UpdateButton } from "./components";
import { originalMuiTheme } from "../../features";
import Header from "../../components/Header";

const RadioLayout = () => {
  const theme = originalMuiTheme();
  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Stack spacing={1}>
          <SearchDayInput />
          <UpdateButton />
          <TimeTable />
        </Stack>
      </ThemeProvider>
    </>
  );
};
export default RadioLayout;
