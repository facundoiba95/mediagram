import React from 'react'
import { LoaderWidthVwContainerStyles } from './LoaderWidthVwStyles'
import { MoonLoader } from 'react-spinners'
import LogoMediagram from '../../../atoms/LogoMediagram/LogoMediagram'

const LoaderWidthVw = () => {
  return (
    <LoaderWidthVwContainerStyles>
        <MoonLoader size={60} color='var(--violetpink)'/>
    </LoaderWidthVwContainerStyles>
    )
}

export default LoaderWidthVw