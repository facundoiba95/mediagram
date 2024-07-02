import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const FlipSlide = ({ cards }) => {

    const renderSlide = () => {
        return cards.map(item => (

            <SwiperSlide>
                <img src={item.media_url} />
            </SwiperSlide>
        ))
    }

    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            {renderSlide()}
        </Swiper>
    );
}

export default FlipSlide