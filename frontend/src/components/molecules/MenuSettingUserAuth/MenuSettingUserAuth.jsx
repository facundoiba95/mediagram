import React, { useContext } from 'react';
import { GlobalContext } from '../../../Context/GlobalContext';
import { MenuSettingItemStyles, MenuSettingListStyles } from './MenuSettingUserAuthStyles';
import { useDispatch, useSelector } from 'react-redux';
import { changePrivacityOfAccount, restartStatusAuthSlice, validateSession } from '../../../redux/slices/authSlices/authSlices';
import { useNavigate, useParams } from 'react-router-dom';
import { restartStatusUser } from '../../../redux/slices/userSlices/userSlices';
import { BsFillImageFill, BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs';
import { MdOutlinePassword } from 'react-icons/md';
import { GiSettingsKnobs } from 'react-icons/gi';


export const MenuSettingUserAuth = ({isPrivate}) => {
    const { isOpenMenuSetting, setIsOpenMenuSetting  } = useContext( GlobalContext );
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const params = useParams();
    const isLogged = useSelector( state => state.authSlices.isLogged );


    const privacityOfAccount = () => {
       return (
        isPrivate
        ? <MenuSettingItemStyles onClick={() => handleChangePrivacityOfAccount()}><BsFillUnlockFill className='iconItemMenuSetting'/>Cambiar a <b>Cuenta Pública</b></MenuSettingItemStyles>
        : <MenuSettingItemStyles onClick={() => handleChangePrivacityOfAccount()}><BsFillLockFill className='iconItemMenuSetting'/>Cambiar a <b>Cuenta Privada</b></MenuSettingItemStyles>
       )
    }

    const handleChangePrivacityOfAccount = async () => {
        await dispatch(validateSession());
        if(isLogged){
            if(isPrivate) {
                if(window.confirm('Deseas cambiar la privacidad de tu cuenta a "CUENTA PÚBLICA"?')){
                    setIsOpenMenuSetting(!isOpenMenuSetting);
                    await dispatch(changePrivacityOfAccount(false));
                    await alert('Tu cuenta es PÚBLICA.');
                    return;
                } else {
                    setIsOpenMenuSetting(!isOpenMenuSetting);
                    return;
                }
                
            } else {
                if(window.confirm('Deseas cambiar la privacidad de tu cuenta a "CUENTA PRIVADA"?')){
                    setIsOpenMenuSetting(!isOpenMenuSetting);
                    await dispatch(changePrivacityOfAccount(true));
                    await alert('Tu cuenta es PRIVADA.');
                    return;
                } else {
                    setIsOpenMenuSetting(!isOpenMenuSetting);
                    return;
                }
            }
        } else {
           navigator('/')
        }
    }

    const goChangeImageUser = async () => {
        dispatch(validateSession());
        if(isLogged){
        dispatch(restartStatusUser());
        dispatch(restartStatusAuthSlice());
        setIsOpenMenuSetting(!isOpenMenuSetting);
        await navigator(`/profile/${params.username}/changeImageUser`);
        } else {
        navigator('/')
        }
    }

    const goChangePassword = async () => {
        await dispatch(validateSession());
       if(isLogged){
        setIsOpenMenuSetting(!isOpenMenuSetting);
        dispatch(restartStatusUser());
        dispatch(restartStatusAuthSlice());
        await navigator(`/profile/${params.username}/changePassword`);
       } else {
        navigator('/')
       }
    }

  return (
    <MenuSettingListStyles isOpenMenuSetting={isOpenMenuSetting}>
        <MenuSettingItemStyles onClick={() => goChangeImageUser()}><BsFillImageFill className='iconItemMenuSetting'/>Cambiar imagen de perfil</MenuSettingItemStyles>
        <MenuSettingItemStyles onClick={() => goChangePassword()}><MdOutlinePassword className='iconItemMenuSetting'/>Cambiar contraseña</MenuSettingItemStyles>
        { privacityOfAccount() }
        <MenuSettingItemStyles onClick={() => setIsOpenMenuSetting(!isOpenMenuSetting)}><GiSettingsKnobs className='iconItemMenuSetting'/>Otros ajustes</MenuSettingItemStyles>
    </MenuSettingListStyles>
  )
}
