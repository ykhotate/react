import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useRadioProgramStore } from "../store";

const SearchDayInput = () => {
  const day = useRadioProgramStore((state) => state.searchDay);
  const setDay = useRadioProgramStore((state) => state.setSearchDay);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="検索日"
        format="YYYY/MM/DD"
        value={day}
        onChange={(newValue) => setDay(newValue ?? dayjs())}
      />
    </LocalizationProvider>
  );
};
export default SearchDayInput;
