import React, { useContext, useEffect, useState } from 'react'
import { ContainerQuitViewPostStyles, ViewPostBackgroundStyles , ViewPostImageContainerStyles,ViewPostWrapperStyles } from './ViewPostStyles'
import { GlobalContext } from '../../../Context/GlobalContext'
import { useNavigate, useParams } from 'react-router-dom';
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer';
import CommentsInPost from '../../molecules/CommentsInPost/CommentsInPost';
import { useDispatch, useSelector } from 'react-redux';
import { getPostByID, restarStatusPost } from '../../../redux/slices/postSlices/postSlices';
import Loader from '../../molecules/Loaders/Loader/Loader';
import ModalAuthWindow from '../../molecules/Modals/ModalAuthWindows/ModalAuthWindow';
import ModalSearchUsers from '../../molecules/Modals/ModalSearchUsers/ModalSearchUsers';
import { IoMdArrowRoundBack } from "react-icons/io";
import ModalAddTags from '../../molecules/Modals/ModalAddTags/ModalAddTags';

const ViewPost = ({ children }) => {
    const { isOpenViewPost, setIsOpenViewPost, isOpenAddTags, setIsOpenAddTags } = useContext(GlobalContext);
    const isLoadingPost = useSelector( state => state.postSlices.isLoading );
    const [ isReadyPost, setIsReadyPost ] = useState(false);
    const post = useSelector( state => state.postSlices.post );
    const statusPost = useSelector( state => state.postSlices.status );
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    const goBack = () => {
        setIsOpenViewPost(false);
        dispatch(restarStatusPost())
        setIsOpenAddTags(false)
        navigator(-1);
    }

    useEffect(() => {
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
        const { imgPost, description, counterLikes, counterViews, likes,anonymViews, referTo, location } = item;
        
        const { username, thumbnail } = item.postBy;

        return (
          <ViewPostBackgroundStyles isOpenViewPost={ isOpenViewPost }>
          <ViewPostWrapperStyles>
            <ContainerQuitViewPostStyles>
              <IoMdArrowRoundBack className='iconQuitPost' onClick={() => goBack()}/>
              <h3 onClick={() => goBack()}>Atrás</h3>
            </ContainerQuitViewPostStyles>
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
              likes={likes}
              referTo={referTo}
              location={location}
            />
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

    const renderModalSearchUsers = () => {
      if(params.typeInteraction === 'views'){
        return (
          <ModalSearchUsers data={post[0].views} message={`"${post[0].anonymViews}" vistas de cuentas no registradas.`}/>
        )
      } else if(params.typeInteraction === 'likes'){
        return (
          <ModalSearchUsers data={post[0].likes}/>
        )
      }
    }

  return (
    <>
    {
      isLoadingPost
      ? <Loader/>
      : <TransitionContainer>
          {
            statusPost !== 200
            ? <>{children}</>
            : <>
               <ModalAuthWindow/>
               <ModalAddTags/>
               { renderModalSearchUsers() }
               { renderPost() }
              </>
          }
        </TransitionContainer>
    }
    </>
  )
}

export default ViewPost