<<<<<<< HEAD
import { Skeleton } from '@mui/material'
import React from 'react'
import { ContainerSkeletonCardPostFeedStyles, ContainerSkeletonHeadCardStyles, ContainerSkeletonImageCardStyles } from './SkeletonCardPostFeedStyles'

const SkeletonCardPostFeed = () => {
  return (
    <ContainerSkeletonCardPostFeedStyles>
        <ContainerSkeletonHeadCardStyles>
           <Skeleton width={70} height={60} variant='circular' animation='wave'/>
           <Skeleton width={'100%'} height={100}/>
        </ContainerSkeletonHeadCardStyles>
        <ContainerSkeletonImageCardStyles>
           <Skeleton width={'100%'} height={400} variant='rounded' animation='wave'/>
        </ContainerSkeletonImageCardStyles>
        <Skeleton width={'70%'} height={2000} animation='wave'/>
    </ContainerSkeletonCardPostFeedStyles>
  )
}

=======
import { Skeleton } from '@mui/material'
import React from 'react'
import { ContainerSkeletonCardPostFeedStyles, ContainerSkeletonHeadCardStyles, ContainerSkeletonImageCardStyles } from './SkeletonCardPostFeedStyles'

const SkeletonCardPostFeed = () => {
  return (
    <ContainerSkeletonCardPostFeedStyles>
        <ContainerSkeletonHeadCardStyles>
           <Skeleton width={70} height={60} variant='circular' animation='wave'/>
           <Skeleton width={'100%'} height={100}/>
        </ContainerSkeletonHeadCardStyles>
        <ContainerSkeletonImageCardStyles>
           <Skeleton width={'100%'} height={400} variant='rounded' animation='wave'/>
        </ContainerSkeletonImageCardStyles>
        <Skeleton width={'70%'} height={2000} animation='wave'/>
    </ContainerSkeletonCardPostFeedStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default SkeletonCardPostFeed