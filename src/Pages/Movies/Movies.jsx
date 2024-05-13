import { Container, Flex, Grid, Heading, Select } from '@chakra-ui/react'
import MovieCard from '../../Components/MovieCard/MovieCard'
import { useEffect, useState } from 'react'
import { fetchDiscoverMovies } from '../../Services/moviesService'
import Pagination from '../../Components/Pagination/Pagination'
import MovieSkeletonCard from '../../Components/MovieSkeletonCard/MovieSkeletonCard'
import ErrorAlert from '../../Components/ErrorAlert/ErrorAlert'
const Movies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [sortby, setSortBy] = useState('popularity.desc')
    const [error, setError] = useState('')

    useEffect(() => {
        const discoverMovies = async () => {
            try {
                setIsLoading(true)
                const response = await fetchDiscoverMovies(page, sortby)
                setMovies(response?.results)
                setTotalPage(response?.total_pages)

            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        discoverMovies()
    }, [page, sortby])

    if (error) {
        return <ErrorAlert error={error} />
    }
    return (
        <Container maxW={'container.xl'} margin={"auto"} pt={"8rem"}>
            <Flex alignItems={"center"} gap={"10px"} pb={6} justifyContent={"space-between"} wrap={"wrap"}>
                <Heading as="h2" fontSize="4xl" textTransform="capitalize">discover movies</Heading>
                <Select
                    w={"130px"}
                    onChange={(e) => {
                        setPage(1);
                        setSortBy(e.target.value);
                    }}
                    sx={{
                        '> option': {
                            background: 'blackAlpha.900',
                            color: 'white',
                        },
                    }}
                    value={sortby}
                >
                    <option value="popularity.desc">Popular</option>
                    <option value="vote_average.desc&vote_count.gte=1000">
                        Top Rated
                    </option>
                </Select>

            </Flex>

            <Grid templateColumns={{
                base: "1fr",
                sm: "repeat(2 , 1fr)",
                md: "repeat(3 , 1fr)",
                lg: "repeat(5 , 1fr)",
            }}
                gap={4}
            >
                {
                    isLoading ? Array.from({ length: 20 }).map((item, index) => <MovieSkeletonCard key={index + 1} />) :
                        movies?.map(movie => <MovieCard key={movie.id} movie={movie} mediaType='movie' />)
                }
            </Grid>
            <Pagination page={page} setPage={setPage} totalpage={totalPage} />
        </Container>
    )

}

export default Movies