<<<<<<< HEAD
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

=======
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

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default LoaderCreatePost