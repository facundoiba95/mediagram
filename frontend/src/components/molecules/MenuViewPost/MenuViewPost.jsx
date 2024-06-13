import React, { useContext, useState } from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { ItemInteractionStyles, SharePostContainerStyles } from '../PostInteraction/PostInteractionStyles';
import { BsShareFill } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../../redux/slices/postSlices/postSlices';
import { MenuViewPostContainerStyles, MenuViewPostListStyles } from './MenuViewPostStyles';
import { FaTags } from "react-icons/fa6";
import { GlobalContext } from '../../../Context/GlobalContext';

const MenuViewPost = ({ post, userAuth, isAdmin, isPrivate }) => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const [ hiddenMenu, setHiddenMenu ] = useState(true);
    const [openMessage, setOpenMessage] = useState(false);
    const [openShareURL, setOpenShareURL] = useState(false);
    const {  isOpenAddTags, setIsOpenAddTags  } = useContext(GlobalContext);

    const handleDeletePost = () => {
        if (window.confirm('Desea eliminar este post?')) {
            params.username = userAuth.username;
            (async () => {
                await dispatch(deletePost(post[0]._id));
                setHiddenMenu(true);
                navigator(`/profile/${params.username}`);
            })()
        } else {
            return;
        }
    }

    const sharePostURL = () => {
        const URLPost = document.getElementById('URLPost');
        URLPost.select();
        document.execCommand('copy');
        setOpenMessage(true);

        setTimeout(() => {
            setOpenMessage(false);
            setOpenShareURL(false);
            setHiddenMenu(true);
        }, 3000);
    }


    const renderBoxShareURLPost = () => {
        return (
            <SharePostContainerStyles openMessage={openMessage}>
                <p>Copia este enlace para compartir:</p>
                <span>
                    <input type='text' value={window.location.href} id='URLPost' />
                    <button className='btnCopyURL' onClick={sharePostURL}>Copiar</button>
                </span>
                {
                    openMessage
                        ? <small className='messageShareURLPost'>Se copió la URL del post!</small>
                        : <></>
                }
            </SharePostContainerStyles>
        )
    }

    return (
        <MenuViewPostContainerStyles>
            <CiMenuKebab className='iconMenuViewPost' onClick={() => setHiddenMenu(!hiddenMenu)}/>
            <MenuViewPostListStyles hiddenMenu={hiddenMenu}>
                <ItemInteractionStyles openShareURL={openShareURL}>
                    <BsShareFill className='iconComment' onClick={() => setOpenShareURL(!openShareURL)} />
                    {
                        openShareURL
                            ? renderBoxShareURLPost()
                            : <></>
                    }
                </ItemInteractionStyles>
                {
                    isAdmin
                        ? <ItemInteractionStyles>
                            <MdDeleteForever onClick={handleDeletePost} className='iconDeletePost' />
                        </ItemInteractionStyles>
                        : <></>
                }
                {
                    isAdmin && !isPrivate
                    ? <FaTags className='iconTags' onClick={() => setIsOpenAddTags(!isOpenAddTags)}/>
                    : <></>
                }
            </MenuViewPostListStyles>
        </MenuViewPostContainerStyles>
    )
}

export default MenuViewPost