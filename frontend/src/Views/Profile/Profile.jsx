import React, { useEffect } from 'react'
import { ProfileContainerStyles } from './ProfileStyles'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'
import ProfileHeader from '../../components/organisms/ProfileHeader/ProfileHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ProfileContent from '../../components/organisms/ProfileContent/ProfileContent'
import { refreshUser } from '../../redux/slices/userSlices/userSlices'
import ContainerBlur from '../../components/Containers/ContainerBlur/ContainerBlur'
import FollowContent from '../../components/organisms/FollowContent/FollowContent'
import { getPosts } from '../../redux/slices/postSlices/postSlices'

const Profile = () => {
  // states
    const isLogged = useSelector( state => state.authSlices.isLogged );

  // hooks and tools
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
 
    useEffect(() => {
      dispatch(refreshUser(params.username));
      dispatch(getPosts(params.username))
    },[ params.username ])

    
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
      { renderProfile() }
    </TransitionContainer>
    )
}

export default Profile