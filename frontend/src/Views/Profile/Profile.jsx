import React, { useEffect } from 'react'
import { ProfileContainerStyles } from './ProfileStyles'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'
import ProfileHeader from '../../components/organisms/ProfileHeader/ProfileHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ProfileContent from '../../components/organisms/ProfileContent/ProfileContent'
import { handleIsFollowing, refreshUser, selectUser } from '../../redux/slices/userSlices/userSlices'
import ContainerBlur from '../../components/Containers/ContainerBlur/ContainerBlur'
import FollowContent from '../../components/organisms/FollowContent/FollowContent'
import { getPosts } from '../../redux/slices/postSlices/postSlices'
import LoaderResponsive from '../../components/molecules/Loaders/LoaderResponsive/LoaderResponsive'

const Profile = () => {
  // states
    const isLogged = useSelector( state => state.authSlices.isLogged );
    const isLoading = useSelector( state => state.userSlices.isLoading );
    const userAuth = useSelector( state => state.authSlices.user );
    const userSelected = useSelector( state => state.userSlices.userFiltered );

  // hooks and tools
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
 
    useEffect(() => {
      // dispatch(refreshUser(params.username));
      dispatch(getPosts(userSelected[0].username))
      // dispatch(selectUser(params.username))
      if(params.username === userAuth.username){
        return;
      } else {
        dispatch(handleIsFollowing(params.username))
      }
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
      {
        isLoading 
        ? <LoaderResponsive/>
        : renderProfile() 
      }
    </TransitionContainer>
    )
}

export default Profile