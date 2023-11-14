import React, { useContext, useState } from 'react'
import { AddCommentContainerStyles, FormCommentContainerStyle } from './AddCommentStyles'
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../redux/slices/postSlices/postSlices';
import { validateSession } from '../../../redux/slices/authSlices/authSlices';
import { GlobalContext } from '../../../Context/GlobalContext';
import { setStatusNotification } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices';


const AddComment = () => {
  const [ inputComment, setInputComment ] = useState('');
  const dispatch = useDispatch();
  const post = useSelector(state => state.postSlices.post);
  const { setIsOpenModalWindowAuth } = useContext(GlobalContext);

const handleAddComment = async () => {
  const comment = {
      content: inputComment,
      _idPost: post[0]._id,
      postedBy: post[0].postedBy
  }

  const result = await dispatch(validateSession());

  if(await result.payload.status === 200){
    await dispatch(addComment(comment))
    dispatch(setStatusNotification());
  } else {
    setIsOpenModalWindowAuth(true)
    return;
  }
}

  return (
      <AddCommentContainerStyles>
          <FormCommentContainerStyle onSubmit={(e) => e.preventDefault()}>
              <textarea type="text" placeholder='Escribe un comentario ...' value={inputComment} onChange={(e) => setInputComment(e.target.value)}/>
              <button className='btnAddComment' onClick={() => handleAddComment()}>Publicar</button>
          </FormCommentContainerStyle>
      </AddCommentContainerStyles>
  )
}

export default AddComment;