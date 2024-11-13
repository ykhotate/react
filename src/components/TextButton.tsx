import { Button } from '@mui/material';

type ButtonProps = {
	text: string;
	onClick: () => void;
};

const TextButton: React.FC<ButtonProps> = ({ text, onClick }) => {
	return (
		<>
			<Button variant="contained" onClick={onClick}>
				{text}
			</Button>
		</>
	);
};
export default TextButton;
