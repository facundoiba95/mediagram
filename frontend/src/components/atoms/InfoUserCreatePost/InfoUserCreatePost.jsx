<<<<<<< HEAD
import React from 'react'
import { RiUserSmileFill } from 'react-icons/ri'

const InfoUserCreatePost = ({userAuth}) => {
    return (
        <span className='infoUserAuth'>
            {
                userAuth.imgProfile
                    ? <img src={userAuth.imgProfile} alt="img profile" />
                    : <RiUserSmileFill className='imgProfile' />
            }
            <p>{userAuth.username}</p>
        </span>
    )
}

=======
import React from 'react'
import { RiUserSmileFill } from 'react-icons/ri'

const InfoUserCreatePost = ({userAuth}) => {
    return (
        <span className='infoUserAuth'>
            {
                userAuth.imgProfile
                    ? <img src={userAuth.imgProfile} alt="img profile" />
                    : <RiUserSmileFill className='imgProfile' />
            }
            <p>{userAuth.username}</p>
        </span>
    )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default InfoUserCreatePost