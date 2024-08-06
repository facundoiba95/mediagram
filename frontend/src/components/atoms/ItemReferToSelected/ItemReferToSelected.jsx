<<<<<<< HEAD
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

=======
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

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ItemReferToSelected