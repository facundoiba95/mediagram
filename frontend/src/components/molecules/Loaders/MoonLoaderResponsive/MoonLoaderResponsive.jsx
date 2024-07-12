import React from 'react'
import { MoonLoader } from 'react-spinners';
import { MoonLoaderContainerStyles } from './MoonLoaderResponsiveStyles';

const MoonLoaderResponsive = ({size}) => {
    return (
        <MoonLoaderContainerStyles>
            <MoonLoader size={size} color='white'/>
        </MoonLoaderContainerStyles>
    )
}

export default MoonLoaderResponsive