import { Box, Container, Heading, Image, Text } from "@chakra-ui/react"
import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMovieCast, fetchMovieDetail, fetchMovieVideos, fetchRecomendationMovies, fetchSimilarMovies } from "../../Services/moviesService"
import VideoPalyer from "../../Components/VideoPalyer/VideoPalyer"
import Slider from "../../Components/Slider/Slider"
import { SwiperSlide } from "swiper/react"
import MovieCard from '../../Components/MovieCard/MovieCard'
import Loader from "../../Components/Loader/Loader"
import MovieDetailHeroSection from "../../Components/MovieDetailHeroSection/MovieDetailHeroSection"
import { imageUrl } from "../../Services/config"
import ErrorAlert from '../../Components/ErrorAlert/ErrorAlert'
const DetailPage = () => {

    const { type, id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [movieDetail, setMovieDetail] = useState([])
    const [movieCast, setMovieCast] = useState([])
    const [trailerVideo, setTrailerVideo] = useState("")
    const [videos, setVideos] = useState([])
    const [similarMovies, setSimilarMovies] = useState([])
    const [recommendationMovies, setRecommendationMovies] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const getMoviesDetail = async () => {
            try {
                const [moveData, castData, videosData, similarVideos, recommendVideos] = await Promise.all([
                    fetchMovieDetail(type, id),
                    fetchMovieCast(type, id),
                    fetchMovieVideos(type, id),
                    fetchSimilarMovies(type, id),
                    fetchRecomendationMovies(type, id)
                ])
                setMovieDetail(moveData);
                setMovieCast(castData)
                setSimilarMovies(similarVideos?.results)
                setRecommendationMovies(recommendVideos?.results);

                const movieTraier = videosData?.results.find(item => item.type === "Trailer")
                setTrailerVideo(movieTraier)

                const moviesVideos = videosData?.results.filter(video => video.type !== "Trailer")
                setVideos(moviesVideos.slice(0, 10))
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        getMoviesDetail()
    }, [type, id])

    useEffect(() => {
        setIsLoading(true)
    }, [type, id])


    const actorsImages = useMemo(() => {
        return movieCast?.cast?.filter(item => item.profile_path !== null)
    }, [movieCast])


    if (isLoading) {
        return <Loader />
    }
    if (error) {
        return <ErrorAlert error={error}/>
    }
    return (
        <>
            <Box>
                <MovieDetailHeroSection movieCast={movieCast} movieDetail={movieDetail} id={id} type={type} trailerVideo={trailerVideo} />
                <Container maxW="1200px">
                    <Box pb={5}>
                        <Heading fontWeight={500} fontSize={"4xl"}>Top Cast</Heading>
                        <Slider slidesPerView={6}>
                            {
                                actorsImages?.map((actor, index) => {
                                    return (
                                        <SwiperSlide key={index + 1}>
                                            <Box w={"100%"} textAlign={"center"}>
                                                <Image src={`${imageUrl}/${actor.profile_path}`} borderRadius={"full"} h={"175px"} w={"175px"}
                                                    m={"auto"}
                                                    objectFit={"cover"} />
                                                <Text mt={2} fontSize={"lg"}>{actor.original_name}</Text>
                                                <Text color={"gray.400"} fontSize={"md"}>{actor.character}</Text>
                                            </Box>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Slider>
                    </Box>
                    {
                        videos.length > 0 &&
                        <Box py={10}>
                            <Heading fontWeight={500} fontSize={"4xl"}>Official Videos</Heading>
                            <Slider slidesPerView={4} >
                                {
                                    videos?.map(video => {
                                        return (
                                            <SwiperSlide key={video.id} >
                                                <VideoPalyer small={true} id={video?.key} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Slider>
                        </Box>
                    }
                    {
                        similarMovies?.length > 0 &&
                        <Box py={10}>
                            <Heading fontWeight={500} fontSize={"4xl"}>Similar Movies</Heading>
                            <Slider>
                                {
                                    similarMovies?.map(item => <SwiperSlide key={item.id}><MovieCard movie={item} mediaType={type} /></SwiperSlide>)
                                }
                            </Slider>
                        </Box>
                    }
                    {
                        recommendationMovies?.length > 0 &&
                        <Box py={10}>
                            <Heading fontWeight={500} fontSize={"4xl"}>Recommendation</Heading>
                            <Slider>
                                {
                                    recommendationMovies?.map(item => <SwiperSlide key={item.id}><MovieCard movie={item} mediaType={type} /></SwiperSlide>)
                                }
                            </Slider>
                        </Box>
                    }
                </Container>
            </Box >

        </>
    )
}

export default DetailPage