import { Box, Flex } from "@chakra-ui/react"
import propTypes from "prop-types"
import { useState } from "react"

const SwitchButton = ({ data, onChange }) => {
    const [dataIndex, setDataIndex] = useState(0)
    const [left, setLeft] = useState(0)

    const changeTab = (data, index) => {
        setLeft(index * 100)
        setDataIndex(index)
        onChange(data[index])
    }

    return (
        <>
            <Flex bg={"white"}
                textAlign={"center"}
                textTransform={"capitalize"}
                alignItems={"center"}
                borderRadius={"full"}
                padding={3}
                minW={{ base: "160px", md: "200px" }}
                h={"45px"}
                pos={"relative"}
                color={"black"}
                zIndex={0}
            >
                <Box bg={"linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%)"}
                    h={"85%"}
                    width={"48%"}
                    zIndex={-1}
                    pos={"absolute"}
                    left={"3px"}
                    transition={"transform 0.5s, color 0.5s"}
                    borderRadius={"full"}
                    transform={`translateX(${left}%)`}
                ></Box>
                {
                    data.map((item, index) => {
                        return (
                            <Box w={"50%"}
                                cursor={"pointer"}
                                color={index === dataIndex && "white"}
                                key={index + 1}
                                onClick={() => changeTab(data, index)}
                                fontSize={{ base: "13px", md: "16px" }}
                            >
                                {item}
                            </Box>
                        )
                    })
                }

            </Flex>
        </>
    )
}

SwitchButton.propTypes = {
    data: propTypes.array.isRequired,
    onChange: propTypes.func.isRequired,

}

export default SwitchButton