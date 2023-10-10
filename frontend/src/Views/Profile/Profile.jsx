import React, { useEffect } from 'react'
import { ProfileContainerStyles } from './ProfileStyles'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'
import ProfileHeader from '../../components/organisms/ProfileHeader/ProfileHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ProfileContent from '../../components/organisms/ProfileContent/ProfileContent'
import { handleIsFollowing } from '../../redux/slices/userSlices/userSlices'
import ContainerBlur from '../../components/Containers/ContainerBlur/ContainerBlur'
import FollowContent from '../../components/organisms/FollowContent/FollowContent'
import LoaderResponsive from '../../components/molecules/Loaders/LoaderResponsive/LoaderResponsive'

const Profile = () => {
  // states
    const isLogged = useSelector( state => state.authSlices.isLogged );
    const isLoading = useSelector( state => state.userSlices.isLoading );

  // hooks and tools
  const navigator = useNavigate();
    
    const renderProfile = () => {
        if(isLogged === true){
          return (
            <ProfileContainerStyles>
                <ContainerBlur>
                  <FollowContent/>
                </ContainerBlur>
                <ProfileHeader/>
                <ProfileContent/>
            </ProfileContainerStyles>
          )
        } else {
          navigator('/');
        }
    }
    
  return (
    <TransitionContainer>
      {
        isLoading 
        ? <LoaderResponsive/>
        : renderProfile() 
      }
    </TransitionContainer>
    )
}

export default Profile