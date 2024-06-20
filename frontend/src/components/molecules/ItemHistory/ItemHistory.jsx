import React from 'react'
import { HeadItemHistoryStyles, ItemHistoryContainerStyles } from './ItemHistoryStyles'
import { RiUserSmileFill } from 'react-icons/ri'
import FlipSlide from '../FlipSlide/FlipSlide'

const ItemHistory = ({ _id, username, thumbnail, posts }) => {
    return (
        <ItemHistoryContainerStyles>
            <HeadItemHistoryStyles>
                {
                    thumbnail
                        ? <img src={thumbnail} alt="" className='imgUser' />
                        : <RiUserSmileFill className='imgProfile' />
                }
                <b>{username}</b>
            </HeadItemHistoryStyles>
            <FlipSlide cards={posts}/>
        </ItemHistoryContainerStyles>
    )
}

export default ItemHistory