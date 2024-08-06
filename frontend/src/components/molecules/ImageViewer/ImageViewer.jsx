<<<<<<< HEAD
import React, { useContext } from 'react'
import { ImageViewerContainerStyles } from './ImageViewerStyles'
import { GlobalContext } from '../../../Context/GlobalContext'

const ImageViewer = ({ image }) => {
    const { isOpenImageProfile, setIsOpenImageProfile } = useContext(GlobalContext);

    return (
        <ImageViewerContainerStyles isOpen={isOpenImageProfile} onClick={() => setIsOpenImageProfile(false)}>
            <img src={image} alt="img profile user" className='imgProfile' />
        </ImageViewerContainerStyles>
    )
}

=======
import React, { useContext } from 'react'
import { ImageViewerContainerStyles } from './ImageViewerStyles'
import { GlobalContext } from '../../../Context/GlobalContext'

const ImageViewer = ({ image }) => {
    const { isOpenImageProfile, setIsOpenImageProfile } = useContext(GlobalContext);

    return (
        <ImageViewerContainerStyles isOpen={isOpenImageProfile} onClick={() => setIsOpenImageProfile(false)}>
            <img src={image} alt="img profile user" className='imgProfile' />
        </ImageViewerContainerStyles>
    )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ImageViewer