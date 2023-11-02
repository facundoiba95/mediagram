import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../../Context/GlobalContext'
import { ContainerBlurWrapperStyles } from '../../../Containers/ContainerBlur/ContainerBlurStyles';
import { FollowContentContainerStyles } from '../../../organisms/FollowContent/FollowContentStyles';
import { ItemFollowContentStyles, ListFollowContentContainerStyles } from '../../ResultFollowContent/ResultFollowContentStyles';
import SearchBarInteractionsInfo from '../../SearchBars/SearchBarInteractionsInfo/SearchBarInteractionsInfo';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RiUserSmileFill } from 'react-icons/ri';
import { FaEye } from 'react-icons/fa';
import { MoonLoader } from 'react-spinners';

const ModalInteractionsInfo = () => {
    const { isOpen, setIsOpen, isLoadingSearch, setIsLoadingSearch } = useContext(GlobalContext);
    const usersFounded = useSelector( state => state.userSlices.userFound );
    const post = useSelector( state => state.postSlices.post );
    const params = useParams();
    const navigator = useNavigate();

    const renderUserFounded = () => {
      return usersFounded.map(item => {
        const { username, imgProfile, _id } = item;
        return (
            <ItemFollowContentStyles data-username={username} onClick={(e) => goToProfile(e)} key={_id}>
            {
                imgProfile
                ? <img src={imgProfile} alt="imgProfile" data-username={username}/>
                : <RiUserSmileFill className='imgProfile' data-username={username}/>
            }
            <h2 data-username={username}>{ username }</h2>
            </ItemFollowContentStyles>
        )
   })
  }

  useEffect(() => {
  },[ params.typeInteraction ])
  
  const goToProfile = async (e) => {
    const valueUserSelected = e.target.dataset.username;
    params.username = valueUserSelected;
    setIsOpen(!isOpen);
    navigator(`/profile/${params.username}`);
}

const renderSearchBar = () => {
  if(params.typeInteraction === 'views'){
    return (
      <SearchBarInteractionsInfo isOpen={isOpen} data={post[0].views}/>
    )
  } else if(params.typeInteraction === 'likes'){
    return (
      <SearchBarInteractionsInfo isOpen={isOpen} data={post[0].likes}/>
    )
  }
}

  return (
    <ContainerBlurWrapperStyles isOpen={isOpen}>
      <FollowContentContainerStyles>
        { renderSearchBar() }
        <ListFollowContentContainerStyles>
          {
            params.typeInteraction === 'views' && post[0].anonymViews
            ? <small><FaEye className='iconView'/>Lo vieron {post[0].anonymViews} cuentas sin registrarse!</small>
            : <></>
          }
          {
             isLoadingSearch 
             ? <MoonLoader size={30} className='loader' color='white'/>
             : renderUserFounded() 
          }
        </ListFollowContentContainerStyles>
      </FollowContentContainerStyles>
    </ContainerBlurWrapperStyles>
    )
}

export default ModalInteractionsInfo