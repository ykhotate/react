import { Stack, ThemeProvider } from '@mui/material';

import { SearchDayInput, TimeTable, UpdateButton } from './components';
import { theme } from '../../features';

const RadioLayout = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Stack spacing={1}>
					<SearchDayInput />
					<UpdateButton />
					<TimeTable />
				</Stack>
			</ThemeProvider>
		</>
	);
};
export default RadioLayout;
