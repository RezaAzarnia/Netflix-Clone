import { Box, Heading, Text } from "@chakra-ui/react"
import SearchInput from "../SearchInput/SearchInput"
const Header = () => {

    return (
        <Box pos={"relative"}>
            <Box
                background={"url(./header.jpg)"}
                w={"100%"}
                h={"750px"}
                backgroundSize={"cover"}
                backgroundRepeat={"no-repeat"}
            >
                <Box pos={"absolute"}
                    top={"50%"}
                    left={"50%"}
                    transform={"translate(-50% , -50%)"}
                    zIndex={10}
                    textAlign={"center"}
                    w={"100%"}
                >
                    <Heading
                        as={"h1"}
                        color={"white"}
                        gridColumn={"2"}
                        gridRow={2}
                        textTransform={"capitalize"}
                        fontSize={{ base: '4rem', md: "5rem" }}
                        fontFamily={"san-serif"}

                    >Welcome.
                    </Heading>
                    <Text
                        as="span"
                        textTransform={"capitalize"}>
                        millions of movies, Tv shows and people to discover.explore now.
                    </Text>
                    <SearchInput />

                </Box>
            </Box>
            <Box pos={"absolute"} background={"linear-gradient(rgba(4, 21, 45, 0) 0%, rgb(9 9 9) 79.17%)"} right={0}
                left={0} bottom={0} top={0} zIndex={1}>
            </Box>
        </Box>
    )
}



export default Header