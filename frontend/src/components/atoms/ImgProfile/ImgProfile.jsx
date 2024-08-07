<<<<<<< HEAD
import React, { useContext } from 'react'
import { ImgProfileStyles } from '../../organisms/ProfileHeader/ProfileHeaderStyles'
import { RiUserSmileFill } from 'react-icons/ri'
import { GlobalContext } from '../../../Context/GlobalContext'

const ImgProfile = ({ imgProfile, thumbnail }) => {
    const { setIsOpenImageProfile } = useContext(GlobalContext);

    return (
        <>
            {
                imgProfile.length ?
                    <ImgProfileStyles onClick={() => setIsOpenImageProfile(true)}>
                        <img src={thumbnail} alt="" />
                    </ImgProfileStyles>
                    : <ImgProfileStyles>
                        <RiUserSmileFill className='imgProfile' />
                    </ImgProfileStyles>
            }
        </>
    )
}

=======
import React, { useContext } from 'react'
import { ImgProfileStyles } from '../../organisms/ProfileHeader/ProfileHeaderStyles'
import { RiUserSmileFill } from 'react-icons/ri'
import { GlobalContext } from '../../../Context/GlobalContext'

const ImgProfile = ({ imgProfile, thumbnail }) => {
    const { setIsOpenImageProfile } = useContext(GlobalContext);

    return (
        <>
            {
                imgProfile.length ?
                    <ImgProfileStyles onClick={() => setIsOpenImageProfile(true)}>
                        <img src={thumbnail} alt="" />
                    </ImgProfileStyles>
                    : <ImgProfileStyles>
                        <RiUserSmileFill className='imgProfile' />
                    </ImgProfileStyles>
            }
        </>
    )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ImgProfile