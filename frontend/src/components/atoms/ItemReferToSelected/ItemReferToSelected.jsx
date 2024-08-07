import React from 'react'
import { ItemRefersToStyles } from '../../organisms/Forms/FormCreateContent/FormCreateContentStyles'
import { FaWindowClose } from 'react-icons/fa'

const ItemReferToSelected = ({
    username,
    _id,
    thumbnail,
    handleDeleteReferTo
}) => {
    return (
        <ItemRefersToStyles>
            <p>{username}</p>
            <FaWindowClose
                className='iconDeleteReferTo'
                data-username={username}
                onClick={(e) => handleDeleteReferTo(e)}
            />
        </ItemRefersToStyles>
    )
}

export default ItemReferToSelected