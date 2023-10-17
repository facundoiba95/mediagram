import React, { useState } from 'react'
import { ChangeImageUserContainerStyles, ContainerImageUploadStyles, FormChangeImageUserStyles } from './ChangeImageUserStyles'
import { useSelector, useDispatch } from 'react-redux';
import Compressor from 'compressorjs';
import { RiUserSmileFill } from 'react-icons/ri';
import LoaderResponsive from '../Loaders/LoaderResponsive/LoaderResponsive';
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer';
import { changeImgProfile } from '../../../redux/slices/userSlices/userSlices';
import LoaderCreatePost from '../Loaders/LoaderCreatePost/LoaderCreatePost';
import ModalStatusUpdateImage from '../Modals/ModalStatusUpdateImage/ModalStatusUpdateImage';
import { refreshUserAuth } from '../../../redux/slices/authSlices/authSlices';


const ChangeImageUser = () => {
  const userAuth = useSelector( state => state.authSlices.user );
  const dispatch = useDispatch();
  const isLoading = useSelector( state => state.userSlices.isLoading );
  const status = useSelector( state => state.userSlices.status );
  const errorMessage = useSelector( state => state.userSlices.error );

  //image states
  const [ loadImg, setLoadImg ] = useState(userAuth.imgProfile);
  const [ isLoadingChangeImage, setIsLoadingChangeImage ] = useState(false);


  const handleCompressorImage = (e) => {
    const img = document.getElementById('newImgProfile');
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
            setLoadImg(URL.createObjectURL(e.target.files[0]));
            let file = new File([compressedResult], compressedResult.name);
            list.items.add(file);
            const myListFiles = list.files;
            img.files = myListFiles;
            setIsLoadingChangeImage(false);
           }   
        }
      }); 
  }

  const renderImageDefault = () =>{
    if(isLoadingChangeImage){
      return (<LoaderResponsive/>)
    } else {
      return (
        <>
        {
          loadImg
          ? <img src={loadImg} alt="image to upload user" />
          : <RiUserSmileFill className='iconImgUpdate'/>
        }
        </>
      )
    }
  }
  
  const handleUpdateImageProfile = async (e) => {
      e.preventDefault();
      const formCreateContent = document.getElementById('updateImageForm');
      await dispatch(changeImgProfile(formCreateContent));
      await dispatch(refreshUserAuth());
  }

  return (
    <TransitionContainer>
      {
        isLoading 
        ? <LoaderCreatePost/>
        : status !== null 
        ? <ModalStatusUpdateImage status={status} error={errorMessage}/>
        : <ChangeImageUserContainerStyles>
             <h2>Cambiar imagen de perfil.</h2>
             <FormChangeImageUserStyles id='updateImageForm' onSubmit={(e) => handleUpdateImageProfile(e)}>
               <ContainerImageUploadStyles>
                 { renderImageDefault() }
                 <input 
                 type="file"
                 name='newImgProfile'
                 id='newImgProfile'
                 accept='image/*'
                 onChange={(e) => handleCompressorImage(e)}/>
               </ContainerImageUploadStyles>
               <span>
                 <button>Cambiar imagen de perfil</button>
               </span>
             </FormChangeImageUserStyles>
          </ChangeImageUserContainerStyles>
      }
    </TransitionContainer>
    )
}

export default ChangeImageUser