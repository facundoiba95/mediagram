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

export default GlobalLoader