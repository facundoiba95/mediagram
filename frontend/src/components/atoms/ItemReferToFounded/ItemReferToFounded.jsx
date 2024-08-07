<<<<<<< HEAD
import React from 'react'
import { ItemUserSearchedStyles } from '../../organisms/Forms/FormCreateContent/FormCreateContentStyles'
import { RiUserFollowFill } from 'react-icons/ri'

const ItemReferToFounded = ({
    handleSelectReferTo,
    username,
    thumbnail,
    _id,
    imgProfile
}) => {
    return (
        <ItemUserSearchedStyles
            onClick={(e) => handleSelectReferTo(e)}
            data-username={username}
            data-id={_id}
            data-thumbnail={thumbnail}>
            <img src={imgProfile} alt=""/>
            <p>
                {username}
                <RiUserFollowFill className='iconFriends' />
            </p>
        </ItemUserSearchedStyles>
    )
}

=======
import React from 'react'
import { ItemUserSearchedStyles } from '../../organisms/Forms/FormCreateContent/FormCreateContentStyles'
import { RiUserFollowFill } from 'react-icons/ri'

const ItemReferToFounded = ({
    handleSelectReferTo,
    username,
    thumbnail,
    _id,
    imgProfile
}) => {
    return (
        <ItemUserSearchedStyles
            onClick={(e) => handleSelectReferTo(e)}
            data-username={username}
            data-id={_id}
            data-thumbnail={thumbnail}>
            <img src={imgProfile} alt=""/>
            <p>
                {username}
                <RiUserFollowFill className='iconFriends' />
            </p>
        </ItemUserSearchedStyles>
    )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ItemReferToFounded