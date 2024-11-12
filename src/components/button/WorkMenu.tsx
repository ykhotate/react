import { Menu } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { NavigateToPrskPage, NavigateToRadioProgram } from "../navigate";

const WorkMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    return (
        <>
            <div>
                <Button
                    onMouseEnter={handleMouseEnter}
                    onClick={handleMouseEnter}
                    aria-controls={"hover-menu"}
                    aria-haspopup="true"
                    color={"inherit"}
                >
                    Work
                </Button>
                <Menu
                    id="hover-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMouseLeave}
                    MenuListProps={{
                        onMouseLeave: handleMouseLeave,
                        onClick: handleMouseLeave
                    }}
                >
                    <NavigateToPrskPage />
                    <NavigateToRadioProgram />
                </Menu>
            </div>
        </>
    );
};
export default WorkMenu;
