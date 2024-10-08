import React, { useEffect } from 'react'
import { ContainerFormsAuthStyles, DefaultPageContainerStyles, WelcomeContentDefaultPageStyles, WelcomeMessageDefaultPageStyles } from './DefaultPageStyles'
import FormAuth from '../../components/organisms/FormAuth/FormAuth'
import { LogoMediagramStyle } from '../../components/atoms/LogoMediagram/LogoMediagramStyles'
import { useLocation, useNavigate } from 'react-router-dom'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'
import imgOne from '../../assets/drinkingcoffee.jpg';
import imgTwo from '../../assets/tomorrowland.jpg';
import imgTree from '../../assets/miguelangel.jpg'
import imgFour from '../../assets/watchingfootball.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/authSlices/authSlices'

const DefaultPage = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { isLogged } = useSelector(state => state.authSlices);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/register") {
      navigator("/register")
    } else if (isLogged) {
      navigator("/")
    } else {
      navigator("/defaultPage")
    }
  }, [isLogged, navigator])

  return (
    <TransitionContainer>
      <DefaultPageContainerStyles>
        <img src={imgOne} alt="" className='imgOne' />
        <img src={imgTwo} alt="" className='imgTwo' />
        <img src={imgTree} alt="" className='imgTree' />
        <img src={imgFour} alt="" className='imgFour' />
        <WelcomeContentDefaultPageStyles>
          <h2>Bienvenido a  </h2>
          <LogoMediagramStyle onClick={() => navigator('/')}>{'Mediagram'}</LogoMediagramStyle>
          <WelcomeMessageDefaultPageStyles>
            <h2>Conecta, comparte y descubre el mundo a través de tus fotos.</h2>
            <ul>
              <b>¿Qué puedes hacer aquí?</b>
              <li>- Comparte tus fotos y deja que el mundo vea tu perspectiva única.</li>
              <li>- Sigue a tus amigos y descubre nuevas personas con intereses similares.</li>
              <li>- Crea contenido exclusivo solo para tus seguidores cercanos.</li>
              <li>- Explora publicaciones públicas y descubre historias inspiradoras.</li>
              <li>- Navega por hashtags para encontrar contenido que te apasione.</li>
            </ul>
            <h3>¡Empieza a explorar y crea tu propia historia hoy!</h3>
          </WelcomeMessageDefaultPageStyles>
        </WelcomeContentDefaultPageStyles>
        <ContainerFormsAuthStyles>
          <FormAuth />
        </ContainerFormsAuthStyles>
      </DefaultPageContainerStyles>
    </TransitionContainer>
  )
}

export default DefaultPage