import React from 'react'
import { SkeletonCardContentProfileContainerStyles } from './SkeletonCardContentProfileStyles'
import { Skeleton } from '@mui/material'

const SkeletonCardContentProfile = () => {
  return (
    <SkeletonCardContentProfileContainerStyles>
        <Skeleton variant='circular' width={200} height={200} animation='wave'/>
        <span>
            <Skeleton width={300} height={30} variant='rounded'/>
            <Skeleton width={300} height={150} variant='rounded'/>
        </span>
    </SkeletonCardContentProfileContainerStyles>
    )
}

export default SkeletonCardContentProfile