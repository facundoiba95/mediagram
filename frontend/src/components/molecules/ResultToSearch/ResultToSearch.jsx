import React, { useContext } from 'react'
import { ItemResultToSearchStyles, ResultToSearchContainerStyles } from './ResultToSearchStyles'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from '@mui/material/Skeleton';
import { GlobalContext } from '../../../Context/GlobalContext';
import { RiUserSmileFill } from 'react-icons/ri';
import LoaderResponsive from '../Loaders/LoaderResponsive/LoaderResponsive';
import { MoonLoader } from 'react-spinners';
import { useNavigate, useParams } from 'react-router-dom';
import { setUser } from '../../../redux/slices/userSlices/userSlices';


const ResultToSearch = () => {
    const { isOpenSearchBar, setIsOpenSearchBar } = useContext(GlobalContext);
    const isLoading = useSelector( state => state.userSlices.isLoading );
    const userSearched = useSelector( state => state.userSlices.user );
    const statusUserSearched = useSelector( state => state.userSlices.status );
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    const renderContentSearched = () => {
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
                                imgProfile.length 
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

    const goToProfile = (e) => {
        const valueUserSelected = e.target.dataset.username;
        params.username = valueUserSelected;
        const userSelected = userSearched.filter(user => user.username === valueUserSelected);
        dispatch(setUser(userSelected));
        setIsOpenSearchBar(!isOpenSearchBar);
        navigator(`/profile/${params.username}`);
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