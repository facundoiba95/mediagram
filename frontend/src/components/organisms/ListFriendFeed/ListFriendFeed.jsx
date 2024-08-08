import React, { useContext, useEffect } from 'react'
import { ListFriendBoxContainerStyles, ListFriendFeedContainerStyles, ListFriendItemStyles, TitleListFriendFeedStyles } from './ListFriendFeedStyles'
import data from '../../dataTestUsers';
import { useSelector } from 'react-redux';
import { RiUserSmileFill } from 'react-icons/ri'
import { GlobalContext } from '../../../Context/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom';
import { MessageNotFollowUpRequestStyles } from '../FollowUpRequest/FollowUpRequestStyles';


const ListFriendFeed = () => {
  const { closeList } = useSelector(state => state.userSlices);
  const { topScroll, isOpenHistory, setIsOpenHistory } = useContext(GlobalContext);
  const navigator = useNavigate();
  const params = useParams();

  const goToHistory = () => {
    setIsOpenHistory(!isOpenHistory);
    navigator(`/history`)
  }

  const goExplore = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
    navigator("/explore")
  }

  const renderItems = () => {
    if (!closeList.length) {
      return (
        <MessageNotFollowUpRequestStyles>
          <p style={{ textAlign: 'center' }} onClick={goExplore}>Ir a explorar</p>
        </MessageNotFollowUpRequestStyles>
      )
    }
    return closeList.map(item => {
      const { thumbnail, username, _id, posts } = item;

      return (
        <ListFriendItemStyles data-id={_id} existPost={posts.length} onClick={goToHistory}>
          {
            thumbnail
              ? <img src={thumbnail} alt="imgProfile user to closeFriend" />
              : <RiUserSmileFill className='iconDefaultProfile' />
          }
          <h4>{username}</h4>
          <p className='unviewedPostCounter'>{posts.length}</p>
          <small className='isNewAdded'>New!</small>
        </ListFriendItemStyles>
      )
    })
  }


  return (
    <ListFriendFeedContainerStyles >
      {
        !closeList.length
          ? <></>
          : <TitleListFriendFeedStyles topScroll={topScroll}>
            Lista de amigos.
            <small>Estas cuentas te agregaron a su lista de amigos.</small>
          </TitleListFriendFeedStyles>
      }
      <ListFriendBoxContainerStyles topScroll={topScroll}>
        {renderItems()}
      </ListFriendBoxContainerStyles>
    </ListFriendFeedContainerStyles>
  )
}

export default ListFriendFeed