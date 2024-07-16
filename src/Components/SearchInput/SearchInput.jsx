import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchInput = () => {
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
    )
}

export default SearchInput