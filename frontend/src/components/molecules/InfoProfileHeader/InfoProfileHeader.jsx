import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../Context/GlobalContext';
import { useDispatch, useSelector } from 'react-redux';
import { getFollowers, getFollowings } from '../../../redux/slices/userSlices/userSlices';

const InfoProfileHeader = ({
  isPrivate,
  isUserAuth,
  countPosts,
  countFollowers,
  countFollowings
}) => {
  const navigator = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { setIsOpen } = useContext(GlobalContext);
  const isFollowing = useSelector(state => state.userSlices.isFollowing);
  const [typeFollow, setTypeFollow] = useState(null);
  const FOLLOWINGS = "followings";
  const FOLLOWERS = "followers";

  const goHomeProfile = () => navigator(`/profile/${params.username}`);

  const handleOpenFollowContent = async (e) => {
    const typeFollow = e.currentTarget.dataset.typefollow;
    params.typeFollow = typeFollow;
    setTypeFollow(params.typeFollow);
  }


  useEffect(() => {    
    const fetchData = async () => {
        if (params.typeFollow === FOLLOWERS) {
          setIsOpen(true);
          await dispatch(getFollowers(params.username));
          navigator(`/profile/${params.username}/${params.typeFollow}`);
        } else if (params.typeFollow === FOLLOWINGS) {
          setIsOpen(true);
          await dispatch(getFollowings(params.username));
          navigator(`/profile/${params.username}/${params.typeFollow}`);
        }
    }
    fetchData();
  },[typeFollow])

  const renderInfo = () => {
    if (isPrivate) {
      if (isFollowing || isUserAuth) {
        return (
          <>
            <th onClick={goHomeProfile}>Publicaciónes</th>
            <th data-typefollow={FOLLOWERS} onClick={(e) => handleOpenFollowContent(e)}><p>Seguidores</p></th>
            <th data-typefollow={FOLLOWINGS} onClick={(e) => handleOpenFollowContent(e)}><p>Siguiendo</p></th>
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
          <th data-typefollow={FOLLOWERS} onClick={(e) => handleOpenFollowContent(e)}><p>Seguidores</p></th>
          <th data-typefollow={FOLLOWINGS} onClick={(e) => handleOpenFollowContent(e)}><p>Siguiendo</p></th>
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