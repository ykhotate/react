import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavigateToHome } from "./navigate";

const Header = () => {
  return (
      <AppBar position="sticky">
        <Toolbar disableGutters>
          <NavigateToHome />
        </Toolbar>
      </AppBar>
  );
};
export default Header;
