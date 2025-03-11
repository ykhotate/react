import { Box, Typography } from '@mui/material';

const GameLayout = () => {
	return (
		<>
			<Typography variant="h3" mt={3} ml={'auto'} mr={'auto'} mb={3}>
				ミニゲーム
			</Typography>
			<Box
				maxWidth={800}
				margin={1}
				border={'dashed thin violet'}
				padding={2}>
				<Typography variant="h4">準備中です</Typography>
			</Box>
		</>
	);
};

export default GameLayout;
