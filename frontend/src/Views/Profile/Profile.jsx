import React, { useEffect } from 'react'
import { ProfileContainerStyles } from './ProfileStyles'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'
import ProfileHeader from '../../components/organisms/ProfileHeader/ProfileHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import ProfileContent from '../../components/organisms/ProfileContent/ProfileContent'
import ContainerBlur from '../../components/Containers/ContainerBlur/ContainerBlur'
import FollowContent from '../../components/organisms/FollowContent/FollowContent'
import LoaderResponsive from '../../components/molecules/Loaders/LoaderResponsive/LoaderResponsive'
import Login from '../../components/molecules/Login/Login'
import ModalUnauthenticated from '../../components/molecules/Modals/ModalUnauthenticated/ModalUnauthenticated'

const Profile = ({children}) => {
  // states
    const isLogged = useSelector( state => state.authSlices.isLogged );
    const isLoadingAuth = useSelector( state => state.authSlices.isLoading );
    const isLoading = useSelector( state => state.userSlices.isLoading );7

  // hooks and tools
  const navigator = useNavigate();
  const location = useLocation();
  const params = useParams();
    
    const renderProfile = () => {
        if(isLogged === true){
          return (
            <ProfileContainerStyles>
                <ContainerBlur>
                  <FollowContent/>
                </ContainerBlur>
                <ProfileHeader/>
                {
                  location.pathname === `/profile/${params.username}/changeImageUser`
                  ? <>{children}</>
                  : location.pathname === `/profile/${params.username}/changePassword`
                  ? <>{children}</>
                  : <ProfileContent/>
                }
            </ProfileContainerStyles>
          )
        } else {
          return (<ModalUnauthenticated />)
        }
        
    }
    
  return (
    <TransitionContainer>
      {
        isLoading || isLoadingAuth
        ? <LoaderResponsive/>
        : renderProfile() 
      }
    </TransitionContainer>
    )
}

export default Profile