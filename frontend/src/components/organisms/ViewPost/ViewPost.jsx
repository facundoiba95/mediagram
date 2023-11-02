import React, { useContext, useEffect, useState } from 'react'
import { ViewPostBackgroundStyles , ViewPostImageContainerStyles, ViewPostLogosLeftStyles, ViewPostLogosRightStyles, ViewPostWrapperStyles } from './ViewPostStyles'
import { GlobalContext } from '../../../Context/GlobalContext'
import { useNavigate, useParams } from 'react-router-dom';
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer';
import CommentsInPost from '../../molecules/CommentsInPost/CommentsInPost';
import { useDispatch, useSelector } from 'react-redux';
import { getPostByID } from '../../../redux/slices/postSlices/postSlices';
import Loader from '../../molecules/Loaders/Loader/Loader';
import { validateSession } from '../../../redux/slices/authSlices/authSlices';
import ModalAuthWindow from '../../molecules/Modals/ModalAuthWindows/ModalAuthWindow';
import ModalInteractionsInfo from '../../molecules/Modals/ModalInteractionsInfo/ModalInteractionsInfo';

const ViewPost = () => {
    const { isOpenViewPost, setIsOpenViewPost } = useContext(GlobalContext);
    const isLoadingPost = useSelector( state => state.postSlices.isLoading );
    const [ isReadyPost, setIsReadyPost ] = useState(false);
    const post = useSelector( state => state.postSlices.post );
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    const goBack = () => {
        setIsOpenViewPost(false);
        navigator(-1);
    }

    useEffect(() => {
      dispatch(validateSession());
      const handleViewPost = async () => {
        await dispatch(getPostByID(params.idPost));
        setIsOpenViewPost(true);
        setIsReadyPost(true)
      }

      handleViewPost();
    },[ dispatch, params.idPost ])

    const renderPost = () => {
      if(isReadyPost){
      return post.map(item => {
        const { imgPost, description, counterLikes, counterViews, likedPost, anonymViews } = item;
        const { username, thumbnail } = item.postedBy;

        return (
          <ViewPostBackgroundStyles isOpenViewPost={ isOpenViewPost }>
          <ViewPostLogosLeftStyles>
          <h1>Mediagram</h1>
          <h1>Mediagram</h1>
          <h1>Mediagram</h1>
          <h1>Mediagram</h1>
          <h1>Mediagram</h1>
          <h1>Mediagram</h1>
          <h1>Mediagram</h1>
          <h1>Mediagram</h1>
          </ViewPostLogosLeftStyles>
          <ViewPostLogosRightStyles>
          <h1>Mediagram</h1>
          <h1>Mediagram</h1>
          <h1>Mediagram</h1>
          <h1>Mediagram</h1>
          <h1>Mediagram</h1>
          <h1>Mediagram</h1>
          <h1>Mediagram</h1>
          <h1>Mediagram</h1>
          </ViewPostLogosRightStyles>
          <ViewPostWrapperStyles>
            <ViewPostImageContainerStyles>
              <img src={ imgPost } alt="image post" loading='lazy'/>
            </ViewPostImageContainerStyles>
            <CommentsInPost 
              description={description}
              username={username}
              thumbnail={thumbnail}
              counterLikes={counterLikes}
              counterViews={counterViews}
              anonymViews={anonymViews}
              likedPost={likedPost}
            />
            <button onClick={() => goBack()}>Cerrar</button>
          </ViewPostWrapperStyles>
        </ViewPostBackgroundStyles>
        )

      })
      } else {
        return (
          <Loader/>
        )
      }
    }

  return (
    <>
    {
      isLoadingPost
      ? <Loader/>
      : <TransitionContainer>
          <ModalAuthWindow/>
          <ModalInteractionsInfo/>
         { renderPost() }
        </TransitionContainer>
    }
    </>
  )
}

export default ViewPost