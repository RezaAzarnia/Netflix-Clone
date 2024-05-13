import { Box } from '@chakra-ui/react'
import propTypes from 'prop-types'

const VideoPalyer = ({ id, small }) => {
    return (
        <Box minW={"300px"} pr={small ? 5 : 0}>
            <iframe
                width="100%"
                height={small ? "100%" : "500"}
                src={`https://www.youtube.com/embed/${id}`}
                allowFullScreen
            >
            </iframe>
        </Box>

    )
}
VideoPalyer.propTypes = {
    id: propTypes.string.isRequired,
    small: propTypes.bool
}



export default VideoPalyer