import React from 'react'
import { DefaultPageFeedContainerStyles } from './DefaultPageFeedStyles'
import { TbZzz } from 'react-icons/tb';

const DefaultPageFeed = () => {
  return (
    <DefaultPageFeedContainerStyles>
        <TbZzz className='iconZzz'/> 
        <h3>Parece que no hay novedades aún ...</h3>
        <p>Puedes conectar con más cuentas explorando la red o buscando a alguien especial !</p>
    </DefaultPageFeedContainerStyles>
    )
}

export default DefaultPageFeed