import React from 'react'
import { LoaderWidthVwContainerStyles } from './LoaderWidthVwStyles'
import { MoonLoader } from 'react-spinners'

const LoaderWidthVw = () => {
  return (
    <LoaderWidthVwContainerStyles>
        <MoonLoader size={60} color='var(--violetpink)'/>
    </LoaderWidthVwContainerStyles>
    )
}

export default LoaderWidthVw