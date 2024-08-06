<<<<<<< HEAD
import React from 'react'
import { PostCommentsListStyles } from './PostCommentsStyles'
import ItemCommentPost from '../../molecules/ItemCommentPost/ItemCommentPost'

const PostComments = ({comments}) => {

  const startCommentsView = comments.length - 5;
  const endCommentsView = comments.length;

    const renderComments = () => {
        return comments.map((item,index) => {
            const { comment, commentBy, referenceId, likes, counterLikes, replies, createdAt, _id } = item;
            
            if(!_id) return;
           
            return (
                <ItemCommentPost
                  _id={_id}
                  _idPost={referenceId}
                  commentBy={commentBy}
                  comment={comment}
                  createdAt={createdAt}
                  likes={likes}
                  counterLikes={counterLikes}
                  replies={replies}
                  key={index}
                />
            )
        })
    }

  return (
    <PostCommentsListStyles>
        {renderComments().slice(startCommentsView, endCommentsView)}
        {comments.length > 5 && (<small>Ver todos los comentarios</small>)}
    </PostCommentsListStyles>
  )
}

=======
import React from 'react'
import { PostCommentsListStyles } from './PostCommentsStyles'
import ItemCommentPost from '../../molecules/ItemCommentPost/ItemCommentPost'

const PostComments = ({comments}) => {

  const startCommentsView = comments.length - 5;
  const endCommentsView = comments.length;

    const renderComments = () => {
        return comments.map((item,index) => {
            const { comment, commentBy, referenceId, likes, counterLikes, replies, createdAt, _id } = item;
            
            if(!_id) return;
           
            return (
                <ItemCommentPost
                  _id={_id}
                  _idPost={referenceId}
                  commentBy={commentBy}
                  comment={comment}
                  createdAt={createdAt}
                  likes={likes}
                  counterLikes={counterLikes}
                  replies={replies}
                  key={index}
                />
            )
        })
    }

  return (
    <PostCommentsListStyles>
        {renderComments().slice(startCommentsView, endCommentsView)}
        {comments.length > 5 && (<small>Ver todos los comentarios</small>)}
    </PostCommentsListStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default PostComments