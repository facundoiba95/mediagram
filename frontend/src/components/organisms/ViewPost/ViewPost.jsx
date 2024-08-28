import React, { useContext, useEffect, useState } from "react";
import { ContainerQuitViewPostStyles, ViewPostBackgroundStyles, ViewPostWrapperStyles } from "./ViewPostStyles";
import { GlobalContext } from "../../../Context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import TransitionContainer from "../../Containers/TransitionContainer/TransitionContainer";
import { useDispatch, useSelector } from "react-redux";
import { getPostByID, restarStatusPost } from "../../../redux/slices/postSlices/postSlices";
import ModalAuthWindow from "../../molecules/Modals/ModalAuthWindows/ModalAuthWindow";
import ModalSearchUsers from "../../molecules/Modals/ModalSearchUsers/ModalSearchUsers";
import { IoMdArrowRoundBack } from "react-icons/io";
import ModalAddTags from "../../molecules/Modals/ModalAddTags/ModalAddTags";
import GlobalLoader from "../../molecules/Loaders/GlobalLoader/GlobalLoader";
import { resetState_likes } from "../../../redux/slices/likeSlices/likeSlices";
import { resetState_views } from "../../../redux/slices/viewSlices/viewSlices";
import ViewerPostText from "../ViewerPostText/ViewerPostText";
import ViewerPostMedia from "../ViewerPostMedia/ViewerPostMedia";

const ViewPost = ({ children }) => {
  const { isOpenViewPost, setIsOpenViewPost, setIsOpenAddTags, setOpenLoader, setIsOpen, setIsOpenMenu } = useContext(GlobalContext);
  const isLoadingPost = useSelector((state) => state.postSlices.isLoading);
  const [isReadyPost, setIsReadyPost] = useState(false);
  const post = useSelector((state) => state.postSlices.post);
  const { likes } = useSelector((state) => state.likeSlices);
  const { views } = useSelector((state) => state.viewSlices);
  const { isLogged } = useSelector(state => state.authSlices);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const goBack = () => {
    setIsOpenViewPost(false);
    dispatch(restarStatusPost());
    setIsOpenAddTags(false);
    navigator(-1);
  };

  const goToProfile = async (e) => {
    const valueUserSelected = e.currentTarget.dataset.username;
    params.username = valueUserSelected;
    setIsOpen(false);
    setIsOpenMenu(false);
    navigator(`/profile/${params.username}`);
  }

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
          handleFunction={goToProfile}
        />
      );
    } else if (params.typeInteraction === "likes") {
      return (
        <ModalSearchUsers
          data={likes.map((like) => like.idUser)}
          placeholderValue={"Buscar usuario"}
          title={"Likes"}
          resetData={resetState_likes}
          handleFunction={goToProfile}
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
          {!isLogged ? (
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

export default ViewPost
