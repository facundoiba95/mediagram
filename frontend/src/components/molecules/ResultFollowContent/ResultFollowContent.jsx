import React, { useContext } from 'react'
import { ItemFollowContentStyles, ListFollowContentContainerStyles } from './ResultFollowContentStyles'
import { RiUserSmileFill } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoaderResponsive from '../Loaders/LoaderResponsive/LoaderResponsive';
import { listSearchFollow, restartUserFound, searchUser, selectUser } from '../../../redux/slices/userSlices/userSlices';
import { GlobalContext } from '../../../Context/GlobalContext';

const ResultFollowContent = () => {
    // hooks and tools
    const navigator = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();

    // states
    const user = useSelector( state => state.userSlices.userFound );
    const isLoading = useSelector( state => state.userSlices.isLoading );
    const listUserFiltered = useSelector( state => state.userSlices.userFiltered );

    // useContext
    const { isOpen, setIsOpen } = useContext( GlobalContext );

    // data
    const followers = user.length ? user : listUserFiltered[0].followers;
    const following = user.length ? user : listUserFiltered[0].followings;

    const renderItemToFollow = () => {
        if( params.typeFollow === 'followers' ){
            return followers.map(usr => {
                const { username, imgProfile, _id } = usr;
                return (
                    <ItemFollowContentStyles data-username={username} onClick={(e) => goToProfile(e)}>
                    {
                        imgProfile 
                        ? <img src={imgProfile} alt="imgProfile" data-username={username}/>
                        : <RiUserSmileFill className='imgProfile' data-username={username}/>
                    }
                    <h2 data-username={username}>{ username }</h2>
                    </ItemFollowContentStyles>
            )})
        } else if( params.typeFollow === 'followings' ) {
            return following.map(usr => {
                const { username, imgProfile, _id } = usr;
                return (
                    <ItemFollowContentStyles data-username={username} onClick={(e) => goToProfile(e)}>
                    {
                        imgProfile
                        ? <img src={imgProfile} alt="imgProfile" data-username={username}/>
                        : <RiUserSmileFill className='imgProfile' data-username={username}/>
                    }
                    <h2 data-username={username}>{ username }</h2>
                    </ItemFollowContentStyles>
            )})
        } else {
            return (<></>)
        }
    }


    const goToProfile = (e) => {
        const valueUserSelected = e.target.dataset.username;
        params.username = valueUserSelected;
        dispatch(selectUser(params.username));
        setIsOpen(!isOpen);
        dispatch(listSearchFollow([]));
        dispatch(restartUserFound());
        navigator(`/profile/${params.username}`);
    }


  return (
    <ListFollowContentContainerStyles>
        {
            isLoading 
            ? <LoaderResponsive />
            : renderItemToFollow()
        }
    </ListFollowContentContainerStyles>
    )
}

export default ResultFollowContent