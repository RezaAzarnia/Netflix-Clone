import { Box, Skeleton, SkeletonCircle } from "@chakra-ui/react"

const MovieSkeletonCard = () => {
    return (
        <Box>
            <Box pos={"relative"}>
                <Skeleton height="280px" />
                <SkeletonCircle pos={"absolute"}
                    bottom={"-20px"}
                    left={"5px"}
                    size={"50px"}
                    zIndex={1} />
            </Box>
            {/* movie detail part */}
            <Box color={"white"} mt={7}>
                <Skeleton height="20px" my={2} />
                <Skeleton height="16px" width="80%" />
            </Box>
        </Box>
    )
}

export default MovieSkeletonCard