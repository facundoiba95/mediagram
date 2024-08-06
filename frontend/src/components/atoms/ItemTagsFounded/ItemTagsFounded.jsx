<<<<<<< HEAD
import React from 'react'
import { ContainerItemTagsFoundedStyles } from './ItemTagsFoundedStyles'
import IconDelete from '../IconDelete/IconDelete';

const ItemTagsFounded = ({ _id, name, addTag, isSelected}) => {  
  return (
    <ContainerItemTagsFoundedStyles data-name={name} data-id={_id} isSelected={isSelected}>
      <h3 data-name={name} data-id={_id} onClick={(e) => addTag(e)}>{name}</h3>
    </ContainerItemTagsFoundedStyles>
  )
}

=======
import React from 'react'
import { ContainerItemTagsFoundedStyles } from './ItemTagsFoundedStyles'
import IconDelete from '../IconDelete/IconDelete';

const ItemTagsFounded = ({ _id, name, addTag, isSelected}) => {  
  return (
    <ContainerItemTagsFoundedStyles data-name={name} data-id={_id} isSelected={isSelected}>
      <h3 data-name={name} data-id={_id} onClick={(e) => addTag(e)}>{name}</h3>
    </ContainerItemTagsFoundedStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ItemTagsFounded