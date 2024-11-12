import { HOME_URL, RADIO_PROGRAM_URL, PRSK_PAGE_URL } from "@/consts";
import { Home, RadioLayout, PrskLayout } from "@/pages";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import { Box } from "@mui/material";


const Layout = () => {
    return (
        <>
            <Header />
            <Box margin={"64px auto 0 auto"} display={"flex"} flexDirection={"column"}>
                <Routes>
                    <Route path={HOME_URL} element={<Home />} />
                    <Route path={RADIO_PROGRAM_URL} element={<RadioLayout />} />
                    <Route path={PRSK_PAGE_URL} element={<PrskLayout />} />
                </Routes>
            </Box>
        </>
    );
};
export default Layout;