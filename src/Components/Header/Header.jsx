import { Box, Button, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const [searchValue, setSearchValue] = useState('')
    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }
    const navigate = useNavigate()
    const handleSearch = () => {
        if (searchValue !== "") {
            navigate(`/search?query=${searchValue}`)
            setSearchValue('')
        }
    }
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

                    <InputGroup mt={5} mx={"auto"}
                        maxW={"590px"}
                        w={"100%"}
                    >
                        <Input
                            borderRadius={"full"}
                            bg={"white"}
                            placeholder="search for a movie or Tv show..."
                            color={"gray.800"}
                            h={"45px"}
                            value={searchValue}
                            onChange={handleInputChange}
                            onKeyDown={(e) => {
                                e.keyCode === 13 &&
                                    handleSearch()
                            }}
                            _focusVisible={{ borderColor: "none" }}
                            _placeholder={{ fontSize: { base: "13px", md: "16px" }, color: "gray.600" }}
                        />
                        <InputRightElement
                            minW={"120px"}
                            h={"100%"}
                        >
                            <Button
                                borderTopRightRadius={"full"}
                                borderBottomRightRadius={"full"}
                                bg={"linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%)"}
                                color={"white"}
                                size={"md"}
                                w={"100%"}
                                h={"100%"}
                                _hover={{ background: "linear-gradient(98.37deg, #e6a636 0.99%, #c72c5b 100%)" }}
                                onClick={handleSearch}
                            >
                                Search
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </Box>
            <Box pos={"absolute"} background={"linear-gradient(rgba(4, 21, 45, 0) 0%, rgb(9 9 9) 79.17%)"} right={0}
                left={0} bottom={0} top={0} zIndex={1}>
            </Box>
        </Box>
    )
}



export default Header