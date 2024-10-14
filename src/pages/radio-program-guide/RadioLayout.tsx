import { Stack } from "@mui/material";

import { NavigateToHome } from "../../components";
import { SearchDayInput, TimeTable, UpdateButton } from "./components";

const RadioLayout = () => {
  return (
    <>
      <Stack spacing={1}>
        <NavigateToHome />
        <SearchDayInput />
        <UpdateButton />
        <TimeTable />
      </Stack>
    </>
  );
};
export default RadioLayout;
