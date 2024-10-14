import { Box, Stack } from "@mui/material";

type ProgramGridProps = {
  title: string;
  ftl: string;
};

const ProgramGrid: React.FC<ProgramGridProps> = ({ title, ftl }) => {
  return (
    <>
      <Stack direction={"row"}>
        <Box>{ftl.slice(0, 2) + " : " + ftl.slice(2)}</Box>

        <Box>{title}</Box>
      </Stack>
    </>
  );
};
export default ProgramGrid;
