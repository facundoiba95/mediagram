import React, { useEffect } from 'react'
import { TrendUsersContainerStyles } from '../TrendUsers/TrendUsersStyles'
import { TrendPostsListStyles } from './TrendPostsStyles'
import ItemTrendPost from '../../atoms/ItemTrendPost/ItemTrendPost'
import { FaFire } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendPosts } from '../../../redux/slices/postSlices/postSlices'

const TrendPosts = () => {
    const { trendPosts } = useSelector(state => state.postSlices);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrendPosts());
    },[]);

    const renderItem = () => {
        return trendPosts.map((item, index) => (
            <ItemTrendPost
                thumbnail={item.thumbnail}
                _id={item._id}
                counterLikes={item.counterLikes}
                counterViews={item.counterViews}
                postBy={item.postBy}
            />
        ))
    }

    return (
        <TrendUsersContainerStyles>
            <h3>Top 4 posts <FaFire className='iconFire'/></h3>
            <TrendPostsListStyles>
                {renderItem()}
            </TrendPostsListStyles>
        </TrendUsersContainerStyles>
    )
}

export default TrendPosts