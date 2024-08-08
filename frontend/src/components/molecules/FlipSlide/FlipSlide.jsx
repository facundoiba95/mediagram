import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import dateTime from '../../../libs/dateTime';
import './FlipSlideStyles.css'
import { HeadItemHistoryStyles } from '../ItemHistory/ItemHistoryStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../Context/GlobalContext';

const FlipSlide = ({ cards, thumbnail, username, _id }) => {
    const { isOpenHistory, setIsOpenHistory } = useContext(GlobalContext);
    const navigator = useNavigate();
    const params = useParams();

    const goProfile = () => {
        params.username = username;
        setIsOpenHistory(!isOpenHistory);
        navigator(`/profile/${params.username}`)
    }

    const renderSlide = () => {
        return cards.map(item => (
            <SwiperSlide className='history-style'>
                <HeadItemHistoryStyles onClick={goProfile}>
                    {
                        thumbnail
                            ? <img src={thumbnail} alt="" className='imgUser' />
                            : <RiUserSmileFill className='imgProfile' />
                    }
                    <span>
                        <h4>{username}</h4>
                        <small>{dateTime(item.createdAt)}</small>
                    </span>
                </HeadItemHistoryStyles>
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