import React, { useEffect, useState } from 'react'
import { ButtonCreateContentStyles, CreateContentContainerStyles, FormCreateContentContainerStyles, GridOneContainerStyles, GridTwoContainerStyles, ItemRefersToStyles, ItemUserSearchedStyles, ListRefersToStyles, ListUserSearchedStyles, ReferToContainerStyles, ResultLocationContainerStyles } from './FormCreateContentStyles'
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer'
import { useLocation, useParams } from 'react-router-dom';
import { MdLocationOn, MdWrongLocation } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationByCity, resetLocation } from '../../../redux/slices/locationSlices/locationSlices';
import imgAddContent from '../../../assets/addContentMediagram.png';
import Compressor from 'compressorjs';
import { MoonLoader } from 'react-spinners';
import { FaWindowClose } from 'react-icons/fa';
import { RiUserFollowFill } from 'react-icons/ri';
import { createPost } from '../../../redux/slices/postSlices/postSlices';
import { restartUser, searchUser } from '../../../redux/slices/userSlices/userSlices';
import LoaderCreatePost from '../Loaders/LoaderCreatePost/LoaderCreatePost';
import LoaderResponsive from '../Loaders/LoaderResponsive/LoaderResponsive';
import ModalStatusCreateContent from '../Modals/ModalStatusCreateContent/ModalStatusCreateContent';

const FormCreateContent = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const locationRouterDom = useLocation();

  // image states
  const [ loadImage, setLoadImage ] = useState(imgAddContent);
  const [ isLoadingChangeImage, setIsLoadingChangeImage ] = useState(false);


  // location states
  const [ locationSelected, setLocationSelected ] = useState('');
  const [ isHiddenInputLocation, setIsHiddenInputLocation ] = useState(false); 
  const [ inputCity, setInputCity ] = useState('');
  // location redux states
  const location = useSelector( state => state.locationSlices.location );
  const errorLocation = useSelector( state => state.locationSlices.location.error );
  const isLoadingLocation = useSelector( state => state.locationSlices.isLoading );

  // referTo states
  const [ inputReferTo, setInputReferTo ] = useState('');
  const [ listReferTo, setListReferTo ] = useState([]);

  // user states
  const userAuth = useSelector( state => state.authSlices.user );
  const user = useSelector( state => state.userSlices.user );

  const [ listUsers, setListUsers ] = useState([]);

  // post states
  const isLoading = useSelector( state => state.postSlices.isLoading );
  const status = useSelector( state => state.postSlices.status );
  const errorMessage = useSelector( state => state.postSlices.error );


  useEffect(() => {
    dispatch(resetLocation());
    dispatch(restartUser());
  }, [])

  const titleCreateContent = {
    post: 'Publicación.',
    fastPost: 'Publicación rápida.',
    closeFriend: 'Lista de amigos.'
  }

  const searchLocation = (e) => {
    e.preventDefault();
    dispatch(getLocationByCity(inputCity))
  }

  const handleSelectLocation = () => {
    setLocationSelected(location[0].direccion)
    setIsHiddenInputLocation(true)
    setInputCity('');
  }

  const handleRestartLocationSelected = () => {
    dispatch(resetLocation());
    setIsHiddenInputLocation(false)
  }

  const renderLocation = () => {
    if(location.error == null){
      return location.map(item => {
        return (
          <>
          <p onClick={() => handleSelectLocation() }>
            <MdLocationOn className='iconLocation'/>
            {item.direccion}
          </p>
           <FaWindowClose className='iconDeleteLocationSelected' onClick={() => handleRestartLocationSelected()}/> 
          </>

        )
      })
    } else {
      return (
        <p><MdWrongLocation className='iconLocation'/>{errorLocation}</p>
      )
    }
  }

  const handleCompressImage = (e) => {
    const img = document.getElementById('imgPost');
    setIsLoadingChangeImage(true);

    let list = new DataTransfer(); // nueva lista de FileList, se envia al backend
    new Compressor(img.files[0], {
      quality: 0.8, 
      success: (compressedResult) => {
        if(compressedResult.size > 10485760) { // limite de tamaño de archivo que soporta Cloudinary
          setIsLoadingChangeImage(false);
          alert('Debes subir imagenes menores a 10Mb')
          img.value = '';
          return;
         } else {
          setLoadImage(URL.createObjectURL(e.target.files[0]));
          let file = new File([compressedResult], compressedResult.name);
          list.items.add(file);
          const myListFiles = list.files;
          img.files = myListFiles;
          setIsLoadingChangeImage(false);
         }   
      }
    }); 
    }

  const handleSearchUser = (e) => {
    e.preventDefault();
    const valueInputUser = e.target.value;
    setInputReferTo(valueInputUser);

    if(valueInputUser.length > 3){
      dispatch(searchUser(valueInputUser));
      // setListUsers(dataTestUsers.filter(item => item.username.includes(valueInputUser)))
    } else {
      dispatch(restartUser());
      return;
    }
  }

  const renderListUserSearched = () => {
    return user.map(item => {
      return (
        <ItemUserSearchedStyles onClick={(e) => handleSelectReferTo(e)} data-username={item.username}>
          <img src={item.imgProfile} alt="" data-username={item.username}/>
          <p data-username={item.username}>{item.username}<RiUserFollowFill className='iconFriends' data-username={item.username}/></p>
        </ItemUserSearchedStyles>
      )
    })
  }

  const handleSelectReferTo = (e) => {
    const usernameSelected = e.target.dataset.username;
    setListReferTo([ ... listReferTo, usernameSelected]);
    dispatch(restartUser())
    setInputReferTo('');
  }

  const handleDeleteReferTo = (e) => {
    const usernameSelected = e.target.dataset.username;
    setListReferTo(listReferTo.filter(item => item !== usernameSelected))
  }

  const renderReferTo = () => {
    return listReferTo.map(item => {
      return (
        <ItemRefersToStyles data-username={item}>
          <p data-username={item}>{item}</p>
          <FaWindowClose className='iconDeleteReferTo' data-username={item} onClick={(e) => handleDeleteReferTo(e)}/>
        </ItemRefersToStyles>
      )
    })
  }

  const renderDescription = () => {
    if(locationRouterDom.pathname === '/createContent/fastPost'){
      return (
        <></>
      )
    } else {
      return (
        <>
          <textarea name="description" id="description" cols="30" rows="10" placeholder='Agrega una descripción ...' ></textarea>
        </>
      )
    }
  }

  const handleCreatePost = (e) => {
    e.preventDefault();
    const formCreateContent = document.getElementById('formCreateContent');
    dispatch(createPost(formCreateContent));
  }

  return (
    <CreateContentContainerStyles>
        <TransitionContainer>
            <FormCreateContentContainerStyles onSubmit={(e) => e.preventDefault()} id='formCreateContent' isLoading={!isLoading}>
            <h2 className='titleCreateContent'>{titleCreateContent[params.typeContent]}</h2>
              {
                isLoading
                ? <LoaderCreatePost/>
                : status !== null ?
                <ModalStatusCreateContent status={status} error={errorMessage}/>
                :
                <>
                <GridOneContainerStyles>
                {
                  isLoadingChangeImage 
                  ? <LoaderResponsive /> 
                  : <img src={loadImage} alt="image create content" />
                }
                <input 
                 type="file"
                 name="imgPost" 
                 id="imgPost"
                 accept='image/*' 
                 onChange={(e) => handleCompressImage(e)}
                 />
              </GridOneContainerStyles>
              <GridTwoContainerStyles>
                <span>
                  <span className='infoUserAuth'>
                   <img src={userAuth.imgProfile} alt="img profile" />
                   <p>{userAuth.username}</p>
                  </span>
                  { renderDescription() }
                </span>
                <span>
                  <input 
                  type="text" 
                  value={inputCity} 
                  onChange={(e) => setInputCity(e.target.value)} 
                  className='inputText' 
                  placeholder='Agregar ubicación'
                  hidden={isHiddenInputLocation}
                  />
                  <ResultLocationContainerStyles>
                     { 
                       isLoadingLocation ?
                       <MoonLoader size={10}/>
                       : renderLocation()
                     }
                  </ResultLocationContainerStyles>
                  <button onClick={(e) => searchLocation(e)} className='btnSearchLocation' hidden={isHiddenInputLocation}>Buscar ubicación</button>
                </span>
                <ReferToContainerStyles>
                  <input 
                  type="text"
                  value={inputReferTo}
                  onChange={(e) => handleSearchUser(e)}
                  placeholder='Mencionar'
                   />
                  <ListUserSearchedStyles isExistUserSearched={user.length}>
                    { renderListUserSearched() }
                  </ListUserSearchedStyles>
                  <ListRefersToStyles>
                    { renderReferTo() }
                  </ListRefersToStyles>
                </ReferToContainerStyles>
              </GridTwoContainerStyles>
              <ButtonCreateContentStyles onClick={(e) => handleCreatePost(e)}>
                {'Crear contenido'}
              </ButtonCreateContentStyles>
                
                </>
                
              }

              {/* Inputs hidden para backend */ }
              <input type="text" name='referTo' value={JSON.stringify(listReferTo)}  hidden/>
              <input type="text" name='location' value={locationSelected} hidden/>
              <input type="text" name='typePost' value={params.typeContent} hidden/>
              <input type="text" name='postBy' value={userAuth._id} hidden/>
            </FormCreateContentContainerStyles>
        </TransitionContainer>
    </CreateContentContainerStyles>
  )
}

export default FormCreateContent