import React, { useContext } from 'react'
import { ContainerTagsSelectedListStyles } from './TagsSelectedListStyles'
import { ContainerItemTagsFoundedStyles } from '../../atoms/ItemTagsFounded/ItemTagsFoundedStyles'
import { GlobalContext } from '../../../Context/GlobalContext'
import { useDispatch } from 'react-redux'
import { removeTagToList } from '../../../redux/slices/tagSlices/tagSlices'

const TagsSelectedList = ({ listTags }) => {
    const dispatch = useDispatch();
    const { switchChecked, isOpenAddTags } = useContext(GlobalContext);

    const removeTag = (e) => {
        const id = e.currentTarget.dataset.id;
        dispatch(removeTagToList(id))
    }

    const renderTagsSelected = () => {
        return listTags.map(tag => {
            const { _id, name } = tag;

            return (
                <ContainerItemTagsFoundedStyles inList={true} data-id={_id} onClick={removeTag}>
                    <h3>{name}</h3>
                </ContainerItemTagsFoundedStyles>
            )
        })
    }

    return (
        <ContainerTagsSelectedListStyles isHidden={switchChecked || isOpenAddTags}>
            {renderTagsSelected()}
        </ContainerTagsSelectedListStyles>
    )
}

export default TagsSelectedList