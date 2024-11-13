import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type ButtonProps = {
	text: string;
	url: string;
	onClick?: () => void;
};

const NavigateButton: React.FC<ButtonProps> = ({ text, url, onClick }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(url);
		if (onClick) {
			onClick();
		}
	};
	return (
		<>
			<Button variant="text" color="inherit" onClick={handleClick}>
				{text}
			</Button>
		</>
	);
};
export default NavigateButton;
