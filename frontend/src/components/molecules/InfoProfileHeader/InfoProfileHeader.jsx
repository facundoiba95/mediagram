import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../Context/GlobalContext';
import { useSelector } from 'react-redux';








    /*

                            FUNCIONA, PERO ESTA MUY DESORDENADO E ILEGIBLE
    
                                 HAY QUE REPLANTEAR ESTE COMPONENTE
    
    


    */












const InfoProfileHeader = ({     
     isPrivate,
     isUserAuth, 
     posts, 
     followers, 
     followings 
}) => {
    const navigator = useNavigate();
    const params = useParams();
    const { isOpen, setIsOpen } = useContext( GlobalContext );
    const isFollowing = useSelector( state => state.userSlices.isFollowing );


    
const handleOpenFollowContent = (e) => {
    const typeFollow = e.target.dataset.typefollow;
    setIsOpen(!isOpen);
    params.typeFollow = typeFollow;
    navigator(`/profile/${params.username}/${params.typeFollow}`);
  }


    const renderInfo = () => {
      if( isPrivate ){
        if( isFollowing || !isFollowing && isUserAuth ){
          return (
            <>
              <th>Publicaciónes</th>
              <th data-typefollow='followers' onClick={(e) => handleOpenFollowContent(e)}><p data-typefollow='followers'>Seguidores</p></th>
              <th data-typefollow='followings' onClick={(e) => handleOpenFollowContent(e)}><p data-typefollow='followings'>Siguiendo</p></th> 
            </>
          )
        } else {
             return (
              <>
                <th><p>Publicaciónes</p></th>
                <th><p>Seguidores</p></th>
                <th><p>Siguiendo</p></th> 
              </>
             )
        }
    } else if( isPrivate && isUserAuth ) {
      return (
        <>
          <th>Publicaciónes</th>
          <th data-typefollow='followers' onClick={(e) => handleOpenFollowContent(e)}><p data-typefollow='followers'>Seguidores</p></th>
          <th data-typefollow='followings' onClick={(e) => handleOpenFollowContent(e)}><p data-typefollow='followings'>Siguiendo</p></th> 
        </>
      )
    } else if(isUserAuth){
      return (
        <>
          <th>Publicaciónes</th>
          <th data-typefollow='followers' onClick={(e) => handleOpenFollowContent(e)}><p data-typefollow='followers'>Seguidores</p></th>
          <th data-typefollow='followings' onClick={(e) => handleOpenFollowContent(e)}><p data-typefollow='followings'>Siguiendo</p></th> 
        </>
      )
    } else {
      return (
        <>
          <th>Publicaciónes</th>
          <th data-typefollow='followers' onClick={(e) => handleOpenFollowContent(e)}><p data-typefollow='followers'>Seguidores</p></th>
          <th data-typefollow='followings' onClick={(e) => handleOpenFollowContent(e)}><p data-typefollow='followings'>Siguiendo</p></th> 
        </>
      )
    }
  }

    const renderDataFollowers = () => {
      if( isPrivate ){
        if(isFollowing) {
          return (
            <>
              <td>{ posts.length }</td>
              <td>{ followers.length }</td>
              <td>{ followings.length }</td>
            </>
          )
        } else if(!isFollowing && isUserAuth){
          return (
            <>
              <td>{posts.length}</td>
              <td>{followers.length}</td>
              <td>{followings.length}</td>
            </>
          )
        } else {
          return (
            <>
              <td>{posts}</td>
              <td>{followers}</td>
              <td>{followings}</td>
            </>
          )
        }
      } else {
        return (
          <>
            <td>{ posts.length }</td>
            <td>{ followers.length }</td>
            <td>{ followings.length }</td>
          </>
        )
      }
    }

  return (
    <table>
    <tr>
      { renderInfo() }
    </tr>
    <tr>
      { renderDataFollowers() }
    </tr>
    </table>
  )
}

export default InfoProfileHeader;