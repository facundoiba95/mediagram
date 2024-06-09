import React from 'react'
import { ContainerSkeletonCardPostFeedStyles, ContainerSkeletonHeadCardStyles, ContainerSkeletonImageCardStyles } from '../SkeletonCardPostFeed/SkeletonCardPostFeedStyles'
import { Skeleton } from '@mui/material'
import { CardPostInExploreStyles, ContainerPostInExploreSectionStyles } from '../../PostInExploreSection/PostInExploreSectionStyles'

const SkeletonExplorePostSection = () => {
    const lengthSkeleton = [1, 2, 3, 4, 5]

    const renderSkeleton = () => {
        return lengthSkeleton.map((card, index) => {
            return (
                <CardPostInExploreStyles heightCard={index % 5 == 0}><Skeleton width={'100%'} height={'100%'} variant='rounded' animation='wave' /></CardPostInExploreStyles>
            )
        })
    };

    return (
        <ContainerPostInExploreSectionStyles index={2}>
            {renderSkeleton()}
        </ContainerPostInExploreSectionStyles>
    )
}

export default SkeletonExplorePostSection