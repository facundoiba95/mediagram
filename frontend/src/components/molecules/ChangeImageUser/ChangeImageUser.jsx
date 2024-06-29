import React, { useState } from 'react'
import { ChangeImageUserContainerStyles, ContainerImageUploadStyles, FormChangeImageUserStyles } from './ChangeImageUserStyles'
import { useSelector, useDispatch } from 'react-redux';
import { RiUserSmileFill } from 'react-icons/ri';
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer';
import { changeImgProfile } from '../../../redux/slices/userSlices/userSlices';
import LoaderCreatePost from '../Loaders/LoaderCreatePost/LoaderCreatePost';
import ModalStatusUpdateImage from '../Modals/ModalStatusUpdateImage/ModalStatusUpdateImage';
import { refreshUserAuth } from '../../../redux/slices/authSlices/authSlices';


const ChangeImageUser = () => {
  const userAuth = useSelector(state => state.authSlices.user);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.userSlices.isLoading);
  const status = useSelector(state => state.userSlices.status);
  const errorMessage = useSelector(state => state.userSlices.error);

  //image states
  const [loadImg, setLoadImg] = useState(userAuth.imgProfile);

  const handleChangeImage = (e) => {
    setLoadImg(URL.createObjectURL(e.target.files[0]));
  }

  const renderImageDefault = () => (
    <>
      {
        loadImg
          ? <img src={loadImg} alt="image to upload user" />
          : <RiUserSmileFill className='iconImgUpdate' />
      }
    </>
  )

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
          ? <LoaderCreatePost />
          : status !== null
            ? <ModalStatusUpdateImage status={status} error={errorMessage} />
            : <ChangeImageUserContainerStyles>
              <h2>Cambiar imagen de perfil.</h2>
              <FormChangeImageUserStyles id='updateImageForm' onSubmit={(e) => handleUpdateImageProfile(e)}>
                <ContainerImageUploadStyles>
                  {renderImageDefault()}
                  <input
                    type="file"
                    name='newImgProfile'
                    id='newImgProfile'
                    accept='image/*'
                    onChange={(e) => handleChangeImage(e)}
                  />
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