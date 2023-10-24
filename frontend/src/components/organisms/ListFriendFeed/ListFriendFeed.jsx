import React, { useEffect } from 'react'
import { ListFriendBoxContainerStyles, ListFriendFeedContainerStyles, ListFriendItemStyles, TitleListFriendFeedStyles } from './ListFriendFeedStyles'
import data from '../../dataTestUsers';


const ListFriendFeed = () => {
  const first10Users = data.slice(0,10);

  const renderItems = () => {
    return first10Users.map(item => {
        return (
          <ListFriendItemStyles isNewAdded={ item.isNewAdded }>
            <img src={item.imgProfile} alt="imgProfile user to closeFriend" />
            <h4>{item.username}</h4>
            <p className='unviewedPostCounter'>2</p>
            <small className='isNewAdded'>New!</small>
          </ListFriendItemStyles>
        )
      })
}


  return (
    <ListFriendFeedContainerStyles>
      <TitleListFriendFeedStyles>
        Lista de amigos.
        <small>Estas cuentas te agregaron a su lista de amigos.</small>
      </TitleListFriendFeedStyles>
        <ListFriendBoxContainerStyles>
          { renderItems() }
        </ListFriendBoxContainerStyles>
    </ListFriendFeedContainerStyles>
    )
}

export default ListFriendFeed