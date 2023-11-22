import React, { useContext } from 'react'
import { ItemNotificationContainerStyle, ListNotificationStyles, ListNotificationsContainerStyles, TitleNotificationsStyles } from './ListNotificationsStyles'
import FollowUpRequest from '../FollowUpRequest/FollowUpRequest'
import { AiFillLeftCircle } from 'react-icons/ai';
import { GlobalContext } from '../../../Context/GlobalContext';
import { useDispatch, useSelector } from 'react-redux';
import { RiUserSmileFill } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router-dom';
import { getNotifications, setStatusNotification, viewNotifications } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices';


const ListNotifications = () => {
    const { isOpenNotifications, setIsOpenNotifications } = useContext( GlobalContext );
    const notifications = useSelector( state => state.notificationSlices.notifications );
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const userAuth = useSelector( state => state.authSlices.user );

    const openPostNotification = async (e) => {
        const idPost = e.target.dataset.idpost;
        const idContent = e.target.dataset.idcontent;
        params.idPost = idPost;
        setIsOpenNotifications(!isOpenNotifications);
        await dispatch(viewNotifications(userAuth._id));
        await dispatch(getNotifications(userAuth._id))
        dispatch(setStatusNotification())
        navigator(`/getPostByID/${params.idPost}/?idComment=${idContent}`);
    };

    const renderNotifications = () => {
        if (!notifications) return;

        return notifications.map(item => {
            const { type, content, createdBy, status, createdAt } = item;
           if(type !== 'follower' || content.status === 'ACCEPT' ){
            return (
              <ItemNotificationContainerStyle data-idcontent={content.idContent} data-idpost={content.idPost} onClick={(e) => openPostNotification(e)} status={status}>
                  <span data-idpost={content.idPost} data-idcontent={content.idContent}>
                    {
                      createdBy.thumbnail 
                      ? <img src={ createdBy.thumbnail} alt="img profile user" className='imgProfile' data-idpost={content.idPost} data-idcontent={content.idContent}/>
                      : <RiUserSmileFill className='imgProfile' data-idpost={content.idPost} data-idcontent={content.idContent}/> 
                    }
                    <p data-idpost={content.idPost} data-idcontent={content.idContent}>{ content.message }</p>
                  </span>
                  {
                    !content.imgContent
                    ? <></>
                    : <img src={content.imgContent} alt="img content in notification" className='imgContent' data-idpost={content.idPost} data-idcontent={content.idContent}/>
                  }
              </ItemNotificationContainerStyle>
          )
           }
        }).reverse();
    }

    const handleOpenNotifications = async () => {
      setIsOpenNotifications(!isOpenNotifications);
      await dispatch(viewNotifications(userAuth._id));
      await dispatch(getNotifications(userAuth._id))
    }

  return (
    <ListNotificationsContainerStyles isOpenNotifications={isOpenNotifications}>
        <AiFillLeftCircle className='iconCloseNotifications' onClick={handleOpenNotifications}/>
        <TitleNotificationsStyles>
            Notificaciónes
        </TitleNotificationsStyles>
        <FollowUpRequest/>
        <ListNotificationStyles>
          { renderNotifications() }
        </ListNotificationStyles>
    </ListNotificationsContainerStyles>
    )
}

export default ListNotifications