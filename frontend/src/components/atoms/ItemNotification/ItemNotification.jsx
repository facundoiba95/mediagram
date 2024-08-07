<<<<<<< HEAD
import React, { useContext } from 'react'
import { ItemNotificationContainerStyle } from '../../molecules/ListNotifications/ListNotificationsStyles'
import { RiUserSmileFill } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalContext } from '../../../Context/GlobalContext'
import { getNotifications, setStatusNotification, viewNotifications } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices'
import dateTime from '../../../libs/dateTime'

const ItemNotification = ({
    type, content, createdBy, status, createdAt
}) => {
    const { setIsOpenMenu, isOpenMenu, isOpenNotifications, setIsOpenNotifications } = useContext(GlobalContext);
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
        const idPost = e.currentTarget.dataset.idpost;
        params.idPost = idPost;
        setIsOpenNotifications(!isOpenNotifications);
        await handleViewNotification()
        navigator(`/getPostByID/${params.idPost}`);
    };

    const goComment = async (e) => {
        const idPost = e.currentTarget.dataset.idpost;
        const idContent = e.currentTarget.dataset.idcontent;
        params.idPost = idPost;
        setIsOpenNotifications(!isOpenNotifications);
        await handleViewNotification()
        navigator(`/getPostByID/${params.idPost}/?idComment=${idContent}`);
    }

    const goProfile = async (e) => {
        const username = e.currentTarget.dataset.username;
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
                <span className='infoNotification'>
                    {
                        createdBy.thumbnail
                            ? <img src={createdBy.thumbnail} alt="img profile user" className='imgProfile' />
                            : <RiUserSmileFill className='imgProfile' />
                    }
                    <span>
                        <p>{content.message}</p>
                        <small>{dateTime(createdAt)}</small>
                    </span>
                </span>
                <img src={content.imgContent} alt="img content in notification" className='imgContent' />
            </ItemNotificationContainerStyle>
        )
    }

    const ItemNotification_follower = () => {
        return (
            <ItemNotificationContainerStyle onClick={(e) => openNotification(e)} status={status} data-username={createdBy.username}>
                <span className='infoNotification'>
                    {
                        createdBy.thumbnail
                            ? <img src={createdBy.thumbnail} alt="img profile user" className='imgProfile' />
                            : <RiUserSmileFill className='imgProfile' />
                    }
                    <span>
                        <p>{content.message}</p>
                        <small>{dateTime(createdAt)}</small>
                    </span>
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

=======
import React, { useContext } from 'react'
import { ItemNotificationContainerStyle } from '../../molecules/ListNotifications/ListNotificationsStyles'
import { RiUserSmileFill } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalContext } from '../../../Context/GlobalContext'
import { getNotifications, setStatusNotification, viewNotifications } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices'
import dateTime from '../../../libs/dateTime'

const ItemNotification = ({
    type, content, createdBy, status, createdAt
}) => {
    const { setIsOpenMenu, isOpenMenu, isOpenNotifications, setIsOpenNotifications } = useContext(GlobalContext);
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
        const idPost = e.currentTarget.dataset.idpost;
        params.idPost = idPost;
        setIsOpenNotifications(!isOpenNotifications);
        await handleViewNotification()
        navigator(`/getPostByID/${params.idPost}`);
    };

    const goComment = async (e) => {
        const idPost = e.currentTarget.dataset.idpost;
        const idContent = e.currentTarget.dataset.idcontent;
        params.idPost = idPost;
        setIsOpenNotifications(!isOpenNotifications);
        await handleViewNotification()
        navigator(`/getPostByID/${params.idPost}/?idComment=${idContent}`);
    }

    const goProfile = async (e) => {
        const username = e.currentTarget.dataset.username;
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
                <span className='infoNotification'>
                    {
                        createdBy.thumbnail
                            ? <img src={createdBy.thumbnail} alt="img profile user" className='imgProfile' />
                            : <RiUserSmileFill className='imgProfile' />
                    }
                    <span>
                        <p>{content.message}</p>
                        <small>{dateTime(createdAt)}</small>
                    </span>
                </span>
                <img src={content.imgContent} alt="img content in notification" className='imgContent' />
            </ItemNotificationContainerStyle>
        )
    }

    const ItemNotification_follower = () => {
        return (
            <ItemNotificationContainerStyle onClick={(e) => openNotification(e)} status={status} data-username={createdBy.username}>
                <span className='infoNotification'>
                    {
                        createdBy.thumbnail
                            ? <img src={createdBy.thumbnail} alt="img profile user" className='imgProfile' />
                            : <RiUserSmileFill className='imgProfile' />
                    }
                    <span>
                        <p>{content.message}</p>
                        <small>{dateTime(createdAt)}</small>
                    </span>
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

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ItemNotification