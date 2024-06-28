import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { ViewPostCommentsSectionStyles, ViewPostHeadStyles, ViewPostUserInfoHeadStyles } from '../../organisms/ViewPost/ViewPostStyles';
import { DescriptionPostContainerStyles, ListCommentsStyles, LocationAndReferToDataContainerStyles, ViewPostDescriptionStyles, ViewPostHandleActiveDescriptionStyles, WrapperCommentContainerStyles } from './CommentsInPostStyles';
import PostInteraction from '../PostInteraction/PostInteraction';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import AddComment from '../AddComment/AddComment';
import { useSelector } from 'react-redux';
import Comentary from '../../atoms/Comentary/Comentary';
import { RiUserSmileFill } from 'react-icons/ri';
import ValidateSession from '../../Containers/ValidateSession/ValidateSession';
import { MessageNotFollowUpRequestStyles } from '../FollowUpRequest/FollowUpRequestStyles';

const CommentsInPost = ({
  description,
  username,
  thumbnail,
  counterViews,
  counterLikes,
  anonymViews,
  likes,
  referTo,
  location
}) => {
  const [hiddenDescription, setHiddenDescription] = useState(false);
  const [hiddenComments, setHiddenComments] = useState(false);
  const post = useSelector(state => state.postSlices.post);
  const navigator = useNavigate();
  const params = useParams();
  const locationURL = useLocation();
  const searchParams = new URLSearchParams(locationURL.search);
  const idComment = searchParams.get('idComment');
  const valueScrollComment = useRef(0);

  const goToProfile = (e) => {
    const valueUser = e.currentTarget.dataset.username;
    params.username = valueUser;
    navigator(`/profile/${params.username}`)
  };


  useEffect(() => {
    post[0].comments.map(item => {
      const { _id } = item;
      if (idComment === _id) {
        for (const key in valueScrollComment.current.children) {
          if (Object.hasOwnProperty.call(valueScrollComment.current.children, key)) {
            const element = valueScrollComment.current.children[key];

            if (element.dataset.idcomment === _id) {
              element.id = 'commentSelected';
              const commentSelected = document.querySelector('#commentSelected');
              commentSelected.scrollIntoView({
                behavior: 'smooth',
                block: 'end'
              })
            }
          }
        }
      }
    })
  }, [valueScrollComment]);


  const renderComments = () => {
    if (!post[0].comments.length) {
      return (
        <MessageNotFollowUpRequestStyles>
          <p>Aún no hay comentarios en esta publicación.</p>
        </MessageNotFollowUpRequestStyles>
      )
    }

    return post[0].comments.map(item => {
      const { content, date, _id } = item;
      const { thumbnail, username } = item.sender;
      return (
        <Comentary
          username={username}
          content={content}
          thumbnail={thumbnail}
          createdAt={date}
          _id={_id}
        />
      )
    }).reverse();
  }

  const renderReferTo = () => {
    return referTo.map(item => {
      const { username, _id } = item;
      return (
        <small data-username={username} onClick={(e) => goToProfile(e)}>{`@${username}`}</small>
      )
    })
  }

  return (
    <ViewPostCommentsSectionStyles>
      <ViewPostHeadStyles hiddenComments={hiddenComments}>
        <ViewPostUserInfoHeadStyles>
          {
            thumbnail
              ? <img src={thumbnail} alt="" data-username={username} onClick={(e) => goToProfile(e)} />
              : <RiUserSmileFill className='imgProfile' data-username={username} />
          }
          <h3 data-username={username} onClick={(e) => goToProfile(e)}>{username}</h3>
        </ViewPostUserInfoHeadStyles>
        <ValidateSession>
          <PostInteraction
            counterLikes={counterLikes}
            counterViews={counterViews}
            post={post}
            likes={likes}
          />
        </ValidateSession>
      </ViewPostHeadStyles>
      <ViewPostDescriptionStyles>
        <LocationAndReferToDataContainerStyles referTo={referTo.length}>
          {
            location
              ? <div className='containerLocation'><MdLocationOn className='iconLocation' /><h5>{location}</h5></div>
              : <></>
          }
          <span className='containerReferTo'>
            <small>Menciones: </small>
            {renderReferTo()}
          </span>
        </LocationAndReferToDataContainerStyles>
        <ViewPostHandleActiveDescriptionStyles isDescription={description} hiddenDescription={hiddenDescription} >
          <span onClick={() => setHiddenDescription(!hiddenDescription)}>
            <AiOutlineRight className='openDescription' />
            <AiOutlineDown className='hiddenDescription' />
            <small>Descripción</small>
          </span>
          <DescriptionPostContainerStyles hiddenDescription={hiddenDescription}>
            <p>{description}</p>
          </DescriptionPostContainerStyles>
        </ViewPostHandleActiveDescriptionStyles>
        <WrapperCommentContainerStyles>
          <ListCommentsStyles comments={post[0].comments.length} ref={valueScrollComment} id='listComments' hiddenComments={hiddenComments}>
            {renderComments()}
          </ListCommentsStyles>
        </WrapperCommentContainerStyles>
        <ValidateSession>
          <AddComment hiddenComments={hiddenComments} />
        </ValidateSession>
      </ViewPostDescriptionStyles>
    </ViewPostCommentsSectionStyles>
  )
}

export default CommentsInPost