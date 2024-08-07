<<<<<<< HEAD
import React, { useEffect } from 'react'
import { ContainerThumbnailUserStyles } from './ThumbnailUserStyles'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ThumbnailUser = ({userByPost}) => {
  const navigator = useNavigate();
  const params = useParams();

  const goProfile = () => {
    params.username = userByPost;
    navigator(`/profile/${params.username}`)
  }


  return (
    <ContainerThumbnailUserStyles onClick={goProfile}>
        <p>Ver perfil de <b>{userByPost}</b></p>
    </ContainerThumbnailUserStyles>
  )
}

=======
import React, { useEffect } from 'react'
import { ContainerThumbnailUserStyles } from './ThumbnailUserStyles'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ThumbnailUser = ({userByPost}) => {
  const navigator = useNavigate();
  const params = useParams();

  const goProfile = () => {
    params.username = userByPost;
    navigator(`/profile/${params.username}`)
  }


  return (
    <ContainerThumbnailUserStyles onClick={goProfile}>
        <p>Ver perfil de <b>{userByPost}</b></p>
    </ContainerThumbnailUserStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ThumbnailUser