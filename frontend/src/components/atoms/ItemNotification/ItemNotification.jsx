import React, { useContext } from 'react'
import { ItemNotificationContainerStyle } from '../../molecules/ListNotifications/ListNotificationsStyles'
import { RiUserSmileFill } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalContext } from '../../../Context/GlobalContext'
import { getNotifications, setStatusNotification, viewNotifications } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices'

const ItemNotification = ({
    type, content, createdBy, status, createdAt
}) => {
    const { setIsOpenMenu,isOpenMenu,isOpenNotifications, setIsOpenNotifications } = useContext(GlobalContext);
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const userAuth = useSelector(state => state.authSlices.user);

    const handleViewNotification = async () => {
        await dispatch(viewNotifications(userAuth._id));
        await dispatch(getNotifications(userAuth._id))
        dispatch(setStatusNotification())
    }

    const goPost = async (e) => {
        const idPost = e.target.dataset.idpost;
        params.idPost = idPost;
        setIsOpenNotifications(!isOpenNotifications);
        await handleViewNotification()
        navigator(`/getPostByID/${params.idPost}`);
    };

    const goComment = async (e) => {
        const idPost = e.target.dataset.idpost;
        const idContent = e.target.dataset.idcontent;
        params.idPost = idPost;
        setIsOpenNotifications(!isOpenNotifications);
        await handleViewNotification()
        navigator(`/getPostByID/${params.idPost}/?idComment=${idContent}`);
    }

    const goProfile = async (e) => {
        const username = e.target.dataset.username;
        params.username = username;
        await handleViewNotification();
        setIsOpenNotifications(!isOpenNotifications);
        navigator(`/profile/${params.username}`);
    }

    const openNotification = (e) => {
        setIsOpenMenu(false)
        switch (type) {
            case "comment":
                goComment(e)
                break;
            case "like":
                goPost(e)
                break;
            case "referTo":
                goPost(e)
                break;
            case "follower":
                goProfile(e);
                break;
            default:
                break;
        }
    }

    const ItemNotification_post = () => {
        return (
            <ItemNotificationContainerStyle data-idcontent={content.idContent} data-idpost={content.idPost} onClick={(e) => openNotification(e)} status={status}>
                <span data-idpost={content.idPost} data-idcontent={content.idContent}>
                    {
                        createdBy.thumbnail
                            ? <img src={createdBy.thumbnail} alt="img profile user" className='imgProfile' data-idpost={content.idPost} data-idcontent={content.idContent} />
                            : <RiUserSmileFill className='imgProfile' data-idpost={content.idPost} data-idcontent={content.idContent} />
                    }
                    <p data-idpost={content.idPost} data-idcontent={content.idContent}>{content.message}</p>
                </span>
                <img src={content.imgContent} alt="img content in notification" className='imgContent' data-idpost={content.idPost} data-idcontent={content.idContent} />
            </ItemNotificationContainerStyle>
        )
    }

    const ItemNotification_follower = () => {
        return (
            <ItemNotificationContainerStyle onClick={(e) => openNotification(e)} status={status} data-username={createdBy.username}>
                <span data-username={createdBy.username}>
                    {
                        createdBy.thumbnail
                            ? <img src={createdBy.thumbnail} alt="img profile user" className='imgProfile' data-username={createdBy.username} />
                            : <RiUserSmileFill className='imgProfile' data-username={createdBy.username} />
                    }
                    <p data-username={createdBy.username}>{content.message}</p>
                </span>
            </ItemNotificationContainerStyle>
        )
    }

    switch (type) {
        case "comment":
            return ItemNotification_post();
        case "like":
            return ItemNotification_post();
        case "referTo":
            return ItemNotification_post()
        case "follower":
            if (content.status === "PENDING") return <></>
            return ItemNotification_follower();
        default:
            break;
    }
}

export default ItemNotification