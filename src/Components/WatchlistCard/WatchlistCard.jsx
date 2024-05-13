/* eslint-disable react/prop-types */
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { imageUrl } from '../../Services/config'
import noPicture from "/public/no-poster-af8294eb.png"
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const WatchlistCard = ({ movie, isLoading, onDelete }) => {
    return (
        <Card
            direction={{ base: 'column', md: 'row' }}
            overflow='hidden'
            bg={"transparent"}
            color={"white"}
            maxH={{ base: "100%", md: "350px" }}
        >
            <Image src={`${movie?.poster_path ? imageUrl + "/" + movie?.poster_path : noPicture}`}
                objectFit='cover'
                maxW={{ base: '100%', md: '350px' }}
            />
            <Stack >
                <CardBody
                    display={"flex"} flexDirection={"column"} justifyContent={"space-between"}
                >
                    <Heading size='md'>
                        <Link to={`/detail/${movie.type}/${movie.id}`}>
                            {movie?.title || movie?.name}
                        </Link>
                    </Heading>
                    <Text py='2'>
                        {movie?.overview}
                    </Text>
                    <Text fontSize={"small"} color={"gray.500"}>{new Date(movie?.release_date || movie?.first_air_date).toLocaleDateString('en', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })} </Text>
                    <Text display={"flex"} alignItems={"center"} gap={1}>
                        <FaStar />
                        {movie?.vote_average}
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='red' isLoading={isLoading} onClick={onDelete}>
                        remove
                    </Button>
                </CardFooter>
            </Stack>
        </Card>)
}

export default WatchlistCard