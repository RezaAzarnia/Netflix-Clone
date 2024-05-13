import { Box, Spinner } from "@chakra-ui/react"

const Loader = () => {
    return (
        <Box pos={"fixed"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={999}
            bg={'black'}
        >
            <Spinner color={"red"} pos={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50% , -50%)"} size={'xl'}/>
        </Box>
    )
}

export default Loader