import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import { Axios } from './hooks';
import AppRoutes from './Router';
import { ThemeProvider } from '@emotion/react';
import { originalMuiTheme } from './features';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Axios />
		<ThemeProvider theme={originalMuiTheme()}>
			<AppRoutes />
		</ThemeProvider>
	</StrictMode>
);
