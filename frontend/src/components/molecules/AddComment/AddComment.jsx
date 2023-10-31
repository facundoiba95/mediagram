import React, { useState } from 'react'
import { AddCommentContainerStyles, FormCommentContainerStyle } from './AddCommentStyles'
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../redux/slices/postSlices/postSlices';

const AddComment = () => {
    const [ inputComment, setInputComment ] = useState('');
    const dispatch = useDispatch();
    const post = useSelector( state => state.postSlices.post );

    const handleAddComment = async () => {
        const comment = {
            content: inputComment,
            _idPost: post[0]._id,
            postedBy: post[0].postedBy
        }

        dispatch(addComment(comment))
    }

  return (
    <AddCommentContainerStyles>
        <FormCommentContainerStyle onSubmit={(e) => e.preventDefault()}>
          <textarea type="text" placeholder='Escribe un comentario ...' value={inputComment} onChange={(e) => setInputComment(e.target.value)}/>
          <button className='btnAddComment' onClick={handleAddComment}>Publicar</button>
        </FormCommentContainerStyle>
    </AddCommentContainerStyles>
    )
}

export default AddComment