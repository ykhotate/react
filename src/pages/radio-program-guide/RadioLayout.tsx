import { Select, Stack } from "@mui/material";
import NavigateToHome from "../../components/navigate/NavigateToHome";
import { useRadioProgramStore } from "./store/useRadioProgramStore";
import { TextButton } from "../../components";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const RadioLayout = () => {
  const programs = useRadioProgramStore((state) => state.programs);
  const day = useRadioProgramStore((state) => state.searchDay);
  const setDay = useRadioProgramStore((state) => state.setSearchDay);
  const fetchPrograms = useRadioProgramStore((state) => state.fetchPrograms);
  const handleUpdate = () => {
    fetchPrograms();
  };
  return (
    <>
      <Stack>
        <NavigateToHome />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="検索日"
            format="YYYY/MM/DD"
            value={day}
            onChange={(newValue) => setDay(newValue ?? dayjs())}
          />
        </LocalizationProvider>
        <TextButton text={"更新"} onClick={handleUpdate} />
        <Select></Select>
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
