<<<<<<< HEAD
import React, { useEffect } from 'react'
import ContainerFlexColumn from '../../components/Containers/ContainerFlexColumn/ContainerFlexColumn'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'
import { TitleCreateContentStyles } from './CreateContentStyles'
import ContainerGridFramer from '../../components/Containers/ContainerGridFramer/ContainerGridFramer'
import { useDispatch } from 'react-redux'
import { restarStatusPost } from '../../redux/slices/postSlices/postSlices'
import { FASTPOST, POST, EXCLUSIVEPOST } from '../../libs/typePost'
import CardTypeContent from '../../components/organisms/Cards/CardTypeContent/CardTypeContent'

const CreateContent = ({ children }) => {
  const dispatch = useDispatch();

  const contenido = [
    <CardTypeContent type={POST} />,
    <CardTypeContent type={FASTPOST} />,
    <CardTypeContent type={EXCLUSIVEPOST} />
  ];

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

=======
import React, { useEffect } from 'react'
import ContainerFlexColumn from '../../components/Containers/ContainerFlexColumn/ContainerFlexColumn'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'
import { TitleCreateContentStyles } from './CreateContentStyles'
import ContainerGridFramer from '../../components/Containers/ContainerGridFramer/ContainerGridFramer'
import { useDispatch } from 'react-redux'
import { restarStatusPost } from '../../redux/slices/postSlices/postSlices'
import { FASTPOST, POST, EXCLUSIVEPOST } from '../../libs/typePost'
import CardTypeContent from '../../components/organisms/Cards/CardTypeContent/CardTypeContent'

const CreateContent = ({ children }) => {
  const dispatch = useDispatch();

  const contenido = [
    <CardTypeContent type={POST} />,
    <CardTypeContent type={FASTPOST} />,
    <CardTypeContent type={EXCLUSIVEPOST} />
  ];

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

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default CreateContent