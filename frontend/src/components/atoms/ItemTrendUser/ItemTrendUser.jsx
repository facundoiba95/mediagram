<<<<<<< HEAD
import React from 'react'
import { TrendUsersItemStyles } from '../../molecules/TrendUsers/TrendUsersStyles'
import { FaEye } from "react-icons/fa";
import { RiUserSmileFill } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom';

const ItemTrendUser = ({ _id, username, thumbnail, counterViews }) => {
    const navigator = useNavigate();
    const params = useParams();

    const goProfile = (e) => {
        const username = e.currentTarget.dataset.username;
        params.username = username;
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
        navigator(`/profile/${params.username}`);
    }

    return (
        <TrendUsersItemStyles data-username={username} onClick={(e) => goProfile(e)}>
            {
                thumbnail ?
                <img src={thumbnail} alt='img profile'/>
                : <RiUserSmileFill className='iconUserDefault'/>
            }
            <span>
                <b>{username}</b>
                <p><FaEye className='iconView'/>{counterViews}</p>
            </span>
        </TrendUsersItemStyles>
    )
}

=======
import React from 'react'
import { TrendUsersItemStyles } from '../../molecules/TrendUsers/TrendUsersStyles'
import { FaEye } from "react-icons/fa";
import { RiUserSmileFill } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom';

const ItemTrendUser = ({ _id, username, thumbnail, counterViews }) => {
    const navigator = useNavigate();
    const params = useParams();

    const goProfile = (e) => {
        const username = e.currentTarget.dataset.username;
        params.username = username;
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
        navigator(`/profile/${params.username}`);
    }

    return (
        <TrendUsersItemStyles data-username={username} onClick={(e) => goProfile(e)}>
            {
                thumbnail ?
                <img src={thumbnail} alt='img profile'/>
                : <RiUserSmileFill className='iconUserDefault'/>
            }
            <span>
                <b>{username}</b>
                <p><FaEye className='iconView'/>{counterViews}</p>
            </span>
        </TrendUsersItemStyles>
    )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ItemTrendUser