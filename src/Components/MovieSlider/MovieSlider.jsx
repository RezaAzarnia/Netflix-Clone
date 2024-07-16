import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider/Slider";
import MovieCard from "../MovieCard/MovieCard";
import MovieSkeletonCard from "../MovieSkeletonCard/MovieSkeletonCard";
import propTypes from 'prop-types';

const MovieSlider = ({ isLoading, movies, mediaType }) => {
    const [renderedMediaType, setRenderedMediaType] = useState(mediaType);

    useEffect(() => {
        if (mediaType !== renderedMediaType) {
            setRenderedMediaType(mediaType);
        }
    }, [mediaType, renderedMediaType]);

    return (
        <Slider>
            {isLoading ? (
                Array.from({ length: 5 }, (_, index) => (
                    <SwiperSlide key={index + 1}><MovieSkeletonCard /></SwiperSlide>
                ))
            ) : (
                movies?.results?.map((movie, index) => (
                    <SwiperSlide key={index + 1}>
                        <MovieCard movie={movie} mediaType={renderedMediaType ? renderedMediaType : movie.media_type} />
                    </SwiperSlide>
                ))
            )}
        </Slider>
    );
};

MovieSlider.propTypes = {
    isLoading: propTypes.bool,
    movies: propTypes.any,
    mediaType: propTypes.string
};

export default MovieSlider;
