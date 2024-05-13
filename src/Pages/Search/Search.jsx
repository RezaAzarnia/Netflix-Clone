import { Container, Grid, Image } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import { searchData } from "../../Services/moviesService";
import { useEffect, useState } from "react";
import MovieCard from '../../Components/MovieCard/MovieCard'
import Pagination from "../../Components/Pagination/Pagination";
import Loader from "../../Components/Loader/Loader";
import ErrorAlert from "../../Components/ErrorAlert/ErrorAlert";
const Search = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [page, setpage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [error, setError] = useState('')
    const searchMovies = async () => {
        try {
            const response = await searchData(query, page)
            setMovies(response?.results)
            setTotalPage(response?.total_pages)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        searchMovies()
    }, [query, page])

    if (isLoading) {
        return <Loader />
    }
    if (error) {
        return <ErrorAlert error={error} />
    }

    return (
        <Container maxW={'container.xl'} margin={"auto"} pt={"8rem"}>
            {
                movies?.length > 0 ?
                    <>
                        <Grid
                            templateColumns={{
                                base: "1fr",
                                sm: "repeat(2 , 1fr)",
                                md: "repeat(3 , 1fr)",
                                lg: "repeat(5 , 1fr)",
                            }}
                            gap={5}>
                            {
                                movies?.map(movie => <MovieCard key={movie.id} movie={movie} mediaType={movie.media_type} />)
                            }
                        </Grid>
                        <Pagination page={page} setPage={setpage} totalpage={totalPage} />
                    </>
                    : <Image src="/no-results.png" w={{ base: "100%", md: "50%" }} h={{ base: "100%", md: "50%" }} m={"auto"} />
            }
        </Container>
    )
}

export default Search