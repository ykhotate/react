import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from './features';
import {
	HOME_URL,
	RADIO_PROGRAM_URL,
	PRSK_PAGE_URL,
	WORK_URL,
	PROFILE_URL,
	DEV_URL
} from './consts';
import {
	Home,
	RadioLayout,
	PrskLayout,
	WorkLayout,
	ProfileLayout,
	PersonalDevelopLayout
} from './pages';
import HeaderLayout from './components/HeaderLayout';

function AppRoutes() {
	return (
		<BrowserRouter basename={import.meta.env.VITE_BASE || ''}>
			<ThemeProvider theme={theme}>
				<Box
					margin={'64px auto 0 auto'}
					display={'flex'}
					flexDirection={'column'}>
					<Routes>
						<Route path="/" element={<HeaderLayout />}>
							<Route path={HOME_URL} element={<Home />} />
							<Route
								path={RADIO_PROGRAM_URL}
								element={<RadioLayout />}
							/>
							<Route
								path={PRSK_PAGE_URL}
								element={<PrskLayout />}
							/>
							<Route path={WORK_URL} element={<WorkLayout />} />
							<Route
								path={PROFILE_URL}
								element={<ProfileLayout />}
							/>
							<Route
								path={DEV_URL}
								element={<PersonalDevelopLayout />}
							/>
						</Route>
					</Routes>
				</Box>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default AppRoutes;
