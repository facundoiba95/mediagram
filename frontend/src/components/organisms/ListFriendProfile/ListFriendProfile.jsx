import React, { useEffect, useState } from 'react'
import { HeadSectionListFriendStyles, ItemFollowerStyles, ListFollowersStyles, ListFriendProfileContainerStyles } from './ListFriendProfileStyles'
import { useDispatch, useSelector } from 'react-redux'
import SearchBarFollowers from '../../molecules/SearchBars/SearchBarFollowers/SearchBarFollowers'
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer'
import { IoHeartCircle } from "react-icons/io5";
import { updateCloseList } from '../../../redux/slices/authSlices/authSlices'
import { RiUserSmileFill } from 'react-icons/ri'
import { MessageNotFollowUpRequestStyles } from '../../molecules/FollowUpRequest/FollowUpRequestStyles'

const ListFriendProfile = () => {
  const { user } = useSelector(state => state.authSlices);
  const { userFound } = useSelector(state => state.userSlices);
  const [ copyUserFound, setCopyUserFound ] = useState(userFound);
  const followers = user.followers;
  const listFriends = user.closeList;
  const dispatch = useDispatch();
  const [ newListFriends, setNewListFriends ] = useState(listFriends);
  const [ hiddenBtnUpdateList, setHiddenBtnUpdateList ] = useState(true);
  
  const renderFollowers = () => {
    if(!userFound.length) {
      return (
        <MessageNotFollowUpRequestStyles>
          <p>Aún no tienes seguidores.</p>
        </MessageNotFollowUpRequestStyles>
      )
    }
    return userFound.map(usr => {
      const { imgProfile, username, _id } = usr;
      const isUserSelected = newListFriends.some(user => user === _id);

      return (
        <ItemFollowerStyles data-id={_id} onClick={(e) => addFriendToList(e)} isSelected={isUserSelected}>
          {
            imgProfile
            ? <img src={imgProfile} alt="" />
            : <RiUserSmileFill className='iconUserDefault'/>
          }
          <h3>{username}</h3>
          <IoHeartCircle className='iconUserSelected'/>
        </ItemFollowerStyles>
      )
    })
  }


  const addFriendToList = (e) => {
    const idUserSelected = e.currentTarget.dataset.id;
    const isAddedinList = newListFriends.some(usr => usr === idUserSelected);

    setNewListFriends(() => {
      if (isAddedinList) {
        return newListFriends.filter(usr => usr !== idUserSelected);
      } else {
        return [ ... newListFriends, idUserSelected]
      }
    });
  }

  const sendNewList = () => {
    dispatch(updateCloseList(newListFriends));
  }

  useEffect(() => {
    if(JSON.stringify(listFriends) !== JSON.stringify(newListFriends)){
      setHiddenBtnUpdateList(false);
    } else {
      setHiddenBtnUpdateList(true);
    }
  }, [newListFriends])

  return (
    <TransitionContainer>
      <ListFriendProfileContainerStyles>
        <HeadSectionListFriendStyles>
          <h2>Lista de amigos</h2>
          <button onClick={sendNewList} hidden={hiddenBtnUpdateList}>Actualizar lista</button>
        </HeadSectionListFriendStyles>
        <p>Al crear una <b>Publicación exclusiva</b>, solamente estas cuentas podran ver el contenido.</p>
        <SearchBarFollowers data={followers} placeholder={'Buscar en seguidores'} />
        <ListFollowersStyles>
          {renderFollowers()}
        </ListFollowersStyles>
      </ListFriendProfileContainerStyles>
    </TransitionContainer>
  )
}

export default ListFriendProfile