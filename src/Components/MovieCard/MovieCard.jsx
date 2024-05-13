import { Box, Image, Text } from '@chakra-ui/react'
import { imageUrl } from '../../Services/config'
import { Link } from 'react-router-dom'
import propTypes from "prop-types"
import noPicture from "/public/no-poster-af8294eb.png"
import RatingBoard from '../RatingBoard/RatingBoard'
const MovieCard = ({ movie, mediaType }) => {
    return (
        <Link to={`/detail/${mediaType}/${movie.id}`}>
            <Box>
                <Box pos={"relative"}>
                    <Box pos={"absolute"}
                        bottom={"-20px"}
                        left={0}
                        zIndex={1}>
                        {
                            movie?.vote_average &&
                            <RatingBoard voteAverage={movie?.vote_average} size={"50px"} />
                        }
                    </Box>

                    <Image src={`${movie?.poster_path ? imageUrl + "/" + movie?.poster_path : noPicture}`}
                        alt={movie?.title || movie?.name}
                        h={"100%"}
                        minH={"326px"}
                        borderRadius={5}
                    />
                </Box>
                {/* movie deatil part */}
                <Box color={"white"} mt={6}>
                    <Text fontSize={"md"} mt={2}>{movie?.title || movie?.name} </Text>
                    <Text fontSize={"small"} color={"gray.500"}>{new Date(movie?.release_date || movie?.first_air_date).toLocaleDateString('en', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })} </Text>
                </Box>
            </Box>
        </Link >
    )
}

MovieCard.propTypes = {
    movie: propTypes.object.isRequired,
    mediaType: propTypes.string.isRequired,

}


export default MovieCard