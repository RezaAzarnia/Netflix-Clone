import { useState } from "react"
import useFetch from "../../hooks/useFetch"
import { fetchTopRatedmovies } from "../../Services/moviesService"
import { Flex, Heading } from "@chakra-ui/react"
import SwitchButton from "../SwitchButton/SwitchButton"
import MovieSlider from "../MovieSlider/MovieSlider"

const TopRated = () => {
    const [movieType, setMovieType] = useState("movie")

    const handleChange = (data) => {
        setMovieType(data === "movies" ? "movie" : "tv")
    }

    const { isLoading, query } = useFetch(() => fetchTopRatedmovies(movieType), movieType)
    return (
        <>
            <Flex justifyContent={"space-between"} mt={"50px"} alignItems={"center"}>
                <Heading size={"lg"} as={"h1"} >
                    Top Rated
                </Heading>
                <SwitchButton data={['movies', "tv show"]} onChange={handleChange} />
            </Flex>
            <MovieSlider isLoading={isLoading} movies={query} mediaType={movieType} />
        </>
    )
}

export default TopRated