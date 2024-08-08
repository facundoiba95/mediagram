import React from 'react'
import { EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import "./CubeSliderStyles.css";
import FlipSlide from '../FlipSlide/FlipSlide';

const CubeSlider = () => {
  const { closeList } = useSelector(state => state.userSlices);

  const renderSlide = () => {
    return closeList.map((item, index) => {
      const { _id, username, posts, thumbnail } = item;

      return (
        <SwiperSlide key={index}>
          <FlipSlide
            cards={posts}
            thumbnail={thumbnail}
            username={username}
            _id={_id}
          />
        </SwiperSlide>
      )
    })
  }
  return (
    <Swiper
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      loop={"true"}
      pagination={false}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
    >
      {renderSlide()}
    </Swiper>
  );
}

export default CubeSlider