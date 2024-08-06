<<<<<<< HEAD
import React, { useContext } from 'react'
import { TrendTagsItemStyles } from '../../molecules/TrendTags/TrendTagsStyles'
import { FaHashtag } from 'react-icons/fa'
import { IoMdStats } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { getVisiblePosts } from '../../../redux/slices/postSlices/postSlices'
import { setNameTag } from '../../../redux/slices/tagSlices/tagSlices'
import { GlobalContext } from '../../../Context/GlobalContext'

const ItemTrendTag = ({ name, _id, count }) => {
    const dispatch = useDispatch();
    const { isOpenTrendTags, setIsOpenTrendTags } = useContext(GlobalContext);

    const setVisiblePost = (e) => {
        const nameTag = e.currentTarget.dataset.name;
        dispatch(setNameTag(nameTag));
        setIsOpenTrendTags(!isOpenTrendTags);
    };

    return (
        <TrendTagsItemStyles data-name={name} onClick={(e) => setVisiblePost(e)}>
            <FaHashtag className='tagIcon' />
            <b>{name}</b>
            <span className='countTag' data-id={_id}>
                <IoMdStats className='rankIcon' />
                <p>{count}</p>
            </span>
        </TrendTagsItemStyles>
    )
}

=======
import React, { useContext } from 'react'
import { TrendTagsItemStyles } from '../../molecules/TrendTags/TrendTagsStyles'
import { FaHashtag } from 'react-icons/fa'
import { IoMdStats } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { getVisiblePosts } from '../../../redux/slices/postSlices/postSlices'
import { setNameTag } from '../../../redux/slices/tagSlices/tagSlices'
import { GlobalContext } from '../../../Context/GlobalContext'

const ItemTrendTag = ({ name, _id, count }) => {
    const dispatch = useDispatch();
    const { isOpenTrendTags, setIsOpenTrendTags } = useContext(GlobalContext);

    const setVisiblePost = (e) => {
        const nameTag = e.currentTarget.dataset.name;
        dispatch(setNameTag(nameTag));
        setIsOpenTrendTags(!isOpenTrendTags);
    };

    return (
        <TrendTagsItemStyles data-name={name} onClick={(e) => setVisiblePost(e)}>
            <FaHashtag className='tagIcon' />
            <b>{name}</b>
            <span className='countTag' data-id={_id}>
                <IoMdStats className='rankIcon' />
                <p>{count}</p>
            </span>
        </TrendTagsItemStyles>
    )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ItemTrendTag