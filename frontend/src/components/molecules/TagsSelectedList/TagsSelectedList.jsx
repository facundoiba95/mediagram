import React, { useContext } from 'react'
import { ContainerTagsSelectedListStyles } from './TagsSelectedListStyles'
import { ContainerItemTagsFoundedStyles } from '../../atoms/ItemTagsFounded/ItemTagsFoundedStyles'
import { GlobalContext } from '../../../Context/GlobalContext'

const TagsSelectedList = ({ listTags }) => {
    const { switchChecked } = useContext(GlobalContext);
    
    const renderTagsSelected = () => {
        return listTags.map(tag => {
            const { _id, name } = tag;
            
            return (
                <ContainerItemTagsFoundedStyles inList={true}>
                    <h3>{name}</h3>
                </ContainerItemTagsFoundedStyles>
            )
        })
    }
    return (
        <ContainerTagsSelectedListStyles isHidden={switchChecked}>
            {renderTagsSelected()}
        </ContainerTagsSelectedListStyles>
    )
}

export default TagsSelectedList