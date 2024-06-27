import React from 'react'
import { TrendTagsItemStyles } from '../../molecules/TrendTags/TrendTagsStyles'
import { FaHashtag } from 'react-icons/fa'
import { IoMdStats } from 'react-icons/io'

const ItemTrendTag = ({ name, _id, count }) => {
    return (
        <TrendTagsItemStyles>
            <FaHashtag className='tagIcon' />
            <b>{name}</b>
            <span className='countTag' data-id={_id}>
                <IoMdStats className='rankIcon' />
                <p>{count}</p>
            </span>
        </TrendTagsItemStyles>
    )
}

export default ItemTrendTag