import React, { useContext } from 'react';
import { GlobalContext } from '../../../Context/GlobalContext';
import { MenuSettingItemStyles, MenuSettingListStyles } from './MenuSettingUserAuthStyles';
import { useDispatch } from 'react-redux';
import { changePrivacityOfAccount } from '../../../redux/slices/authSlices/authSlices';

export const MenuSettingUserAuth = ({isPrivate}) => {
    const { isOpenMenuSetting, setIsOpenMenuSetting  } = useContext( GlobalContext );
    const dispatch = useDispatch();

    const privacityOfAccount = () => {
       return (
        isPrivate
        ? <MenuSettingItemStyles onClick={() => handleChangePrivacityOfAccount()}>Cambiar a Cuenta Pública</MenuSettingItemStyles>
        : <MenuSettingItemStyles onClick={() => handleChangePrivacityOfAccount()}>Cambiar a Cuenta Privada</MenuSettingItemStyles>
       )
    }

    const handleChangePrivacityOfAccount = async () => {
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
    }

  return (
    <MenuSettingListStyles isOpenMenuSetting={isOpenMenuSetting}>
        <MenuSettingItemStyles onClick={() => setIsOpenMenuSetting(!isOpenMenuSetting)}>Cambiar imagen de perfil</MenuSettingItemStyles>
        <MenuSettingItemStyles onClick={() => setIsOpenMenuSetting(!isOpenMenuSetting)}>Cambiar contraseña</MenuSettingItemStyles>
        { privacityOfAccount() }
        <MenuSettingItemStyles onClick={() => setIsOpenMenuSetting(!isOpenMenuSetting)}>Otros ajustes</MenuSettingItemStyles>
    </MenuSettingListStyles>
  )
}
