import React, { useContext } from 'react'
import { ItemResultToSearchStyles, ResultToSearchContainerStyles } from './ResultToSearchStyles'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from '@mui/material/Skeleton';
import { GlobalContext } from '../../../Context/GlobalContext';
import { RiUserSmileFill } from 'react-icons/ri';
import { MoonLoader } from 'react-spinners';
import { useNavigate, useParams } from 'react-router-dom';
import { restartUserFound } from '../../../redux/slices/userSlices/userSlices';
import ModalUnauthenticated from '../Modals/ModalUnauthenticated/ModalUnauthenticated';


const ResultToSearch = () => {
    // hooks and tools
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    // states
    const isLoading = useSelector( state => state.userSlices.isLoading );
    const userSearched = useSelector( state => state.userSlices.userFound );
    const statusUserSearched = useSelector( state => state.userSlices.status );
    const isLogged = useSelector( state => state.authSlices.isLogged );

    // useContext
    const { isOpenSearchBar, setIsOpenSearchBar } = useContext(GlobalContext);

    const renderContentSearched = () => {
        if(!isLogged){
            return ( <ModalUnauthenticated/> )
        }
        if(statusUserSearched === 404 && !userSearched.length ){
            return (
                <h2>No se encontraron coincidencias :/</h2>
            )
        } else if(!userSearched.length){
            return (
                <h2>Ingresa el nombre de la cuenta que quieres buscar ...</h2>
            )
        } else if(userSearched) {
            return userSearched.map( item => {
                const { username, imgProfile, _id } = item;
                return (
                    <ItemResultToSearchStyles isOpenSearchBar={isOpenSearchBar} data-username={username} onClick={(e) => goToProfile(e)}>
                        {
                            isLoading 
                            ? <Skeleton variant="circular" width={60} height={60} animation='wave' />
                            : <>
                              {
                                imgProfile
                                ? <img src={imgProfile} alt="img profile user searched" data-username={username} onClick={(e) => goToProfile(e)}/>
                                : <RiUserSmileFill className='imgProfile'/>
                              }
                              </>
                        }
                        {
                            isLoading 
                            ? <Skeleton variant='rounded' width={150} height={20} animation='wave' />
                            : <p data-username={username} onClick={(e) => goToProfile(e)}>{username}</p>
                        }
                    </ItemResultToSearchStyles>
                )
            })
        }
    }

    const goToProfile = async (e) => {
        const valueUserSelected = e.target.dataset.username;
        params.username = valueUserSelected;
        setIsOpenSearchBar(!isOpenSearchBar);
        navigator(`/profile/${params.username}`);
        dispatch(restartUserFound());
    }

  return (
    <ResultToSearchContainerStyles isOpenSearchBar={isOpenSearchBar}>
        { 
          isLoading 
          ? <MoonLoader size={30} color='white' className='loader'/>
          : renderContentSearched()
        }
    </ResultToSearchContainerStyles>
    )
}

export default ResultToSearch