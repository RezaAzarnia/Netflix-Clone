import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Box } from "@chakra-ui/react"
import ScrollTopOnNavigation from "../ScrollTopOnNavigation/ScrollTopOnNavigation"

const Layout = () => {
    return (

        <Box pos={"relative"}>
            <Navbar />
            <Box minH={"700px"}>
                <Outlet />
            </Box>
            <Footer />
            <ScrollTopOnNavigation />
        </Box>
    )
}

export default Layout