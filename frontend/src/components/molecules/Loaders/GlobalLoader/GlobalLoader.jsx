<<<<<<< HEAD
import React, { useContext } from 'react'
import { GlobalLoaderContainerStyles, ResaltLetter } from './GlobalLoaderStyles'
import { GlobalContext } from '../../../../Context/GlobalContext'

const GlobalLoader = () => {
    const { openLoader } = useContext(GlobalContext);
  
    return (
    <GlobalLoaderContainerStyles isHidden={!openLoader}>
        <ResaltLetter/>
    </GlobalLoaderContainerStyles>
  )
}

=======
import React, { useContext } from 'react'
import { GlobalLoaderContainerStyles, ResaltLetter } from './GlobalLoaderStyles'
import { GlobalContext } from '../../../../Context/GlobalContext'

const GlobalLoader = () => {
    const { openLoader } = useContext(GlobalContext);
  
    return (
    <GlobalLoaderContainerStyles isHidden={!openLoader}>
        <ResaltLetter/>
    </GlobalLoaderContainerStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default GlobalLoader