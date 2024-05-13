import { SwiperSlide } from "swiper/react"
import Slider from "../Slider/Slider"
import MovieCard from "../MovieCard/MovieCard"
import MovieSkeletonCard from "../MovieSkeletonCard/MovieSkeletonCard"
import propTypes from 'prop-types'
const MovieSlider = ({ isLoading, movies, mediaType }) => {
    return (
        <Slider>
            {
                isLoading ? Array.from({ length: 5 }).map((item, index) => <SwiperSlide key={index + 1}><MovieSkeletonCard /></SwiperSlide>) :
                    movies?.results?.map(movie => <SwiperSlide key={movie.id} > <MovieCard movie={movie} mediaType={mediaType ? mediaType : movie.media_type} /></SwiperSlide>)
            }
        </Slider>
    )
}
MovieSlider.propTypes = {
    isLoading: propTypes.bool,
    movies: propTypes.any,
    mediaType: propTypes.string
}
export default MovieSlider