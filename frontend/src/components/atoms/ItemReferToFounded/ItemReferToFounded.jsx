import React from 'react'
import { ItemUserSearchedStyles } from '../../molecules/Forms/FormCreateContent/FormCreateContentStyles'
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

export default ItemReferToFounded