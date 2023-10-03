import React from 'react'
import { LoaderResponsiveContainerStyles } from './LoaderResponsiveStyles'
import { MoonLoader } from 'react-spinners'
import LogoMediagram from '../../../atoms/LogoMediagram/LogoMediagram'

const LoaderResponsive = () => {
  return (
    <LoaderResponsiveContainerStyles>
        <LogoMediagram />
        <p>LOADING</p>
        <MoonLoader size={20} color='#FF006E'/>
    </LoaderResponsiveContainerStyles>
    )
}

export default LoaderResponsive