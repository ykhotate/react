import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

const violetBase = '#BA55FF';
const violetMain = alpha(violetBase, 0.7);

// Augment the palette to include a violet color
declare module '@mui/material/styles' {
    interface Palette {
        violet: Palette['primary'];
    }

    interface PaletteOptions {
        violet?: PaletteOptions['primary'];
    }
}

export const theme = createTheme({
    palette: {
        violet: {
            main: violetMain,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.9),
            contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
    },
    // components: {
    //     MuiAppBar: {
    //         styleOverrides: {
    //             root: {
    //                 width: "100%"
    //             }
    //         }
    //     }
    // }
});