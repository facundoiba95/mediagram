import React from 'react'
import { ContainerPostInExploreSectionStyles } from './PostInExploreSectionStyles'
import CardPostInExplore from '../CardPostInExplore/CardPostInExplore'

const PostInExploreSection = ({ posts, index }) => {
    const renderCards = () => {
        return posts.map((post, index) => {
            index = index + 1
            const { _id, thumbnail, postBy, tags, counterViews, counterLikes } = post;
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