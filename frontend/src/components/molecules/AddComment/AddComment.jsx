import React, { useContext, useState } from 'react'
import { AddCommentContainerStyles, FormCommentContainerStyle } from './AddCommentStyles'
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../redux/slices/postSlices/postSlices';
import { validateSession } from '../../../redux/slices/authSlices/authSlices';
import { GlobalContext } from '../../../Context/GlobalContext';


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
 

















// import React, { useContext, useEffect, useState } from 'react'
// import { AddCommentContainerStyles, FormCommentContainerStyle } from './AddCommentStyles'
// import { useDispatch, useSelector } from 'react-redux';
// import { addComment } from '../../../redux/slices/postSlices/postSlices';
// import { GlobalContext } from '../../../Context/GlobalContext';
// import { validateSession } from '../../../redux/slices/authSlices/authSlices';

// const AddComment = () => {
//   const [ inputComment, setInputComment ] = useState('');
//   const dispatch = useDispatch();
//   const post = useSelector(state => state.postSlices.post);
//   const isLogged = useSelector(state => state.authSlices.isLogged);
//   const statusAuth = useSelector(state => state.authSlices.status);
//   const { setIsOpenModalWindowAuth } = useContext(GlobalContext);

// const handleAddComment = async () => {
//   const comment = {
//       content: inputComment,
//       _idPost: post[0]._id,
//       postedBy: post[0].postedBy
//   }

//   // accedo de esta manera al status de auth, para que lo tome inmediatamente
//   // si accedo desde el useSelector, el status esta desactualizado y provoca un error.
//   // en el useEffect esta actualizado pero acá no .
//   const resultValidation = await dispatch(validateSession())

//   if(await resultValidation.payload.status === 200){
//     await dispatch(addComment(comment))
//   } else {
//     setIsOpenModalWindowAuth(true)
//     return;
//   }
// }

//   useEffect(() => {
//     if(statusAuth !== 200 && !isLogged){
//       setIsOpenModalWindowAuth(true);
//     } else {     
//       setIsOpenModalWindowAuth(false);
//     }
//   }, [ statusAuth ]);


//   return (
//       <AddCommentContainerStyles>
//           <FormCommentContainerStyle onSubmit={(e) => e.preventDefault()}>
//               <textarea type="text" placeholder='Escribe un comentario ...' value={inputComment} onChange={(e) => setInputComment(e.target.value)}/>
//               <button className='btnAddComment' onClick={() => handleAddComment()}>Publicar</button>
//           </FormCommentContainerStyle>
//       </AddCommentContainerStyles>
//   )
// }

// export default AddComment;
 