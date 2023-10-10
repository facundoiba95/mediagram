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
    const user = useSelector( state => state.userSlices.userFiltered );
    const [ inputSearchUserFollow, setInputSearchUser ] = useState('');
    const placeholderValue = {
        followers: `Buscar seguidores de ${params.username}`,
        followings: `Buscar a quién sigue ${params.username}`
    }

    // useContext
    const { isOpen, setIsOpen } = useContext( GlobalContext );


    const handleCloseSearchBar = () => {
        setIsOpen(!isOpen);
        setInputSearchUser('');
    }
    
    useEffect(() => {
        if(inputSearchUserFollow.length < 1){
            // if(params.typeFollow == 'followers'){
            //     dispatch(setIsLoadingUser(true));
            //     dispatch(listSearchFollow( user[0].followers));
            //     dispatch(setIsLoadingUser(false));
            // } else if(params.typeFollow == 'followings'){
            //     dispatch(setIsLoadingUser(true));
            //     dispatch(listSearchFollow( user[0].followings));
            //     dispatch(setIsLoadingUser(false));
            //
            //
            //         arreglar bug de search bars, los resultados no desaparecen al cerrar el modal
            //
            // }
            return;
        }

        if(params.typeFollow == 'followers'){
            dispatch(setIsLoadingUser(true));
            dispatch(listSearchFollow( user[0].followers.filter(usr => usr.username.includes(inputSearchUserFollow))));
            dispatch(setIsLoadingUser(false));
        } else if(params.typeFollow == 'followings'){
            dispatch(setIsLoadingUser(true));
            dispatch(listSearchFollow( user[0].followings.filter(usr => usr.username.includes(inputSearchUserFollow))));
            dispatch(setIsLoadingUser(false));
        }
    }, [ inputSearchUserFollow ])

  return (
    <BarFollowContentContainerStyles isOpen={isOpen}>
        <AiOutlineCloseCircle className='iconCloseSearchBar' onClick={() => handleCloseSearchBar() }/>
        <input type="text" placeholder={placeholderValue[params.typeFollow]} value={inputSearchUserFollow} onChange={(e) => setInputSearchUser(e.target.value)}/>
        <BiSearch className='iconSearch'/>
    </BarFollowContentContainerStyles>
    )
}

export default BarFollowContent