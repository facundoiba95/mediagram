import React, { useEffect } from 'react'
import DefaultPage from '../DefaultPage/DefaultPage';
import { HomeContainerStyles } from './HomeStyles';
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer';
import { useSelector } from 'react-redux';
import Feed from '../Feed/Feed';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const isLogged = useSelector( state => state.authSlices.isLogged );
  const navigator = useNavigate();


  const verifySession = () => {
    if(isLogged === true){
      navigator('/feed');
      return (
        <Feed/>
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