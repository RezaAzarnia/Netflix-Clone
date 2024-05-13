import propTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import { Swiper } from 'swiper/react';
import 'swiper/css';
const Slider = ({ children, slidesPerView = 5 }) => {
    return (
        <Box mt={5}>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                className="mySwiper"
                grabCursor={true}
                breakpoints={{
                    270: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1440: {
                        slidesPerView: slidesPerView
                    }
                }}
            >
                {children}
            </Swiper>
        </Box>
    )
}
Slider.propTypes = {
    children: propTypes.array,
    slidesPerView: propTypes.number
}

export default Slider