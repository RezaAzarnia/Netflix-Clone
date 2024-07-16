import { fetchTrendingMovies } from "../../Services/moviesService"
import useFetch from "../../hooks/useFetch"
import { Flex, Heading } from "@chakra-ui/react"
import SwitchButton from "../SwitchButton/SwitchButton"
import { useCallback, useState } from "react"
import MovieSlider from "../MovieSlider/MovieSlider"

const Trending = () => {
    const [trendingTime, setTrendingTime] = useState("day")

    const handleChange = useCallback((data) => {
        setTrendingTime(data === "day" ? "day" : "week")
    }, [])

    const { isLoading, query } = useFetch(() => fetchTrendingMovies(trendingTime), trendingTime)
    return (
        <>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Heading size={"lg"} as={"h1"} >
                    Trending
                </Heading>
                <SwitchButton data={['day', 'week']} onChange={handleChange} />
            </Flex>
            <MovieSlider isLoading={isLoading} movies={query} />
        </>
    )
}

export default Trending