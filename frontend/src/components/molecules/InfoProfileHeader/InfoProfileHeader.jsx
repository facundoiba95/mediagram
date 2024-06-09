import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../Context/GlobalContext';
import { useSelector } from 'react-redux';

const InfoProfileHeader = ({
  isPrivate,
  isUserAuth,
  countPosts,
  countFollowers,
  countFollowings
}) => {
  const navigator = useNavigate();
  const params = useParams();
  const { isOpen, setIsOpen } = useContext(GlobalContext);
  const isFollowing = useSelector(state => state.userSlices.isFollowing);
  const isLoading = useSelector(state => state.userSlices.isLoading);


  const goHomeProfile = () => navigator(`/profile/${params.username}`);

  const handleOpenFollowContent = (e) => {
    const typeFollow = e.currentTarget.dataset.typefollow;
    setIsOpen(true);
    params.typeFollow = typeFollow;
    navigator(`/profile/${params.username}/${params.typeFollow}`);
  }

  const renderInfo = () => {
    if (isPrivate) {
      if (isFollowing || isUserAuth) {
        return (
          <>
            <th onClick={goHomeProfile}>Publicaciónes</th>
            <th data-typefollow='followers' onClick={(e) => handleOpenFollowContent(e)}><p data-typefollow='followers'>Seguidores</p></th>
            <th data-typefollow='followings' onClick={(e) => handleOpenFollowContent(e)}><p data-typefollow='followings'>Siguiendo</p></th>
          </>
        )
      } else {
        return (
          <>
            <th onClick={goHomeProfile}><p>Publicaciónes</p></th>
            <th><p>Seguidores</p></th>
            <th><p>Siguiendo</p></th>
          </>
        )
      }
    } else {
      return (
        <>
          <th onClick={goHomeProfile}>Publicaciónes</th>
          <th data-typefollow='followers' onClick={(e) => handleOpenFollowContent(e)}><p data-typefollow='followers'>Seguidores</p></th>
          <th data-typefollow='followings' onClick={(e) => handleOpenFollowContent(e)}><p data-typefollow='followings'>Siguiendo</p></th>
        </>
      )
    }
  }

  const renderDataFollowers = () => {
    return (
      <>
        <td>{countPosts}</td>
        <td>{countFollowers}</td>
        <td>{countFollowings}</td>
      </>
    )
  }

  return (
    <table>
      <tr>
        {renderInfo()}
      </tr>
      <tr>
        {renderDataFollowers()}
      </tr>
    </table>
  )
}

export default InfoProfileHeader;