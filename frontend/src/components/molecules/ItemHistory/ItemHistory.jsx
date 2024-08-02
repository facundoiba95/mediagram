import React from 'react'
import { ItemHistoryContainerStyles } from './ItemHistoryStyles'
import FlipSlide from '../FlipSlide/FlipSlide'

const ItemHistory = ({ _id, username, thumbnail, posts }) => {

    return (
        <ItemHistoryContainerStyles>
            <FlipSlide 
              cards={posts}
              username={username}
              thumbnail={thumbnail}
              _id={_id}
            />
        </ItemHistoryContainerStyles>
    )
}

export default ItemHistory