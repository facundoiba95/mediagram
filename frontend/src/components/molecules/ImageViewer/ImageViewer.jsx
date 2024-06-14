import React, { useContext } from 'react'
import { ImageViewerContainerStyles } from './ImageViewerStyles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GlobalContext } from '../../../Context/GlobalContext'

const ImageViewer = ({ image }) => {
    const { isOpenImageProfile, setIsOpenImageProfile } = useContext(GlobalContext);

    return (
        <ImageViewerContainerStyles isOpen={isOpenImageProfile} onClick={() => setIsOpenImageProfile(false)}>
            <img src={image} alt="img profile user" className='imgProfile' />
        </ImageViewerContainerStyles>
    )
}

export default ImageViewer