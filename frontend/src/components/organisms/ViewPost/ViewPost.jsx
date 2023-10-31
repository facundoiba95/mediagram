import React, { useContext, useEffect, useState } from 'react'
import { ViewPostBackgroundStyles , ViewPostImageContainerStyles, ViewPostLogosLeftStyles, ViewPostLogosRightStyles, ViewPostWrapperStyles } from './ViewPostStyles'
import { GlobalContext } from '../../../Context/GlobalContext'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer';
import CommentsInPost from '../../molecules/CommentsInPost/CommentsInPost';
import { useDispatch, useSelector } from 'react-redux';
import { getPostByID } from '../../../redux/slices/postSlices/postSlices';
import Loader from '../../molecules/Loaders/Loader/Loader';
import { validateSession } from '../../../redux/slices/authSlices/authSlices';

const ViewPost = () => {
    const { isOpenViewPost, setIsOpenViewPost } = useContext(GlobalContext);
    const isLoadingPost = useSelector( state => state.postSlices.isLoading );
    const [ isReadyPost, setIsReadyPost ] = useState(false);
    const post = useSelector( state => state.postSlices.post );
    const statusPost = useSelector( state => state.postSlices.status );
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
      if(statusPost !== 200){
        navigator('/unauthorized')
        return;
      }

      return post.map(item => {
        const { imgPost, description, counterLikes, counterViews } = item;
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
         { renderPost() }
        </TransitionContainer>
    }
    </>
  )
}

export default ViewPost