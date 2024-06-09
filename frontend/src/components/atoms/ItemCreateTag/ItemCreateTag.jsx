import React from 'react'
import { ContainerItemCreateTagStyles } from './ItemCreateTagStyles'
import { useDispatch } from 'react-redux';
import { createTag } from '../../../redux/slices/tagSlices/tagSlices';

const ItemCreateTag = ({tag}) => {
    const dispatch = useDispatch();

  return (
    <ContainerItemCreateTagStyles>
        <p>No se encontro el tag "<b>{tag}</b>"</p>
        <i onClick={() => dispatch(createTag({tag}))}>Crear tag.</i>
    </ContainerItemCreateTagStyles>
  )
}

export default ItemCreateTag