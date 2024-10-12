import { Stack } from "@mui/material";

import { NavigateToHome } from "../../components";
import { useRadioProgramStore } from "./store";
import { SearchDayInput, UpdateButton } from "./components";

const RadioLayout = () => {
  const programs = useRadioProgramStore((state) => state.programs);

  return (
    <>
      <Stack spacing={1}>
        <NavigateToHome />
        <SearchDayInput />
        <UpdateButton />

        {programs && programs.length > 0
          ? programs.map((program, index) => {
              return <div key={index}>{program.title}</div>;
            })
          : null}
      </Stack>
    </>
  );
};
export default RadioLayout;
