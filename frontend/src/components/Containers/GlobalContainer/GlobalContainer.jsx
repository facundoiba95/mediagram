import React, { useContext, useEffect } from 'react'
import { GlobalContainerGridStyles, GlobalContainerScrollSectionStyle } from './GlobalContainerStyles'
import NavbarHeader from '../../organisms/NavbarMenu/NavbarMenu'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { restartUserFound } from '../../../redux/slices/userSlices/userSlices';
import ModalSearchUsers from '../../molecules/Modals/ModalSearchUsers/ModalSearchUsers';
import { GlobalContext } from '../../../Context/GlobalContext';

const GlobalContainer = ({ children }) => {
  const isLogged = useSelector(state => state.authSlices.isLogged);
  const { userFound } = useSelector(state => state.userSlices);
  const {setIsOpen, setIsOpenMenu} = useContext(GlobalContext);
  const location = useLocation();
  const navigator = useNavigate();
  const params = useParams();

  const goToProfile = async (e) => {
    const valueUserSelected = e.currentTarget.dataset.username;
    params.username = valueUserSelected;
    setIsOpen(false);
    setIsOpenMenu(false);
    navigator(`/profile/${params.username}`);
  }

  return (
    <GlobalContainerGridStyles isLogged={isLogged} >
      <ModalSearchUsers data={userFound} type={'searchUserDB'} resetData={restartUserFound} handleFunction={goToProfile}/>
      <NavbarHeader />
      <GlobalContainerScrollSectionStyle isLogged={isLogged} isFeed={location.pathname.includes(['profile'])}>
        {children}
      </GlobalContainerScrollSectionStyle>
    </GlobalContainerGridStyles>
  )
}

export default GlobalContainer