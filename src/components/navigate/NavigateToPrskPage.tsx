import { useNavigate } from "react-router-dom";
import { TextButton } from "..";
import { PRSK_PAGE_URL } from "../../consts";

const NavigateToPrskPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(PRSK_PAGE_URL);
  };
  return (
    <>
      <TextButton text={"プロセカのページへ"} onClick={handleClick} />
    </>
  );
};
export default NavigateToPrskPage;
