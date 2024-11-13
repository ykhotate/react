import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components';
import { ThemeProvider } from '@mui/material';
import { theme } from './features';

function AppRoutes() {
	return (
		<BrowserRouter basename={import.meta.env.VITE_BASE || ''}>
			<ThemeProvider theme={theme}>
				<Layout />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default AppRoutes;
