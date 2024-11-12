import { useNavigate } from "react-router-dom";
import { PRSK_PAGE_URL } from "../../consts";
import { MenuItem } from "@mui/material";

const NavigateToPrskPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(PRSK_PAGE_URL);
  };
  return (
    <>
      <MenuItem onClick={handleClick}>プロセカのページへ</MenuItem>
    </>
  );
};
export default NavigateToPrskPage;
