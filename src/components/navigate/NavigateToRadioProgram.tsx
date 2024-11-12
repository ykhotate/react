import { useNavigate } from "react-router-dom";
import { RADIO_PROGRAM_URL } from "../../consts";
import { MenuItem } from "@mui/material";

const NavigateToRadioProgram = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(RADIO_PROGRAM_URL);
  };
  return (
    <>
      <MenuItem onClick={handleClick}>ラジオ番組表へ</MenuItem>
    </>
  );
};
export default NavigateToRadioProgram;
