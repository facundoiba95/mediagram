import React from 'react';
import { ImFileEmpty } from 'react-icons/im';
import { ContentIsEmptyContainerStyles } from './ContentIsEmptyStyles';

const ContentIsEmpty = () => {
  return (
    <ContentIsEmptyContainerStyles>
        <ImFileEmpty className='iconEmptyContent'/>
        <h2>Aún no hay publicaciones en este perfil.</h2>
    </ContentIsEmptyContainerStyles>
  )
}

export default ContentIsEmpty