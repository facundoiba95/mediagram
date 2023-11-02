import React, { useEffect } from 'react'
import DefaultPage from '../DefaultPage/DefaultPage';
import { HomeContainerStyles } from './HomeStyles';
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { validateSession } from '../../redux/slices/authSlices/authSlices';

const Home = ({children}) => {
  const isLogged = useSelector( state => state.authSlices.isLogged );
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(validateSession())
  }, [dispatch ])

  if(isLogged === true){
    return (
      <HomeContainerStyles>
        <TransitionContainer>
          {children}
        </TransitionContainer>
      </HomeContainerStyles>
    );
  } else {
    return (
      <HomeContainerStyles>
        <TransitionContainer>
          <DefaultPage/>
        </TransitionContainer>
      </HomeContainerStyles>
    );
  }
}

export default Home;