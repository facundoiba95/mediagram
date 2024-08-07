import React from 'react'
import { ContainerPostInExploreSectionStyles } from './PostInExploreSectionStyles'
import CardPostInExplore from '../../organisms/Cards/CardPostInExplore/CardPostInExplore'
import { useSelector } from 'react-redux'

const PostInExploreSection = ({ posts, index }) => {
    const userAuth = useSelector(state => state.authSlices.user);

    const renderCards = () => {
        return posts.map((post, index) => {
            index = index + 1
            const { _id, thumbnail, postBy, tags, counterViews, counterLikes, counterComments,mediaType, textContent, likes } = post;
            const isLike = likes.some(usr => usr.idUser === userAuth._id);

            return (
                <CardPostInExplore
                    key={index}
                    posts={posts}
                    title={`CARD ${index}`}
                    heightCard={index % 5 == 0}
                    tags={tags}
                    postBy={postBy}
                    thumbnail={thumbnail}
                    counterLikes={counterLikes}
                    counterViews={counterViews}
                    counterComments={counterComments}
                    mediaType={mediaType}
                    textContent={textContent}
                    isLike={isLike}
                    _id={_id}
                />
            )
        })
    }

    return (
        <ContainerPostInExploreSectionStyles index={index} posts={posts.length}>
            {renderCards()}
        </ContainerPostInExploreSectionStyles>
    )
}

export default PostInExploreSection