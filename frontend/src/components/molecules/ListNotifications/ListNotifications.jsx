import React, { useContext } from 'react'
import { ItemNotificationContainerStyle, ListNotificationsContainerStyles, TitleNotificationsStyles } from './ListNotificationsStyles'
import FollowUpRequest from '../FollowUpRequest/FollowUpRequest'
import { AiFillLeftCircle } from 'react-icons/ai';
import { GlobalContext } from '../../../Context/GlobalContext';
import { useDispatch, useSelector } from 'react-redux';
import { RiUserSmileFill } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostByID } from '../../../redux/slices/postSlices/postSlices';


const ListNotifications = () => {
    const { isOpenNotifications, setIsOpenNotifications } = useContext( GlobalContext );
    const notifications = useSelector( state => state.notificationSlices.notifications );
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();


    const openPostNotification = (e) => {
        const valueNotification = e.target.dataset.idpost;
        params.idPost = valueNotification;
        dispatch(getPostByID(valueNotification));
        setIsOpenNotifications(!isOpenNotifications);
        navigator(`/getPostByID/${params.idPost}`)
    };

    const renderNotifications = () => {
        if (!notifications) return;

        return notifications.map(item => {
            const { type, content, createdBy, status, createdAt } = item;
            return (
                <ItemNotificationContainerStyle data-idpost={content.idPost} onClick={(e) => openPostNotification(e)} status={status}>
                    <span data-idpost={content.idPost}>
                      {
                        createdBy.thumbnail 
                        ? <img src={ createdBy.thumbnail} alt="img profile user" className='imgProfile' data-idpost={content.idPost}/>
                        : <RiUserSmileFill className='imgProfile' data-idpost={content.idPost}/> 
                      }
                      <p data-idpost={content.idPost}>{ content.message }</p>
                    </span>
                    <img src={content.imgContent} alt="img content in notification" className='imgContent' data-idpost={content.idPost}/>
                </ItemNotificationContainerStyle>
            )
        })
    }
  return (
    <ListNotificationsContainerStyles isOpenNotifications={isOpenNotifications}>
        <AiFillLeftCircle className='iconCloseNotifications' onClick={() => setIsOpenNotifications(!isOpenNotifications)}/>
        <TitleNotificationsStyles>
            Notificaciónes
        </TitleNotificationsStyles>
        <FollowUpRequest/>
        { renderNotifications() }
    </ListNotificationsContainerStyles>
    )
}

export default ListNotifications