import React, { useEffect } from 'react'
import DefaultPage from '../DefaultPage/DefaultPage';
import { HomeContainerStyles } from './HomeStyles';
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer';
import { useSelector } from 'react-redux';

const Home = () => {
  const isLogged = useSelector( state => state.authSlices.isLogged );
  
  const verifySession = () => {
    if(isLogged === true){
      return (
        <img src='https://www.shutterstock.com/shutterstock/photos/2024534225/display_1500/stock-photo-a-vertical-shot-of-open-windows-looking-at-a-garden-and-the-sea-on-a-sunny-day-2024534225.jpg' />
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