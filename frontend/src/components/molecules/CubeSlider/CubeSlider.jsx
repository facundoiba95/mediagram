import React from 'react'
import { EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import "./CubeSliderStyles.css";
import ItemHistory from '../ItemHistory/ItemHistory';

const CubeSlider = () => {
  const { closeList } = useSelector(state => state.userSlices);
  const stylesSlide = {
    height: "100%"
  }


  const renderSlide = () => {
    return closeList.map((item, index) => {
      const { _id, username, posts, thumbnail } = item;
      
      return (
        <SwiperSlide style={stylesSlide} key={index}>
          <ItemHistory 
          _id={_id}
          username={username}
          posts={posts}
          thumbnail={thumbnail}
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
        { renderSlide() }
      </Swiper>
  );
}

export default CubeSlider