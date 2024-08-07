import React from 'react'
import { LoaderCreatePostBoxStyles, LoaderCreatePostContainerStyles } from './LoaderCreatePostStyles'
import { MoonLoader } from 'react-spinners';

const LoaderCreatePost = () => {
  return (
    <LoaderCreatePostContainerStyles>
        <LoaderCreatePostBoxStyles>
            <h2>Creando contenido</h2>
            <MoonLoader size={50} color={'crimson'}/>
        </LoaderCreatePostBoxStyles>
    </LoaderCreatePostContainerStyles>
    )
}

export default LoaderCreatePost