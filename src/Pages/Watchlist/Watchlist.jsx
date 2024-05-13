import { useEffect, useState } from "react"
import { useFireStore } from "../../hooks/useFireStore"
import { useAuth } from "../../context/useAuth"
import { Container, Grid, Heading } from "@chakra-ui/react"
import Loader from "../../Components/Loader/Loader"
import ErrorAlert from "../../Components/ErrorAlert/ErrorAlert"
import WatchlistCard from "../../Components/WatchlistCard/WatchlistCard"

const Watchlist = () => {
    const { getWatchlistData, isLoading, removeFromWatchlist } = useFireStore()
    const { user } = useAuth()
    const [watchlist, setWatchlist] = useState([])
    const [isPageLoading, setIsPageLoading] = useState(true)
    const [error, setError] = useState()
    useEffect(() => {
        const getUserWatchlist = async () => {
            try {
                const response = await getWatchlistData(user?.uid)
                setWatchlist(response)
            } catch (error) {
                setError(error)
            } finally {
                setIsPageLoading(false)
            }
        }
        getUserWatchlist()
    }, [user?.uid])

    const removeItem = async (userId, movieId) => {
        await removeFromWatchlist(userId, movieId)
        const newData = watchlist?.filter(item => item.id !== movieId)
        setWatchlist(newData)
    }
    if (isPageLoading) {
        return <Loader />
    }
    if (error) {
        return <ErrorAlert error={error} />
    }
    return (
        <Container pt={"8rem"} maxW={"1200px"}>
            <Grid templateColumns={{
                base: "1fr",
            }} gap={5}>

                {
                    watchlist?.length > 0 ?
                        watchlist?.map(item => {
                            return <WatchlistCard key={item.id} movie={item} isLoading={isLoading} onDelete={() => removeItem(user?.uid, item.id)} />
                        })
                        :
                        <Heading as={'h3'}>Watchlist Is Empty</Heading>
                }
            </Grid>
        </Container>
    )
}

export default Watchlist