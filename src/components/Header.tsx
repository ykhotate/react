import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavigateToHome } from "./navigate";
import { Stack } from "@mui/material";
import TimeTableIcon from "./TimeTableIcon";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }} mb={5}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Stack sx={{ flexGrow: 1 }}>
            <TimeTableIcon />
            <Typography variant="h4">番組表</Typography>
            <Typography variant="h6">-TimeTable-</Typography>
          </Stack>
          <NavigateToHome />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
