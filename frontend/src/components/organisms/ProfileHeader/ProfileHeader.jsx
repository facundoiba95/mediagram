import React from 'react'
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
import { followUser } from '../../../redux/slices/userSlices/userSlices';

const ProfileHeader = () => {
   const userAuth = useSelector( state => state.authSlices.user );
   const user = useSelector( state => state.userSlices.user );
   const isFollowing = user[0].followings.some( usr => userAuth.followers[usr.username] );
   const dispatch = useDispatch();

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

    const renderTableDataUser = () => {
      return (
        <table>
          <tr>
            <th>Publicaciónes</th>
            <th>Seguidores</th>
            <th>Siguiendo</th>
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
          <ButtonResponsive title={`Siguiendo`} icon={<BsFillPersonCheckFill className='icon' />}/>
        )
      } else {
        return (
          <ButtonResponsive title={`Seguir`} icon={<IoMdPersonAdd className='icon' onClick={() => handleFollowUser()}/>}/>
        )
      }
    }

    const handleFollowUser = () => {
      const { imgProfile, username, _id } = user[0];

      const newFollower = {
        imgProfile,
        username,
        _id
      };

      dispatch(followUser(newFollower));
    }

  return (
    <ProfileHeaderContainerStyles>
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
    </ProfileHeaderContainerStyles>
    )
}

export default ProfileHeader