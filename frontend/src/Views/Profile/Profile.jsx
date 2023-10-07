import React, { useEffect, useRef } from 'react'
import { ProfileContainerStyles } from './ProfileStyles'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'
import ProfileHeader from '../../components/organisms/ProfileHeader/ProfileHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ProfileContent from '../../components/organisms/ProfileContent/ProfileContent'
import { refreshUser } from '../../redux/slices/userSlices/userSlices'

const Profile = () => {
    const isLogged = useSelector( state => state.authSlices.isLogged );
    const userAuth = useSelector( state => state.authSlices.user );
    const user = useSelector( state => state.userSlices.user );
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
      dispatch(refreshUser(params.username))
    },[ params.username ])

    
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