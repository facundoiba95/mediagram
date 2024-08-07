import React from 'react'
import { Skeleton } from '@mui/material'
import { CardPostInExploreStyles, ContainerPostInExploreSectionStyles } from '../../PostInExploreSection/PostInExploreSectionStyles'

const SkeletonExplorePostSection = () => {
    const lengthSkeleton = [1, 2, 3, 4, 5]

    const renderSkeleton = () => {
        return lengthSkeleton.map((card, index) => (
            <CardPostInExploreStyles heightCard={index % 5 == 0}>
                <Skeleton width={'100%'} height={'100%'} variant='rounded' animation='wave' />
            </CardPostInExploreStyles>
        ))
    }; 

    return (
        <ContainerPostInExploreSectionStyles index={2} posts={lengthSkeleton.length}>
            {renderSkeleton()}
        </ContainerPostInExploreSectionStyles>
    )
}

export default SkeletonExplorePostSection