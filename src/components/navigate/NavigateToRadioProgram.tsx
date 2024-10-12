import { useNavigate } from "react-router-dom";
import { TextButton } from "..";
import { RADIO_PROGRAM_URL } from "../../consts";

const NavigateToRadioProgram = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(RADIO_PROGRAM_URL);
  };
  return (
    <>
      <TextButton text={"ラジオ番組表へ"} onClick={handleClick} />
    </>
  );
};
export default NavigateToRadioProgram;
