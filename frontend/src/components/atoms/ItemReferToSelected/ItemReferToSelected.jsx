import React from 'react'
import { ItemRefersToStyles } from '../../molecules/Forms/FormCreateContent/FormCreateContentStyles'
import { FaWindowClose } from 'react-icons/fa'

const ItemReferToSelected = ({
    username,
    _id,
    thumbnail,
    handleDeleteReferTo
}) => {
    return (
        <ItemRefersToStyles
            data-username={username}
            data-id={_id}
            data-thumbnail={thumbnail}>
            <p>{username}</p>
            <FaWindowClose
                className='iconDeleteReferTo'
                onClick={(e) => handleDeleteReferTo(e)} />
        </ItemRefersToStyles>
    )
}

export default ItemReferToSelected