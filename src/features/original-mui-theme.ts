import { createTheme } from "@mui/material";

export const originalMuiTheme = () => {
  return createTheme({
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            "&.Mui-expanded": {
              margin: 0,
            },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            "&.Mui-expanded": {
              minHeight: 0,
            },
          },
          content: {
            "&.Mui-expanded": {
              margin: "12px 0",
            },
          },
        },
      },
    },
  });
};
