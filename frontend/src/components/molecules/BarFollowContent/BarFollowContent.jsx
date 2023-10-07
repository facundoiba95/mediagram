import React, { useContext, useEffect, useState } from 'react'
import { BarFollowContentContainerStyles } from './BarFollowContentStyles'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../../Context/GlobalContext';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { listSearchFollow, setIsLoadingUser } from '../../../redux/slices/userSlices/userSlices';

const BarFollowContent = () => {
    // hooks and tools
    const dispatch = useDispatch();
    const params = useParams();

    // states
    const user = useSelector( state => state.userSlices.user );
    const [ inputSearchUser, setInputSearchUser ] = useState('');
    const placeholderValue = {
        followers: `Buscar seguidores de ${params.username}`,
        followings: `Buscar a quién sigue ${params.username}`
    }

    // useContext
    const { isOpen, setIsOpen } = useContext( GlobalContext );


    const handleCloseSearchBar = () => {
        setIsOpen(!isOpen);
        setInputSearchUser('');
        dispatch(listSearchFollow([]));
    }
    
    useEffect(() => {
        if(inputSearchUser.length < 1){
            dispatch(listSearchFollow([]));
            return;
        }
        if(params.typeFollow == 'followers'){
            dispatch(setIsLoadingUser(true));
            dispatch(listSearchFollow( user[0].followers.filter(usr => usr.username.includes(inputSearchUser))));
            dispatch(setIsLoadingUser(false));
        } else if(params.typeFollow == 'followings'){
            dispatch(setIsLoadingUser(true));
            dispatch(listSearchFollow( user[0].followings.filter(usr => usr.username.includes(inputSearchUser))));
            dispatch(setIsLoadingUser(false));
        }
    }, [ inputSearchUser ])

  return (
    <BarFollowContentContainerStyles isOpen={isOpen}>
        <AiOutlineCloseCircle className='iconCloseSearchBar' onClick={() => handleCloseSearchBar() }/>
        <input type="text" placeholder={placeholderValue[params.typeFollow]} value={inputSearchUser} onChange={(e) => setInputSearchUser(e.target.value)}/>
        <BiSearch className='iconSearch'/>
    </BarFollowContentContainerStyles>
    )
}

export default BarFollowContent