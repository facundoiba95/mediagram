<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 60d7322 (first commit in Ubuntu)
import React, { useContext, useEffect, useState } from 'react'
import { ContainerQuitViewPostStyles, ViewPostBackgroundStyles, ViewPostImageContainerStyles, ViewPostWrapperStyles } from './ViewPostStyles'
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
import GlobalLoader from '../../molecules/Loaders/GlobalLoader/GlobalLoader';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { resetState_likes } from '../../../redux/slices/likeSlices/likeSlices';
import { resetState_views } from '../../../redux/slices/viewSlices/viewSlices';

const ViewPost = ({ children }) => {
  const { isOpenViewPost, setIsOpenViewPost, isOpenAddTags, setIsOpenAddTags, openLoader, setOpenLoader } = useContext(GlobalContext);
  const isLoadingPost = useSelector(state => state.postSlices.isLoading);
  const [isReadyPost, setIsReadyPost] = useState(false);
  const post = useSelector(state => state.postSlices.post);
  const { likes } = useSelector(state => state.likeSlices);
  const { views } = useSelector(state => state.viewSlices);
  const statusPost = useSelector(state => state.postSlices.status);
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
    setOpenLoader(true)
    const handleViewPost = async () => {
      await dispatch(getPostByID(params.idPost));
      setIsOpenViewPost(true);
      setIsReadyPost(true)
      setOpenLoader(false);
    }


    handleViewPost();
  }, [dispatch, params.idPost])


  const renderPost = () => {

    if (isReadyPost) {
      return post.map(item => {
        const { media_url, description, counterLikes, counterViews, likes, anonymViews, referTo, location, mediaType, _id} = item;

        const { username, thumbnail } = item.postBy;

        return (
          <ViewPostBackgroundStyles isOpenViewPost={isOpenViewPost}>
            <ViewPostWrapperStyles>
              <ContainerQuitViewPostStyles>
                <IoMdArrowRoundBack className='iconQuitPost' onClick={() => goBack()} />
                <h3 onClick={() => goBack()}>Atrás</h3>
              </ContainerQuitViewPostStyles>
              <ViewPostImageContainerStyles>
                {
                  mediaType === "IMAGE"
                    ? <img src={media_url} alt="image post" loading='lazy' />
                    : <VideoPlayer media_url={media_url} />
                }
              </ViewPostImageContainerStyles>
              <CommentsInPost
                description={description}
                username={username}
                thumbnail={thumbnail}
                counterLikes={counterLikes}
                counterViews={counterViews}
                anonymViews={anonymViews}
                likes={likes.map(like => like.idUser)}
                referTo={referTo}
                location={location}
                idPost={_id}
              />
            </ViewPostWrapperStyles>
          </ViewPostBackgroundStyles>
        )

      })
    } else {
      return (
        <GlobalLoader />
      )
    }
  }

  resetState_likes
  const renderModalSearchUsers = () => {
    if (params.typeInteraction === 'views') {
      return (
        <ModalSearchUsers
          data={views}
          message={`"${post[0].anonymViews}" vistas de cuentas no registradas.`}
          title={"Vistas"}
          placeholderValue={"Buscar usuario"}
          resetData={resetState_views}
        />
      )
    } else if (params.typeInteraction === 'likes') {
      return (
        <ModalSearchUsers
          data={likes.map(like => like.idUser)}
          placeholderValue={"Buscar usuario"}
          title={"Likes"}
          resetData={resetState_likes}
        />
      )
    }
  }

  return (
    <>
      {
        isLoadingPost
          ? <GlobalLoader />
          : <TransitionContainer>
            {
              statusPost !== 200
                ? <>{children}</>
                : <>
                  <ModalAuthWindow />
                  <ModalAddTags />
                  {renderModalSearchUsers()}
                  {renderPost()}
                </>
            }
          </TransitionContainer>
      }
    </>
  )
}

<<<<<<< HEAD
=======
import React, { useContext, useEffect, useState } from 'react'
import { ContainerQuitViewPostStyles, ViewPostBackgroundStyles, ViewPostImageContainerStyles, ViewPostWrapperStyles } from './ViewPostStyles'
import { GlobalContext } from '../../../Context/GlobalContext'
import { useNavigate, useParams } from 'react-router-dom';
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer';
import CommentsInPost from '../../molecules/CommentsInPost/CommentsInPost';
import { useDispatch, useSelector } from 'react-redux';
import { getPostByID, restarStatusPost } from '../../../redux/slices/postSlices/postSlices';
import Loader from '../../molecules/Loaders/Loader/Loader';
import ModalAuthWindow from '../../molecules/Modals/ModalAuthWindows/ModalAuthWindow';
import ModalSearchUsers from '../../molecules/Modals/ModalSearchUsers/ModalSearchUsers';
=======
import React, { useContext, useEffect, useState } from "react";
import {ContainerQuitViewPostStyles,ViewPostBackgroundStyles,ViewPostWrapperStyles} from "./ViewPostStyles";
import { GlobalContext } from "../../../Context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import TransitionContainer from "../../Containers/TransitionContainer/TransitionContainer";
import { useDispatch, useSelector } from "react-redux";
import {getPostByID,restarStatusPost} from "../../../redux/slices/postSlices/postSlices";
import ModalAuthWindow from "../../molecules/Modals/ModalAuthWindows/ModalAuthWindow";
import ModalSearchUsers from "../../molecules/Modals/ModalSearchUsers/ModalSearchUsers";
>>>>>>> ce9b3c9f (viewerPostText)
import { IoMdArrowRoundBack } from "react-icons/io";
import ModalAddTags from "../../molecules/Modals/ModalAddTags/ModalAddTags";
import GlobalLoader from "../../molecules/Loaders/GlobalLoader/GlobalLoader";
import { resetState_likes } from "../../../redux/slices/likeSlices/likeSlices";
import { resetState_views } from "../../../redux/slices/viewSlices/viewSlices";
import ViewerPostText from "../ViewerPostText/ViewerPostText";
import ViewerPostMedia from "../ViewerPostMedia/ViewerPostMedia";

const ViewPost = ({ children }) => {
	const {isOpenViewPost,setIsOpenViewPost,setIsOpenAddTags,setOpenLoader} = useContext(GlobalContext);
	const isLoadingPost = useSelector((state) => state.postSlices.isLoading);
	const [isReadyPost, setIsReadyPost] = useState(false);
	const post = useSelector((state) => state.postSlices.post);
	const { likes } = useSelector((state) => state.likeSlices);
	const { views } = useSelector((state) => state.viewSlices);
	const statusPost = useSelector((state) => state.postSlices.status);
	const navigator = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();

	const goBack = () => {
		setIsOpenViewPost(false);
		dispatch(restarStatusPost());
		setIsOpenAddTags(false);
		navigator(-1);
	};

	useEffect(() => {
		setOpenLoader(true);
		const handleViewPost = async () => {
			await dispatch(getPostByID(params.idPost));
			setIsOpenViewPost(true);
			setIsReadyPost(true);
			setOpenLoader(false);
		};

		handleViewPost();
	}, [dispatch, params.idPost]);

	const renderPost = () => {
		if (isReadyPost) {
			return post.map((item) => {
				const {
					media_url,
					description,
					counterLikes,
					counterViews,
					counterComments,
					likes,
					anonymViews,
					referTo,
					location,
					mediaType,
					_id,
					textContent,
					postBy,
					comments,
					createdAt,
				} = item;

				const { username, thumbnail } = item.postBy;

				return (
					<ViewPostBackgroundStyles isOpenViewPost={isOpenViewPost}>
						<ViewPostWrapperStyles>
							<ContainerQuitViewPostStyles>
								<IoMdArrowRoundBack
									className="iconQuitPost"
									onClick={() => goBack()}
								/>
								<h3 onClick={() => goBack()}>Atrás</h3>
							</ContainerQuitViewPostStyles>
							{textContent ? (
								<ViewerPostText
									postBy={postBy}
									_id={_id}
									comments={comments}
									textContent={textContent}
									createdAt={createdAt}
									counterComments={counterComments}
									counterLikes={counterLikes}
									counterViews={counterViews}
									likes={likes}
								/>
							) : (
								<ViewerPostMedia
									username={username}
									thumbnail={thumbnail}
									mediaType={mediaType}
									media_url={media_url}
									_id={_id}
									description={description}
									location={location}
									counterLikes={counterLikes}
									counterViews={counterViews}
									likes={likes}
									referTo={referTo}
								/>
							)}
						</ViewPostWrapperStyles>
					</ViewPostBackgroundStyles>
				);
			});
		} else {
			return <GlobalLoader />;
		}
	};

	const renderModalSearchUsers = () => {
		if (params.typeInteraction === "views") {
			return (
				<ModalSearchUsers
					data={views}
					message={`"${post[0].anonymViews}" vistas de cuentas no registradas.`}
					title={"Vistas"}
					placeholderValue={"Buscar usuario"}
					resetData={resetState_views}
				/>
			);
		} else if (params.typeInteraction === "likes") {
			return (
				<ModalSearchUsers
					data={likes.map((like) => like.idUser)}
					placeholderValue={"Buscar usuario"}
					title={"Likes"}
					resetData={resetState_likes}
				/>
			);
		}
	};

	return (
		<>
			{isLoadingPost ? (
				<GlobalLoader />
			) : (
				<TransitionContainer>
					{statusPost !== 200 ? (
						<>{children}</>
					) : (
						<>
							<ModalAuthWindow />
							<ModalAddTags />
							{renderModalSearchUsers()}
							{renderPost()}
						</>
					)}
				</TransitionContainer>
			)}
		</>
	);
};

<<<<<<< HEAD
        return (
          <ViewPostBackgroundStyles isOpenViewPost={isOpenViewPost}>
            <ViewPostWrapperStyles>
              <ContainerQuitViewPostStyles>
                <IoMdArrowRoundBack className='iconQuitPost' onClick={() => goBack()} />
                <h3 onClick={() => goBack()}>Atrás</h3>
              </ContainerQuitViewPostStyles>
              <ViewPostImageContainerStyles>
                {
                  mediaType === "IMAGE"
                    ? <img src={media_url} alt="image post" loading='lazy' />
                    : <VideoPlayer media_url={media_url} />
                }
              </ViewPostImageContainerStyles>
              <CommentsInPost
                description={description}
                username={username}
                thumbnail={thumbnail}
                counterLikes={counterLikes}
                counterViews={counterViews}
                anonymViews={anonymViews}
                likes={likes.map(like => like.idUser)}
                referTo={referTo}
                location={location}
                idPost={_id}
              />
            </ViewPostWrapperStyles>
          </ViewPostBackgroundStyles>
        )

      })
    } else {
      return (
        <GlobalLoader />
      )
    }
  }

  resetState_likes
  const renderModalSearchUsers = () => {
    if (params.typeInteraction === 'views') {
      return (
        <ModalSearchUsers
          data={views}
          message={`"${post[0].anonymViews}" vistas de cuentas no registradas.`}
          title={"Vistas"}
          placeholderValue={"Buscar usuario"}
          resetData={resetState_views}
        />
      )
    } else if (params.typeInteraction === 'likes') {
      return (
        <ModalSearchUsers
          data={likes.map(like => like.idUser)}
          placeholderValue={"Buscar usuario"}
          title={"Likes"}
          resetData={resetState_likes}
        />
      )
    }
  }

  return (
    <>
      {
        isLoadingPost
          ? <GlobalLoader />
          : <TransitionContainer>
            {
              statusPost !== 200
                ? <>{children}</>
                : <>
                  <ModalAuthWindow />
                  <ModalAddTags />
                  {renderModalSearchUsers()}
                  {renderPost()}
                </>
            }
          </TransitionContainer>
      }
    </>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ViewPost
=======
export default ViewPost;
>>>>>>> ce9b3c9f (viewerPostText)
=======
export default ViewPost
>>>>>>> parent of 60d7322 (first commit in Ubuntu)
