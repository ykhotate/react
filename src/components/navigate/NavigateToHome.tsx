import { useNavigate } from "react-router-dom";
import { HOME_URL } from "../../consts";
import Button from "@mui/material/Button";

const NavigateToHome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(HOME_URL);
  };
  return (
    <>
      <Button color={"inherit"} onClick={handleClick}>
        HOME
      </Button>
    </>
  );
};
export default NavigateToHome;
