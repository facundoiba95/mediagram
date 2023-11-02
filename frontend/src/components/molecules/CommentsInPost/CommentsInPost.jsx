import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai'
import { ViewPostCommentsSectionStyles, ViewPostHeadStyles, ViewPostUserInfoHeadStyles } from '../../organisms/ViewPost/ViewPostStyles';
import { ListCommentsStyles, ViewPostDescriptionStyles, ViewPostHandleActiveDescriptionStyles, WrapperCommentContainerStyles } from './CommentsInPostStyles';
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
  likedPost
}) => {
    const [ hiddenDescription, setHiddenDescription ] = useState(false);
    const post = useSelector( state => state.postSlices.post );
    const navigator = useNavigate();
    const params = useParams();

    const goToProfile = () => {
      params.username = username;
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

  return (
    <ViewPostCommentsSectionStyles>
      <ViewPostHeadStyles>
        <ViewPostUserInfoHeadStyles onClick={goToProfile}>
          {
            thumbnail 
            ? <img src={thumbnail} alt=""/>
            : <RiUserSmileFill className='imgProfile'/>
          }
          <h3>{username}</h3>
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
      <ViewPostHandleActiveDescriptionStyles isDescription={isDescription} hiddenDescription={hiddenDescription} onClick={() => setHiddenDescription(!hiddenDescription)}>
        <AiOutlineRight className='openDescription'/>
        <AiOutlineDown className='hiddenDescription'/>
        <small>Descripción</small>
      </ViewPostHandleActiveDescriptionStyles>
      <WrapperCommentContainerStyles>
        <ListCommentsStyles>
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