<<<<<<< HEAD
import React, { useEffect } from 'react'
import { HomeContainerStyles } from './HomeStyles';
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer';
import { useDispatch, useSelector } from 'react-redux';
import { validateSession } from '../../redux/slices/authSlices/authSlices';

const Home = ({ children }) => {
  const {isLogged} = useSelector(state => state.authSlices);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(validateSession())
  // }, [dispatch, isLogged])

  return (
    <HomeContainerStyles>
      <TransitionContainer>
        {children}
      </TransitionContainer>
    </HomeContainerStyles>
  )
}

=======
import React, { useEffect } from 'react'
import { HomeContainerStyles } from './HomeStyles';
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer';
import { useDispatch, useSelector } from 'react-redux';
import { validateSession } from '../../redux/slices/authSlices/authSlices';

const Home = ({ children }) => {
  const {isLogged} = useSelector(state => state.authSlices);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(validateSession())
  // }, [dispatch, isLogged])

  return (
    <HomeContainerStyles>
      <TransitionContainer>
        {children}
      </TransitionContainer>
    </HomeContainerStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default Home;