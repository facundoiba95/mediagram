import React from 'react'
import {  MoonLoader } from 'react-spinners'
import { LoaderBoxContainerStyle, LoaderContainerStyle } from './LoaderStyles'

const Loader = () => {
  return (
    <LoaderContainerStyle>
        <LoaderBoxContainerStyle>
          <MoonLoader size={50} color='crimson'/>
          <h2>LOADING</h2>
        </LoaderBoxContainerStyle>
    </LoaderContainerStyle>
  )
}

export default Loader