import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import { Axios } from './hooks';
import AppRoutes from './Router';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Axios />
		<AppRoutes />
	</StrictMode>
);
