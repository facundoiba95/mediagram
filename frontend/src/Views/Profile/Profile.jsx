import React from 'react'
import { ProfileContainerStyles } from './ProfileStyles'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'
import ProfileHeader from '../../components/organisms/ProfileHeader/ProfileHeader'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProfileContent from '../../components/organisms/ProfileContent/ProfileContent'
import ContainerGridFramer from '../../components/Containers/ContainerGridFramer/ContainerGridFramer'

const Profile = () => {
    const isLogged = useSelector( state => state.authSlices.isLogged );
    const navigator = useNavigate();

    const renderProfile = () => {
        if(isLogged === true){
          return (
            <ProfileContainerStyles>
                <ProfileHeader/>
                <ProfileContent/>
                {/* <ContainerGridFramer/> */}
            </ProfileContainerStyles>
          )
        } else {
          navigator('/');
        }
    }
    
  return (
    <TransitionContainer>
      { renderProfile() }
    </TransitionContainer>
    )
}

export default Profile