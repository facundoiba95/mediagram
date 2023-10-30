import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai'
import { ViewPostCommentsSectionStyles, ViewPostHeadStyles, ViewPostUserInfoHeadStyles } from '../../organisms/ViewPost/ViewPostStyles';
import { ListCommentsStyles, ViewPostDescriptionStyles, ViewPostHandleActiveDescriptionStyles, WrapperCommentContainerStyles } from './CommentsInPostStyles';
import PostInteraction from '../PostInteraction/PostInteraction';
import Comentary from '../../atoms/Comentary/Comentary';
import { useNavigate, useParams } from 'react-router-dom';

const CommentsInPost = ({
  description,
  username,
  thumbnail,

}) => {
    const [ hiddenDescription, setHiddenDescription ] = useState(false);
    const navigator = useNavigate();
    const params = useParams();

    const goToProfile = () => {
      params.username = username;
      navigator(`/profile/${params.username}`)
    };

    const isDescription = 'ascasckasckamslc'
  return (
    <ViewPostCommentsSectionStyles>
      <ViewPostHeadStyles>
        <ViewPostUserInfoHeadStyles onClick={goToProfile}>
          <img src={thumbnail} alt="" className='imgProfile'/>
          <h3>{username}</h3>
        </ViewPostUserInfoHeadStyles>
        <PostInteraction/>
      </ViewPostHeadStyles>
    <ViewPostDescriptionStyles>
      <ViewPostHandleActiveDescriptionStyles isDescription={isDescription} hiddenDescription={hiddenDescription} onClick={() => setHiddenDescription(!hiddenDescription)}>
        <AiOutlineRight className='openDescription'/>
        <AiOutlineDown className='hiddenDescription'/>
        <small>Descripción</small>
      </ViewPostHandleActiveDescriptionStyles>
      <WrapperCommentContainerStyles>
        <ListCommentsStyles>
          <Comentary content={'ascccccccccccccccccccccccccccccccascascasc'}/>
          <Comentary content={'Lionel Andrés Messi Cuccittini (Rosario, 24 de junio de 1987), conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Desde 2023, integra el plantel del Inter Miami de la MLS estadounidense. Es también internacional con la selección de Argentina, de la que es capitán.'}/>
          <Comentary content={'Con el Fútbol Club Barcelona, al que estuvo ligado más de veinte años, ganó 35 títulos, entre ellos, diez de La Liga, cuatro de la Liga de Campeones de la UEFA y siete de la Copa del Rey.'}/>
          <Comentary content={'hola'}/>
          <Comentary/>
          <Comentary content={'El 18 de diciembre, en la final contra Francia en el estadio Lusail, marcó de penal el primer gol y, en los tiempos extras, aprovechó el rebote de un intento de Lautaro Martínez que Hugo Lloris había rechazado para desempatar el 2-2. Como Mbappé anotó el tercero para su equipo, el partido se definió por penales. Messi convirtió el suyo para un 4-2 a favor de Argentina, que ganó el título después de treinta y seis años.750​ Al igual que contra México, Australia, Croacia y Países Bajos,751​ fue elegido MVP y recibió el Balón de Oro,750​601​ por lo que pasó a ser el primer jugador reconocido como MVP en once oportunidades y en dos como el mejor del torneo.752​ Ganó también la Bota de Plata, quedó cuarto en la lista de máximos goleadores en mundiales y superó otros dos récords de la Copa del Mundo: el de Lothar Matthäus de más partidos (26) y el de más minutos jugados (2314 contra 2217) de Paolo Maldini753​754​601​ Con un total de 26 goles, además, desplazó a Ronaldo (25) como máximo goleador histórico en torneos mayores internacionales.755​'}/>
          <Comentary/>
          <Comentary/>
          <Comentary/>
        </ListCommentsStyles>
      </WrapperCommentContainerStyles>
    </ViewPostDescriptionStyles>
  </ViewPostCommentsSectionStyles>
  )
}

export default CommentsInPost