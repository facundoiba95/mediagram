import React, { useEffect } from 'react'
import DefaultPage from '../DefaultPage/DefaultPage';
import { HomeContainerStyles } from './HomeStyles';
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { validateSession } from '../../redux/slices/authSlices/authSlices';

const Home = ({children}) => {
  const isLogged = useSelector( state => state.authSlices.isLogged );
  const navigator = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(validateSession())
  }, [ dispatch ])

  const verifySession = () => {
    if(isLogged === true){
      navigator('/feed');
      return (
        <>{children}</>
        )
    } else {
      return (<DefaultPage/>)
    }
  }
  return (
    <HomeContainerStyles>
      <TransitionContainer>
         { verifySession() }
      </TransitionContainer>
    </HomeContainerStyles>
  )
}

export default Home;