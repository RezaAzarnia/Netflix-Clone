import { Flex, Heading } from "@chakra-ui/react"
import useFetch from "../../hooks/useFetch"
import SwitchButton from "../SwitchButton/SwitchButton"
import { useState } from "react"
import { fetchPopuarMovies } from "../../Services/moviesService"
import MovieSlider from "../MovieSlider/MovieSlider"

const PopularPart = () => {
    const [movieType, setMovieType] = useState("movie")

    const handleChange = (data) => {
        setMovieType(data === "movies" ? "movie" : "tv")
    }

    const { isLoading, query } = useFetch(() => fetchPopuarMovies(movieType), movieType)
    return (
        <>
            <Flex justifyContent={"space-between"} mt={"50px"} alignItems={"center"}>
                <Heading size={"lg"} as={"h1"} >
                    Popular
                </Heading>
                <SwitchButton data={['movies', "tv show"]} onChange={handleChange} />
            </Flex>
            <MovieSlider isLoading={isLoading} movies={query} mediaType={movieType}/>
        </>
    )
}

export default PopularPart