import React, { useContext } from 'react'
import { ActionProfileContainerStyles, ImgProfileStyles, InfoProfileContainerStyles, ProfileHeaderContainerStyles, StatsInProfileStyles } from './ProfileHeaderStyles'
import { useDispatch, useSelector } from 'react-redux';
import { RiUserSmileFill, RiStarSmileFill } from 'react-icons/ri';
import { GrOverview } from 'react-icons/gr';
import { MdOutlineSmartphone } from 'react-icons/md';
import { PiHandWavingBold } from 'react-icons/pi';
import { AiFillLike } from 'react-icons/ai';
import { IoMdPersonAdd } from 'react-icons/io';
import ButtonResponsive from '../../atoms/ButtonResponsive/ButtonResponsive';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { followUser, refreshUser, unfollowUser } from '../../../redux/slices/userSlices/userSlices';
import { refreshUserAuth } from '../../../redux/slices/authSlices/authSlices';
import { useNavigate, useParams } from 'react-router-dom';
import LoaderResponsive from '../../molecules/Loaders/LoaderResponsive/LoaderResponsive';
import { GlobalContext } from '../../../Context/GlobalContext';

const ProfileHeader = () => {
  // hooks and tools
  const dispatch = useDispatch();
  const params = useParams();
  const navigator = useNavigate();

  // states redux Toolkit
  const userAuth = useSelector( state => state.authSlices.user );
  const user = useSelector( state => state.userSlices.userFiltered );
  const isFollowing = userAuth.followings.some(usr => usr._id === user[0]._id );
  const isLoading = useSelector( state => state.userSlices.isLoading );
  const isLoadingAuth = useSelector( state => state.authSlices.isLoading );


  // useContext
   const { isOpen, setIsOpen } = useContext( GlobalContext );

    const {
       username,
       isPrivate, 
       followings, 
       followers, 
       posts, 
       imgProfile, 
       viewsInProfile, 
       numberCellphone,
       stars,
       likesInProfile,
       greets 
      } = user[0];

    const renderImgProfile = () => {
      if(imgProfile.length){
        return( 
          <ImgProfileStyles>
            <img src={imgProfile} alt="" />
          </ImgProfileStyles>
        )
      } else {
        return (
          <ImgProfileStyles>
            <RiUserSmileFill className='imgProfile'/>
          </ImgProfileStyles>
        )
      }    
    }

    const handleOpenFollowContent = (e) => {
      const typeFollow = e.target.dataset.typefollow;
+     setIsOpen(!isOpen);
      params.typeFollow = typeFollow;
      navigator(`/profile/${params.username}/${params.typeFollow}`);
    }

    const renderTableDataUser = () => {
      return (
        <table>
          <tr>
            <th>Publicaciónes</th>
            <th data-typefollow='followers' onClick={(e) => handleOpenFollowContent(e)}><p data-typefollow='followers'>Seguidores</p></th>
            <th data-typefollow='followings' onClick={(e) => handleOpenFollowContent(e)}><p data-typefollow='followings'>Siguiendo</p></th>
          </tr>
          <tr>
            <td>{posts.length}</td>
            <td>{followers.length}</td>
            <td>{followings.length}</td>
          </tr>
         </table>
      )
    }

    const renderViews = () => {
      return (
        <span>
          <GrOverview className='iconActions'/>
          {viewsInProfile}
        </span>
      )
    }

    const renderNumberCellphone = () => {
      return (
        <span>
          <MdOutlineSmartphone className='iconActions'/>
          <p>{numberCellphone}</p>
        </span>
      )
    }

    const renderActions = () => {
      return (
        <ActionProfileContainerStyles>
          <span>
            <PiHandWavingBold className='iconGreet'/>
            <small>Dejar saludo</small>
            <p>{greets.length}</p>
          </span>
          <span>
            <RiStarSmileFill className='iconStar'/>
            <small>Dar estrella</small>
            <p>{stars.length}</p>
          </span>
          <span>
            <AiFillLike className='iconLike'/>
            <small>Me gusta este perfil</small>
            <p>{likesInProfile.length}</p>
          </span>
        </ActionProfileContainerStyles>
      )
    }

    const renderButtonFollow = () => {
      if(user[0]._id === userAuth._id){
        return (
          <></>
        )
      }
      if(isFollowing){
        return (
          <ButtonResponsive title={`Siguiendo`} icon={<BsFillPersonCheckFill className='icon' />} handleFunction={() => handleUnfollowUser()}/>
        )
      } else {
        return (
          <ButtonResponsive title={`Seguir`} icon={<IoMdPersonAdd className='icon'/>} handleFunction={() => handleFollowUser()}/>
        )
      }
    }

    const handleFollowUser = async () => {
      const { imgProfile, username, _id, } = user[0];

      const newFollower = {
        imgProfile,
        username,
        _id
      };

      await dispatch(followUser(newFollower));
      await dispatch(refreshUser(username));
      await dispatch(refreshUserAuth());
    }

    const handleUnfollowUser = async () => {
      const { _id, username } = user[0];

      if(window.confirm(`Dejar de seguir a "${username}"`)){
      await dispatch(unfollowUser(username));
      await dispatch(refreshUser(username));
      await dispatch(refreshUserAuth());
      } else {
        return;
      }
    }


    
  return (
    <ProfileHeaderContainerStyles>
      {
        isLoading || isLoadingAuth
        ? <LoaderResponsive/>
        : <>
            { renderImgProfile() }
            <InfoProfileContainerStyles>
                    <span className='title'>
                <p>{username}</p>
                { renderButtonFollow() }
             </span>
              { renderTableDataUser() }
              { renderViews() }
              { renderNumberCellphone() }
              { renderActions() }
            </InfoProfileContainerStyles>
            <span>
              <h3>Agregar nuevo estado</h3>
              <h3>Ver estados</h3>
            </span>
          </>
      }
    </ProfileHeaderContainerStyles>
    )
}

export default ProfileHeader