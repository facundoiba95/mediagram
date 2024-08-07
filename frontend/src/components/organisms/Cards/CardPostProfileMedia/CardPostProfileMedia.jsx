import React from 'react'
import { CardPostProfileMediaContainerStyles } from '../CardContentProfile/CardContentProfileStyles'
import IconVideo from '../../../atoms/IconVideo/IconVideo'
import { FaComment, FaEye, FaHeart } from 'react-icons/fa'
import { VIDEO } from '../../../../libs/mediaType'

const CardPostProfileMedia = ({
    isLike,
    thumbnail,
    mediaType,
    counterComments,
    counterLikes,
    counterViews,
    goPost
}) => {
    return (
        <CardPostProfileMediaContainerStyles onClick={goPost} isLike={isLike}>
            <img src={thumbnail} alt="img content profile user" className='imgContent' />
            {
                mediaType === VIDEO
                    ? <IconVideo />
                    : <></>
            }
            <span className='overlay'>
                <span className='containerIconPost'>
                    <span><FaHeart className='iconHeart' />{counterLikes}</span>
                    <span><FaEye className='iconView' />{counterViews}</span>
                    <span><FaComment className='iconComment' />{counterComments}</span>
                </span>
            </span>
        </CardPostProfileMediaContainerStyles>
    )
}

export default CardPostProfileMedia