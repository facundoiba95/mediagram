<<<<<<< HEAD
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

=======
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

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ButtonMenuProfile