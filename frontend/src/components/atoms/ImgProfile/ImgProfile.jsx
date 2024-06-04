import React from 'react'
import { ImgProfileStyles } from '../../organisms/ProfileHeader/ProfileHeaderStyles'
import { RiUserSmileFill } from 'react-icons/ri'

const ImgProfile = ({ imgProfile, thumbnail }) => {
    return (
        <>
            {
                imgProfile.length ?
                    <ImgProfileStyles>
                        <img src={thumbnail} alt="" />
                    </ImgProfileStyles>
                    : <ImgProfileStyles>
                        <RiUserSmileFill className='imgProfile' />
                    </ImgProfileStyles>
            }
        </>
    )
}

export default ImgProfile