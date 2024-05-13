import { Container } from "@chakra-ui/react"
import Header from "../../Components/Header/Header"
import Trending from "../../Components/Trending/Trending"
import PopularPart from "../../Components/PopularPart/PopularPart"
import TopRated from "../../Components/TopRated/TopRated"

const Home = () => {
  return (
    <>
      <Header />
      <Container maxW={"1200px"} margin={"auto"}>
        <Trending />
        <PopularPart />
        <TopRated />
      </Container>
    </>
  )
}

export default Home