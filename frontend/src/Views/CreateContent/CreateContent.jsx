import React, { useEffect } from 'react'
import ContainerFlexColumn from '../../components/Containers/ContainerFlexColumn/ContainerFlexColumn'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'
import { TitleCreateContentStyles } from './CreateContentStyles'
import ContainerGridFramer from '../../components/Containers/ContainerGridFramer/ContainerGridFramer'
import CardTypeContent from '../../components/molecules/CardTypeContent/CardTypeContent'
import { useDispatch, useSelector } from 'react-redux'
import { restarStatusPost } from '../../redux/slices/postSlices/postSlices'
import ModalUnauthenticated from '../../components/molecules/Modals/ModalUnauthenticated/ModalUnauthenticated'

const CreateContent = ({ children }) => {
  const contenido = [
    <CardTypeContent type={'POST'} />,
    <CardTypeContent type={'FASTPOST'} />,
    <CardTypeContent type={'EXCLUSIVEPOST'} />
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restarStatusPost())
  }, []);

  return (
    <ContainerFlexColumn>
      <TransitionContainer>
        <TitleCreateContentStyles>
          <h1>Crear contenido</h1>
          <p>Créa una publicación y compártela en tu Feed.</p>
        </TitleCreateContentStyles>
        <ContainerGridFramer content={contenido} />
        <ContainerFlexColumn>
          {children}
        </ContainerFlexColumn>
      </TransitionContainer>
    </ContainerFlexColumn>
  )
}

export default CreateContent