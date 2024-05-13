import { useEffect, useMemo, useState } from 'react'
import { useFireStore } from '../../hooks/useFireStore'
import { Badge, Box, Button, Container, Flex, Heading, Image, Stack, Text, useDisclosure, useToast } from '@chakra-ui/react'
import RatingBoard from '../RatingBoard/RatingBoard'
import { IoPlayOutline } from 'react-icons/io5'
import propTypes from 'prop-types'
import { converNumberToTime } from '../../utils/helpers'
import { FaPlus } from 'react-icons/fa6'
import { imageOriginalUrl, imageUrl } from '../../Services/config'
import { useAuth } from '../../context/useAuth'
import VideoModal from '../VideoModal/VideoModal'
import { VscClose } from "react-icons/vsc";



const MovieDetailHeroSection = ({ id, type, movieDetail, movieCast, trailerVideo }) => {
    const { user } = useAuth()
    const toast = useToast()
    const { addToWatchlist, isExitInWatchList, removeFromWatchlist, isLoading } = useFireStore();
    const [inWatchList, setInWatchlist] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const checkWatchList = async () => {
        const res = await isExitInWatchList(user?.uid, id)
        setInWatchlist(res)

    }
    useEffect(() => {
        checkWatchList()
    }, [id, user])


    const title = movieDetail?.name || movieDetail?.title
    const releaseDate = type == "tv" ? movieDetail?.first_air_date : movieDetail?.release_date


    const directorName = useMemo(() => {
        return movieCast?.crew?.filter(item => item.job == "Director" || item.job === "Executive Producer").slice(0, 5)
    }, [movieCast])

    const wirtterNames = useMemo(() => {
        return movieCast?.crew?.filter(item => item.department == "Writing");
    }, [movieCast])
    const handleAddWatchList = async () => {
        if (!user) {
            toast({
                title: "Error",
                description: "login to add to watchlist",
                status: "error",
                position: "top-right",
                isClosable: true,
            })
            return
        }

        const movieData = {
            id: movieDetail?.id,
            title: movieDetail?.title || movieDetail?.name,
            type,
            poster_path: movieDetail?.poster_path,
            release_date: movieDetail?.release_date || movieDetail?.first_air_date,
            vote_average: movieDetail?.vote_average,
            overview: movieDetail?.overview,
        }
        await addToWatchlist(user?.uid, movieData?.id, movieData)
        await checkWatchList()
    }
    const handleRemoveWatchlist = async () => {
        await removeFromWatchlist(user?.uid, id)
        await checkWatchList()
    }
    return (
        <>
            {
                isOpen && <VideoModal isOpen={isOpen} onClose={onClose} id={trailerVideo?.key} />
            }
            {movieDetail &&
                <Box pos={"relative"}>
                    <Box
                        background={`
                          url(${imageOriginalUrl}/${movieDetail?.backdrop_path})`
                        }
                        backgroundPosition={"center"}
                        backgroundSize={"cover"}
                        pos={"absolute"}
                        top={0}
                        left={0}
                        zIndex={-1}
                        opacity={0.09}
                        w={"100%"}
                        h={{ base: "100%" }}
                    >
                    </Box>
                    <Box
                        width={"100%"}
                        height={"200px"}
                        background={"linear-gradient(rgba(4, 21, 45, 0) 0%, rgb(9 9 9) 79.17%)"}
                        pos={"absolute"}
                        bottom={0}
                        left={0}
                    >
                    </Box>
                    <Container maxW={'1200px'} pt={"8rem"} pb={"5rem"}>

                        <Flex alignItems={"center"} gap={"30px"} direction={{ base: "column", md: "row" }}>
                            <Image src={`${imageUrl}/${movieDetail?.poster_path}`} h={"525px"} maxW={"350px"} flex={1} />
                            <Flex direction={"column"}>
                                <Heading fontSize={"3xl"} >
                                    {title}{" "}
                                    <Text as="span">{new Date(releaseDate).getFullYear()}</Text>
                                    <Text color={"gray.400"} fontStyle={"italic"} fontWeight={"400"} fontSize={"sm"} my={3}>
                                        {movieDetail?.tagline}
                                    </Text>
                                </Heading>
                                <Box>
                                    {
                                        movieDetail?.genres.map(item => <Badge
                                            key={item.id}
                                            py={1.5}
                                            px={3}
                                            mr={1}
                                            bg={"pink.500"}
                                            fontSize={"10px"}
                                            color={"white"}
                                            textTransform={"capitalize"}
                                            fontWeight={600}
                                        >{item.name}</Badge>)
                                    }
                                </Box>


                                <Flex alignItems={"center"} gap={"10px"} my={6} justifyContent={"space-between"} wrap={"wrap"} >
                                    <Flex alignItems={"center"} gap={"10px"} >
                                        <RatingBoard voteAverage={movieDetail?.vote_average} />
                                        {/* trailer play button */}
                                        <Button variant={"outline"}
                                            borderRadius={"50%"}
                                            colorScheme={"white"}
                                            width={"60px"}
                                            height={"60px"}
                                            fontSize={"2xl"}
                                            display={"flex"}
                                            alignItems={"center"}
                                            justifyContent={"flex-end"}
                                            onClick={onOpen}
                                        >
                                            <IoPlayOutline />
                                        </Button>
                                        <Text display={{
                                            base: "none",
                                            md: "initial"
                                        }} fontSize={"l"}
                                            textTransform={"uppercase"}
                                        >
                                            watch trailer
                                        </Text>
                                    </Flex>
                                    {
                                        !inWatchList ?
                                            <Button
                                                borderRadius={"5px"}
                                                variant={"outline"}
                                                colorScheme="white"
                                                maxW={"200px"}
                                                fontSize={"medium"}
                                                leftIcon={<FaPlus />}
                                                onClick={handleAddWatchList}
                                                isDisabled={inWatchList}
                                                isLoading={isLoading}
                                            >
                                                Add To WatchList
                                            </Button> :
                                            <Button borderRadius={"5px"}
                                                variant={"outline"}
                                                colorScheme="red"
                                                maxW={"200px"}
                                                fontSize={"medium"}
                                                leftIcon={<VscClose />}
                                                onClick={handleRemoveWatchlist}
                                                isLoading={isLoading}
                                            >
                                                Remove From Watchlist
                                            </Button>
                                    }
                                </Flex>

                                {/* start overview part */}
                                <Heading fontSize={"2xl"} mb={5} >Overview</Heading>
                                <Text as={"span"} style={{ textWrap: "wrap" }} pr={{ base: 0, md: "100px" }}>
                                    {movieDetail?.overview}
                                </Text>
                                {/* finish overview part */}
                                <Stack borderBottom={"0.5px solid gray"} mt={5} direction={['column', 'row']} spacing='25px'>
                                    <Box>
                                        <Text as={"span"} fontSize={"md"} >Status : </Text>
                                        <Text as={"span"} fontSize={"sm"} color={"gray.400"}>{movieDetail?.status}</Text>
                                    </Box>
                                    {
                                        movieDetail?.release_date &&
                                        <Box>
                                            <Text as={"span"} fontSize={"md"} >Release Date : </Text>
                                            <Text as={"span"} fontSize={"sm"} color={"gray.400"}>{new Date(movieDetail?.release_date).toLocaleDateString("en", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric"
                                            })}</Text>
                                        </Box>
                                    }
                                    {
                                        movieDetail?.runtime &&
                                        <Box>
                                            <Text as={"span"} fontSize={"md"} >Runtime : </Text>
                                            <Text as={"span"} fontSize={"sm"} color={"gray.400"}>{converNumberToTime(movieDetail?.runtime)}</Text>
                                        </Box>
                                    }
                                </Stack>
                                {
                                    directorName?.length > 0 &&
                                    <Stack borderBottom={"0.5px solid gray"} mt={5} direction={['column', 'row']} spacing='24px'>
                                        <Box>
                                            <Text as={"span"} fontSize={"md"} >Director : </Text>
                                            <Text as={"span"} fontSize={"sm"} color={"gray.400"}>
                                                {directorName?.map(director => director.name).join(' , ')}
                                            </Text>
                                        </Box>
                                    </Stack>
                                }
                                {
                                    wirtterNames.length > 0 &&
                                    <Stack borderBottom={"0.5px solid gray"} mt={5} direction={['column', 'row']} spacing='24px'>
                                        <Box>
                                            <Text as={"span"} fontSize={"lg"} >Writer : </Text>
                                            <Text as={"span"} fontSize={"sm"} color={"gray.400"}>
                                                {wirtterNames?.map(item => item.name).join(' , ')}
                                            </Text>
                                        </Box>
                                    </Stack>
                                }
                            </Flex>
                        </Flex>
                    </Container>
                </Box>
            }
        </>
    )
}
MovieDetailHeroSection.propTypes = {
    id: propTypes.string,
    type: propTypes.string,
    movieDetail: propTypes.object,
    movieCast: propTypes.object,
    trailerVideo: propTypes.any


}
export default MovieDetailHeroSection