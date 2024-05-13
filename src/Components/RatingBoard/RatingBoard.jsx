import { CircularProgress, CircularProgressLabel, Text } from "@chakra-ui/react"
import propTypes from 'prop-types'
import { voteRateColor } from "../../utils/helpers"
const RatingBoard = ({ voteAverage, size = "70px" }) => {
    return (
        <CircularProgress
            size={size}
            value={voteAverage * 10}
            bg={"gray.800"}
            color={voteRateColor(voteAverage)}
            thickness={"6px"}
            borderRadius={"full"}
        >
            <CircularProgressLabel>
                {voteAverage?.toFixed(1)}
                <Text as={"span"} fontSize={"10px"}>%</Text>
            </CircularProgressLabel>
        </CircularProgress>
    )
}


RatingBoard.propTypes = {
    voteAverage: propTypes.number.isRequired,
    size: propTypes.string
}


export default RatingBoard