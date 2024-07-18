import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';
import "./BasicSliderStyles.css"

const BasicSlider = ({ data, itemSlide }) => {
    const renderItems = () => {
        return data.map((item, index) => (
            <SwiperSlide key={index}>
                {itemSlide(item)}
            </SwiperSlide>
        ))
    }

    return (
        <Swiper
            grabCursor={true}
            pagination={true}
            // modules={[Pagination]}
            // slidesPerView={1}
            // slidesPerGroup={1}
            loop={false}
        >
            {renderItems()}
        </Swiper>
    )
}

export default BasicSlider