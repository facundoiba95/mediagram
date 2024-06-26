import React, { useContext } from 'react'
import { GlobalContext } from '../../../../Context/GlobalContext'
import { ContainerBlurWrapperStyles } from '../../../Containers/ContainerBlur/ContainerBlurStyles';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RiUserSmileFill } from 'react-icons/ri';
import { FaEye } from 'react-icons/fa';
import { MoonLoader } from 'react-spinners';
import { ItemModalSearchUsersStyles, ListModalSearchUsersStyles, ModalSearchUsersContainerStyles } from './ModalSearchUsersStyles';
import SearchBarUsers from '../../SearchBars/SearchBarUsers/SearchBarUsers';

const ModalSearchUsers = ({ data, message, placeholderValue, type }) => {
  const { isOpen, setIsOpen, isLoadingSearch, setIsOpenMenu } = useContext(GlobalContext);
  const usersFounded = useSelector(state => state.userSlices.userFound);
  const params = useParams();
  const navigator = useNavigate();

  const goToProfile = async (e) => {
    const valueUserSelected = e.currentTarget.dataset.username;
    params.username = valueUserSelected;
    setIsOpen(false);
    setIsOpenMenu(false);
    navigator(`/profile/${params.username}`);
  }


  const renderUserFounded = () => {
    if(!isOpen) return;
    if (!usersFounded.length) {
      return (
        <ItemModalSearchUsersStyles>
          <p>No se encontraron resultados.</p>
        </ItemModalSearchUsersStyles>
      )
    }
    return usersFounded.map(item => {
      const { username, thumbnail, _id } = item;
      return (
        <ItemModalSearchUsersStyles data-username={username} onClick={(e) => goToProfile(e)} key={_id}>
          {
            thumbnail
              ? <img src={thumbnail} alt="imgProfile" />
              : <RiUserSmileFill className='imgProfile' />
          }
          <h2>{username}</h2>
        </ItemModalSearchUsersStyles>
      )
    })
  }

  return (
    <ContainerBlurWrapperStyles isOpen={isOpen}>
      <ModalSearchUsersContainerStyles>
        <SearchBarUsers isOpen={isOpen} data={data} placeholderValue={placeholderValue} type={type} />
        <ListModalSearchUsersStyles>
          {
            message
              ? <small><FaEye className='iconView' />{message}</small>
              : <></>
          }
          {
            isLoadingSearch
              ? <MoonLoader size={30} className='loader' color='white' />
              : renderUserFounded()
          }
        </ListModalSearchUsersStyles>
      </ModalSearchUsersContainerStyles>
    </ContainerBlurWrapperStyles>
  )
}

export default ModalSearchUsers;