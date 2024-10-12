import { useNavigate } from "react-router-dom";
import { TextButton } from "..";
import { HOME_URL } from "../../consts";

const NavigateToHome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(HOME_URL);
  };
  return (
    <>
      <TextButton text={"ホームへ"} onClick={handleClick} />
    </>
  );
};
export default NavigateToHome;
