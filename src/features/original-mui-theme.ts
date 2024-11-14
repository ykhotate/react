import { createTheme } from '@mui/material';
import { amber } from '@mui/material/colors';

export const theme = createTheme({
	palette: {
		primary: {
			main: amber[100],
			light: amber[50],
			dark: amber[200]
		}
	},
	components: {
		MuiAccordion: {
			styleOverrides: {
				root: {
					'&.Mui-expanded': {
						margin: 0
					}
				}
			}
		},
		MuiAccordionSummary: {
			styleOverrides: {
				root: {
					'&.Mui-expanded': {
						minHeight: 0
					}
				},
				content: {
					'&.Mui-expanded': {
						margin: '12px 0'
					}
				}
			}
		}
	}
});
