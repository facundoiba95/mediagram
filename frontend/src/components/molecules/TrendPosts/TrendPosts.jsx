import React, { useEffect } from 'react'
import { TrendUsersContainerStyles } from '../TrendUsers/TrendUsersStyles'
import { TrendPostsListStyles } from './TrendPostsStyles'
import { FaFire } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import { getTrendPosts } from '../../../redux/slices/postSlices/postSlices'
import CardTrendPost from '../../organisms/Cards/CardTrendPost/CardTrendPost';

const TrendPosts = () => {
    const { trendPosts } = useSelector(state => state.postSlices);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrendPosts());
    },[]);

    const renderItem = () => {
        return trendPosts.map((item, index) => (
            <CardTrendPost
                thumbnail={item.thumbnail}
                _id={item._id}
                counterLikes={item.counterLikes}
                counterViews={item.counterViews}
                postBy={item.postBy}
                mediaType={item.mediaType}
                textContent={item.textContent}
                key={index}
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