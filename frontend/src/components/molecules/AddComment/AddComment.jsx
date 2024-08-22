import React, { useContext, useState } from 'react'
import { AddCommentContainerStyles, FormCommentContainerStyle } from './AddCommentStyles'
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getPostByID } from '../../../redux/slices/postSlices/postSlices';
import { validateSession } from '../../../redux/slices/authSlices/authSlices';
import { GlobalContext } from '../../../Context/GlobalContext';
import { setStatusNotification, setUserReceptor } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices';

const AddComment = ({ hiddenComments, idPost, postBy }) => {
  const [inputComment, setInputComment] = useState('');
  const dispatch = useDispatch();
  const { setIsOpenModalWindowAuth } = useContext(GlobalContext);

  const handleAddComment = async (e) => {
    e.preventDefault();

    if(!inputComment.length) return;

    const comment = {
      content: inputComment,
      idPost,
      postBy
    }

    const result = await dispatch(validateSession());

    if (await result.payload.status === 200) {
      await dispatch(addComment(comment))
      await dispatch(getPostByID(idPost));
      dispatch(setStatusNotification());
      dispatch(setUserReceptor(postBy.username));
      setInputComment("");
      
    } else {
      setIsOpenModalWindowAuth(true)
      return;
    }
  }

  return (
    <AddCommentContainerStyles hiddenComments={hiddenComments}>
      <FormCommentContainerStyle onSubmit={(e) => handleAddComment(e)}>
        <textarea type="text" placeholder='Escribe un comentario ...' value={inputComment} onChange={(e) => setInputComment(e.target.value)} />
        <button className='btnAddComment' onClick={(e) => handleAddComment(e)}>Comentar</button>
      </FormCommentContainerStyle>
    </AddCommentContainerStyles>
  )
}

export default AddComment;