import React, { useContext, useEffect } from 'react';

// loaders
import LoaderCreatePost from '../../../molecules/Loaders/LoaderCreatePost/LoaderCreatePost';

// hooks and tools
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// styles
import { ButtonCreateContentStyles, CreateContentContainerStyles, FormCreateContentContainerStyles, GridOneContainerStyles, GridTwoContainerStyles } from './FormCreateContentStyles'
import TransitionContainer from '../../../Containers/TransitionContainer/TransitionContainer';
import ModalStatusCreateContent from '../../../molecules/Modals/ModalStatusCreateContent/ModalStatusCreateContent';

// reducers and actions
import { createPost, restarStatusPost } from '../../../../redux/slices/postSlices/postSlices';
import { restartUserFound } from '../../../../redux/slices/userSlices/userSlices';
import { resetStateLocation } from '../../../../redux/slices/locationSlices/locationSlices';
import { restartStatusAuthSlice, validateSession } from '../../../../redux/slices/authSlices/authSlices';
import { setStatusNotification, setUserReceptor } from '../../../../redux/slices/socketSlices/notificationSlices/notificationSlices';
import { GlobalContext } from '../../../../Context/GlobalContext';
import CompressImage from '../../../molecules/CompressImage/CompressImage';
import InfoUserCreatePost from '../../../atoms/InfoUserCreatePost/InfoUserCreatePost';
import GeoLocationPost from '../../../molecules/GeoLocationPost/GeoLocationPost';
import CreateReferTo from '../../../molecules/CreateReferTo/CreateReferTo';
import ShareInExplore from '../../../molecules/ShareInExplore/ShareInExplore';


const FormCreateContent = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const locationRouterDom = useLocation();

  // user states
  const userAuth = useSelector(state => state.authSlices.user);
  const user = useSelector(state => state.userSlices.userFound);
  const isLogged = useSelector(state => state.authSlices.isLogged);

  // post states
  const isLoading = useSelector(state => state.postSlices.isLoading);
  const status = useSelector(state => state.postSlices.status);
  const errorMessage = useSelector(state => state.postSlices.error);

  // tags
  const { listTags } = useSelector(state => state.tagSlices);

  //context
  const { isSelectedImage, locationSelected, listReferTo, switchChecked, setSwitchChecked } = useContext(GlobalContext);

  useEffect(() => {
    dispatch(resetStateLocation());
    dispatch(restartUserFound());
    dispatch(restarStatusPost())
  }, [])

  const titleCreateContent = {
    POST: 'Publicación.',
    FASTPOST: 'Publicación rápida.',
    EXCLUSIVEPOST: 'Publicación exclusiva.'
  }

  const renderDescription = () => {
    if (locationRouterDom.pathname === '/createContent/FASTPOST') return (<></>)
    return (
      <textarea name="description" id="description" cols="30" rows="10" placeholder='Agrega una descripción ...' ></textarea>
    )
  }

  const handleCreatePost = async (e) => {
    e.preventDefault();
    await dispatch(validateSession());
    if (isLogged) {
      const formCreateContent = document.getElementById('formCreateContent');
      await dispatch(createPost(formCreateContent));
      setSwitchChecked(false);
      if (listReferTo.length) {
        dispatch(setStatusNotification());
        // dispatch(setUserReceptor(post[0].postBy.username));
      }
      dispatch(restartStatusAuthSlice());
    }
  }

  return (
    <CreateContentContainerStyles isSelectedImage={isSelectedImage}>
      <TransitionContainer>
        <FormCreateContentContainerStyles onSubmit={(e) => e.preventDefault()} id='formCreateContent' isLoading={!isLoading} isSelectedImage={isSelectedImage}>
          <h2 className='titleCreateContent'>{titleCreateContent[params.typeContent]}</h2>
          {/* <ShareInExplore/> */}
          {
            isLoading
              ? <LoaderCreatePost />
              : status !== null ?
                <ModalStatusCreateContent status={status} error={errorMessage} />
                :
                <>
                  <GridOneContainerStyles isSelectedImage={isSelectedImage}>
                    <CompressImage />
                    <ShareInExplore />
                  </GridOneContainerStyles>
                  <GridTwoContainerStyles isSelectedImage={isSelectedImage}>
                    <span>
                      <InfoUserCreatePost userAuth={userAuth} />
                      {renderDescription()}
                    </span>
                    <GeoLocationPost />
                    <CreateReferTo user={user} />
                  </GridTwoContainerStyles>
                  <ButtonCreateContentStyles onClick={(e) => handleCreatePost(e)}>
                    {'Crear contenido'}
                  </ButtonCreateContentStyles>
                </>
          }
          
          {/* Inputs hidden para backend */}
          <input type="text" name='referTo' value={JSON.stringify(listReferTo)} hidden />
          <input type="text" name='location' value={locationSelected} hidden />
          <input type="text" name='typePost' value={params.typeContent} hidden />
          <input type="text" name='postBy' value={userAuth._id} hidden />
          <input type="text" name='tags' value={JSON.stringify(listTags)} hidden/>
          <input type="text" name='shareInExplore' value={JSON.stringify(switchChecked)} hidden/>
        </FormCreateContentContainerStyles>
      </TransitionContainer>
    </CreateContentContainerStyles>
  )
}

export default FormCreateContent