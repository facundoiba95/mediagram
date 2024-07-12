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
import MoonLoaderResponsive from '../../Loaders/MoonLoaderResponsive/MoonLoaderResponsive';

const ModalSearchUsers = ({ data, message, placeholderValue, type, title, resetData }) => {
  const { isOpen, setIsOpen, setIsOpenMenu } = useContext(GlobalContext);
  const usersFounded = useSelector(state => state.userSlices.userFound);
  const { isLoading } = useSelector(state => state.userSlices);
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
    if (!isOpen) return;
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
        <b>{title}</b>
        <SearchBarUsers
          isOpen={isOpen}
          data={data}
          placeholderValue={placeholderValue}
          type={type}
          resetData={resetData}
        />
        <ListModalSearchUsersStyles>
          {
            message
              ? <small><FaEye className='iconView' />{message}</small>
              : <></>
          }
          {
            isLoading
              ? <MoonLoaderResponsive size={40}/>
              : renderUserFounded()
          }
        </ListModalSearchUsersStyles>
      </ModalSearchUsersContainerStyles>
    </ContainerBlurWrapperStyles>
  )
}

export default ModalSearchUsers;