import React, { useEffect, useState } from 'react'
import { CardTypeContentCreateContainerStyles, ContentTypeStyles } from './CardTypeContentStyle';
import { BsFillClipboardHeartFill } from 'react-icons/bs';
import { RiChatPrivateFill, Ri24HoursFill } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router-dom';    

const CardTypeContent = ({ handleFunction, type }) => {
  const params = useParams();
  const navigator = useNavigate();
  const [ isSelected, setIsSelected ] = useState(false);

  const goToTypeContent = () => {
    params.typeContent = type;
    navigator(`/createContent/${params.typeContent}`);
  }
  
  useEffect(() => {
    if(params.typeContent === type){
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [ params.typeContent ]);

    const renderType = () => {
        if(type === 'post') {
            return (
                <ContentTypeStyles type={type} onClick={() => goToTypeContent()}>
                  <BsFillClipboardHeartFill className='iconType'/>
                  <h3>Publicación</h3>
                  <p>Se guardará en tu perfil y se mostrará a todos tus seguidores.</p>
                </ContentTypeStyles>
            )
        } else if( type === 'fastPost' ){
            return (
                <ContentTypeStyles type={type} onClick={() => goToTypeContent()}>
                  <Ri24HoursFill className='iconType'/>
                  <h3>Publicación rápida.</h3>
                  <p>Se mostrará en el Feed de tus seguidores durante 24hs.</p>
                </ContentTypeStyles>
            )
        } else if( type === 'closeFriend' ){
            return (
                <ContentTypeStyles type={type} onClick={() => goToTypeContent()}>
                  <RiChatPrivateFill className='iconType'/>
                  <h3>Lista de amigos.</h3>
                  <p>Se mostrará unicamente en la lista de amigos que elijas.</p>
                </ContentTypeStyles>
            )
        }
    }

  return (
    <CardTypeContentCreateContainerStyles type={type} isSelected={isSelected}>
        { renderType() }
    </CardTypeContentCreateContainerStyles>
  )
}

export default CardTypeContent