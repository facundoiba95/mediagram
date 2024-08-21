import React from 'react'
import { ContainerItemCreateTagStyles } from './ItemCreateTagStyles'
import { useDispatch } from 'react-redux';
import { createTag } from '../../../redux/slices/tagSlices/tagSlices';

//@params tag = String
const ItemCreateTag = ({tag, showCreateTag}) => {
    const dispatch = useDispatch();

  return (
    <ContainerItemCreateTagStyles>
        <p>No se encontro el tag "<b>{tag}</b>"</p>
        {
          showCreateTag
          ? <i onClick={() => dispatch(createTag({tag}))}>Crear tag.</i>
          : <></>
        }
    </ContainerItemCreateTagStyles>
  )
}

export default ItemCreateTag