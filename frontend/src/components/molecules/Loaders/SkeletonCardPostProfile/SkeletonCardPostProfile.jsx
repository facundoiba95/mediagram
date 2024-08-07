import React from 'react'
import { SkeletonCardPostProfileContainerStyles } from './SkeletonCardPostProfileStyles'
import { Skeleton } from '@mui/material'

const SkeletonCardPostProfile = () => {
  return (
    <SkeletonCardPostProfileContainerStyles>
        <Skeleton width={'100%'} height={300} variant='rounded'/>
        <span>
          <Skeleton width={60} height={60} variant='circular' />
          <Skeleton width={285} height={60} variant='rounded'/>
        </span>
    </SkeletonCardPostProfileContainerStyles>
    )
}

<<<<<<< HEAD
=======
import React from 'react'
import { SkeletonCardPostProfileContainerStyles } from './SkeletonCardPostProfileStyles'
import { Skeleton } from '@mui/material'

const SkeletonCardPostProfile = () => {
  return (
    <SkeletonCardPostProfileContainerStyles>
      <Skeleton width={'100%'} height={300} variant='rounded' />
      <span>
        <Skeleton width={60} height={60} variant='circular' />
        <Skeleton width={285} height={60} variant='rounded' />
      </span>
    </SkeletonCardPostProfileContainerStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
=======
>>>>>>> parent of 60d7322 (first commit in Ubuntu)
export default SkeletonCardPostProfile