import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavigateToHome } from "./navigate";
import { Stack } from "@mui/material";
import { WorkMenu } from "./button";

const Header = () => {
  return (
    <AppBar position="fixed" color="violet" sx={{ width: "100%" }}>
      <Toolbar sx={{ height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
        <Stack direction={"row"}>
          <NavigateToHome />
          <WorkMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
