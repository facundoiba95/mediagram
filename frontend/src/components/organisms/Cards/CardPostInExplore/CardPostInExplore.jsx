<<<<<<< HEAD
import React, { useEffect } from 'react'
import { CardPostInExploreStyles } from '../../../molecules/PostInExploreSection/PostInExploreSectionStyles'
import { useNavigate, useParams } from 'react-router-dom';
import { FaEye, FaHeart } from 'react-icons/fa';
import IconVideo from '../../../atoms/IconVideo/IconVideo';
import { VIDEO } from '../../../../libs/mediaType';

const CardPostInExplore = ({
  heightCard,
  thumbnail,
  counterLikes,
  counterViews,
  posts,
  mediaType,
  _id
}) => {
  const navigator = useNavigate();
  const params = useParams();

  const goPost = (e) => {
    const idPost = e.currentTarget.dataset.id;
    params.idPost = idPost;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigator(`/getPostByID/${params.idPost}`)
  }

  return (
    <CardPostInExploreStyles heightCard={heightCard} posts={posts.length} data-id={_id} onClick={goPost}>
      {
        mediaType === VIDEO
          ? <IconVideo />
          : <></>
      }
      {
        !mediaType
          ? <span className='overlay' style={{ visibility: "visible", opacity: 1, border: "1px solid white" }}>
            <p style={{ textAlign: "center" }}>Publicacion sin media, solo texto.</p>
            <p style={{ textAlign: "center" }}>Como se manejaran estas publicaciones ?</p>
            <p style={{ textAlign: "center" }}>Hacer una plantilla general para todas las publicaciones, o separar en secciones </p>
            <p style={{ textAlign: "center" }}>Otra opcion es hacer un feed con el hashtag seleccionado. </p>
          </span>
          : <>
            <span className='overlay' >
              <span><FaHeart className='iconHeart' />{counterLikes}</span>
              <span><FaEye className='iconView' />{counterViews}</span>
            </span>
            <img src={thumbnail} alt="" />
          </>
      }
    </CardPostInExploreStyles>
  )
}

=======
import React, { useEffect } from 'react'
import { CardPostInExploreStyles } from '../../../molecules/PostInExploreSection/PostInExploreSectionStyles'
import { useNavigate, useParams } from 'react-router-dom';
import { FaEye, FaHeart } from 'react-icons/fa';
import IconVideo from '../../../atoms/IconVideo/IconVideo';
import { VIDEO } from '../../../../libs/mediaType';

const CardPostInExplore = ({
  heightCard,
  thumbnail,
  counterLikes,
  counterViews,
  posts,
  mediaType,
  textContent,
  _id
}) => {
  const navigator = useNavigate();
  const params = useParams();

  const goPost = (e) => {
    const idPost = e.currentTarget.dataset.id;
    params.idPost = idPost;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigator(`/getPostByID/${params.idPost}`)
  }

  return (
    <CardPostInExploreStyles heightCard={heightCard} posts={posts.length} data-id={_id} onClick={goPost}>
      {
        mediaType === VIDEO
          ? <IconVideo />
          : <></>
      }
      {
        textContent 
          ? <span className='overlay' style={{ visibility: "visible", opacity: 1, border: "1px solid white" }}>
            <p>{textContent}</p>
          </span>
          : <>
            <span className='overlay' >
              <span><FaHeart className='iconHeart' />{counterLikes}</span>
              <span><FaEye className='iconView' />{counterViews}</span>
            </span>
            <img src={thumbnail} alt="" />
          </>
      }
    </CardPostInExploreStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default CardPostInExplore