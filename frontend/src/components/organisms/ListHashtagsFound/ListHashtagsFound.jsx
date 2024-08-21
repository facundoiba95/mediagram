import React from 'react'
import { ContainerListHashtagsFoundStyles } from './ListHashtagsFoundStyles'
import { MoonLoader } from 'react-spinners';

//@params isLoading = Boolean
//@params children = Node 
const ListHashtagsFound = ({ isLoading, children, maxWidth}) => {
    return (
        <ContainerListHashtagsFoundStyles maxWidth={maxWidth}>
            {
                isLoading
                    ? <span style={{ margin: "0 auto" }}>
                        <MoonLoader color='white' size={30} />
                    </span>
                    : <>{children}</>
            }
        </ContainerListHashtagsFoundStyles>
    )
}

export default ListHashtagsFound