<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 60d7322 (first commit in Ubuntu)
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

<<<<<<< HEAD
=======
import React from 'react'
import { PostCommentsListStyles } from './PostCommentsStyles'
import ItemCommentPost from '../../molecules/ItemCommentPost/ItemCommentPost'
=======
import React from "react";
import { PostCommentsListStyles } from "./PostCommentsStyles";
import ItemCommentPost from "../../molecules/ItemCommentPost/ItemCommentPost";
import { useNavigate, useParams } from "react-router-dom";
>>>>>>> ce9b3c9f (viewerPostText)

const PostComments = ({ comments, limit ,_id}) => {
	const startCommentsView = comments.length - 5;
	const endCommentsView = comments.length;
	const navigator = useNavigate();
	const params = useParams();

	const goPost = () => {
		params.idPost = _id;
		window.scroll({
			top: 0,
			behavior: "smooth"
		})
		navigator(`/getPostByID/${params.idPost}`);
	}

	const renderComments = () => {
		return comments.map((item, index) => {
			const {
				comment,
				commentBy,
				referenceId,
				likes,
				counterLikes,
				replies,
				createdAt,
				_id,
			} = item;

			if (!_id) return;

<<<<<<< HEAD
>>>>>>> b3173dc1 (first commit in Ubuntu)
export default PostComments
=======
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
			);
		});
	};

	const limitComments = () => {
		if (limit) {
			return (
				<>
					{renderComments().slice(startCommentsView, endCommentsView)}
					{comments.length > 5 && <small onClick={goPost}>Ver todos los comentarios</small>}
				</>
			);
		} else {
			return <>{renderComments()}</>;
		}
	};

	return <PostCommentsListStyles>{limitComments()}</PostCommentsListStyles>;
};

export default PostComments;
>>>>>>> ce9b3c9f (viewerPostText)
=======
export default PostComments
>>>>>>> parent of 60d7322 (first commit in Ubuntu)
