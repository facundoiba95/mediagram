import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { ViewPostCommentsSectionStyles, ViewPostHeadStyles, ViewPostUserInfoHeadStyles } from '../../organisms/ViewPost/ViewPostStyles';
import { DescriptionPostContainerStyles, ListCommentsStyles, LocationAndReferToDataContainerStyles, ViewPostDescriptionStyles, ViewPostHandleActiveDescriptionStyles, WrapperCommentContainerStyles } from './CommentsInPostStyles';
import PostInteraction from '../PostInteraction/PostInteraction';
import { useNavigate, useParams } from 'react-router-dom';
import AddComment from '../AddComment/AddComment';
import { useSelector } from 'react-redux';
import Comentary from '../../atoms/Comentary/Comentary';
import { RiUserSmileFill } from 'react-icons/ri';
import ValidateSession from '../../Containers/ValidateSession/ValidateSession';

const CommentsInPost = ({
  description,
  username,
  thumbnail,
  counterViews,
  counterLikes,
  anonymViews,
  likedPost,
  referTo,
  location
}) => {
    const [ hiddenDescription, setHiddenDescription ] = useState(false);
    const post = useSelector( state => state.postSlices.post );
    const navigator = useNavigate();
    const params = useParams();

    const goToProfile = (e) => {
      const valueUser = e.target.dataset.username;
      params.username = valueUser;
      navigator(`/profile/${params.username}`)
    };

    const isDescription = 'Con el Fútbol Club Barcelona, al que estuvo ligado más de veinte años, ganó 35 títulos, entre ellos, diez de La Liga, cuatro de la Liga de Campeones de la UEFA y siete de la Copa del Rey.'

    const renderComments = () => {
      return post[0].comments.map(item => {
        const { content, date } = item;

        const { thumbnail, username, _id } = item.sender;
        return (
          <Comentary 
          username={username}
          content={content}
          thumbnail={thumbnail}
          createdAt={date}
          />
        )
      })
    }

    const renderReferTo = () => {
      return referTo.map(item => {
        return (
          <small data-username={item} onClick={(e) => goToProfile(e)}>{`@${item}`}</small>
        )
      })
    }

  return (
    <ViewPostCommentsSectionStyles>
      <ViewPostHeadStyles>
        <ViewPostUserInfoHeadStyles>
          {
            thumbnail 
            ? <img src={thumbnail} alt="" data-username={username} onClick={(e) => goToProfile(e)}/>
            : <RiUserSmileFill className='imgProfile' data-username={username}/>
          }
          <h3 data-username={username} onClick={(e) => goToProfile(e)}>{username}</h3>
        </ViewPostUserInfoHeadStyles>
        <ValidateSession>
          <PostInteraction 
            counterLikes={counterLikes} 
            counterViews={counterViews + anonymViews}
            post={post}
            likedPost={likedPost}
          />
        </ValidateSession>
      </ViewPostHeadStyles>
    <ViewPostDescriptionStyles>
      <LocationAndReferToDataContainerStyles>
        <span><MdLocationOn className='iconLocation'/><h5>{location}</h5></span>
        <span><small>Menciones: </small> { renderReferTo() }</span>
      </LocationAndReferToDataContainerStyles>
      <ViewPostHandleActiveDescriptionStyles isDescription={isDescription} hiddenDescription={hiddenDescription} onClick={() => setHiddenDescription(!hiddenDescription)}>
        <span>
          <AiOutlineRight className='openDescription'/>
          <AiOutlineDown className='hiddenDescription'/>
          <small>Descripción</small>
        </span>
        <DescriptionPostContainerStyles hiddenDescription={hiddenDescription}>
            <p>{description}</p>
        </DescriptionPostContainerStyles>
      </ViewPostHandleActiveDescriptionStyles>
      <WrapperCommentContainerStyles>
        <ListCommentsStyles comments={post[0].comments}>
          { renderComments() }
        </ListCommentsStyles>
      </WrapperCommentContainerStyles>
      <ValidateSession>
        <AddComment/>
      </ValidateSession>
    </ViewPostDescriptionStyles>
  </ViewPostCommentsSectionStyles>
  )
}

export default CommentsInPost