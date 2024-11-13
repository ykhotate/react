import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

declare module '@mui/material/styles' {
	export interface Palette {
		violet: Palette['primary'];
	}

	export interface PaletteOptions {
		violet?: PaletteOptions['primary'];
	}
}

declare module '@mui/material/AppBar' {
	export interface AppBarPropsColorOverrides {
		violet: true;
	}
}

const violetBase = '#BA55FF';
const violetMain = alpha(violetBase, 0.7);

export const theme = createTheme({
	palette: {
		violet: {
			main: violetMain,
			light: alpha(violetBase, 0.5),
			dark: alpha(violetBase, 0.9),
			contrastText:
				getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111'
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
