import React, { useContext } from 'react'
import { MdSettings } from 'react-icons/md'
import { GlobalContext } from '../../../Context/GlobalContext';

const ButtonMenuProfile = () => {
    const { isOpenMenuSetting, setIsOpenMenuSetting } = useContext( GlobalContext );

    return (
        <span className='spanMenuSetting' onClick={() => setIsOpenMenuSetting(!isOpenMenuSetting)}>
            <MdSettings className='iconSetting' />
            <small>Ajustes de usuario.</small>
        </span>
    )
}

export default ButtonMenuProfile