import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import { Axios } from './hooks';
import AppRoutes from './Router';
import { theme } from './features';
import { ThemeProvider } from '@mui/material';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Axios />
		<ThemeProvider theme={theme}>
			<AppRoutes />
		</ThemeProvider>
	</StrictMode>
);
