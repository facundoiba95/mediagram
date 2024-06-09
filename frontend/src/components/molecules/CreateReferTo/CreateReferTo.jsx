import React, { useContext, useState } from 'react'
import { ListRefersToStyles, ListUserSearchedStyles, ReferToContainerStyles } from '../Forms/FormCreateContent/FormCreateContentStyles'
import { restartUserFound, searchUser } from '../../../redux/slices/userSlices/userSlices';
import { GlobalContext } from '../../../Context/GlobalContext';
import ItemReferToSelected from '../../atoms/ItemReferToSelected/ItemReferToSelected';
import ItemReferToFounded from '../../atoms/ItemReferToFounded/ItemReferToFounded';
import { useDispatch } from 'react-redux';

const CreateReferTo = ({ user }) => {
    const [inputReferTo, setInputReferTo] = useState('');
    const { listReferTo, setListReferTo } = useContext(GlobalContext);
    const dispatch = useDispatch();

    const renderListUserSearched = () => {
        return user.map(item => {
            const { username, _id, thumbnail, imgProfile } = item;

            return (
                <ItemReferToFounded
                    username={username}
                    _id={_id}
                    thumbnail={thumbnail}
                    imgProfile={imgProfile}
                    handleSelectReferTo={handleSelectReferTo}
                />
            )
        })
    }

    const handleSelectReferTo = (e) => {
        const usernameSelected = e.currentTarget.dataset.username;
        const idUserSelected = e.currentTarget.dataset.id;
        const thumbnailUserSelected = e.currentTarget.dataset.thumbnail;

        const newReferTo = {
            username: usernameSelected,
            thumbnail: thumbnailUserSelected,
            _id: idUserSelected
        }

        setListReferTo([...listReferTo, newReferTo]);
        dispatch(restartUserFound())
        setInputReferTo('');
    }

    const handleDeleteReferTo = (e) => {
        const usernameSelected = e.currentTarget.dataset.username;
        setListReferTo(listReferTo.filter(item => item.username !== usernameSelected))
    }

    const handleSearchUser = (e) => {
        e.preventDefault();
        const valueInputUser = e.currentTarget.value;
        setInputReferTo(valueInputUser);
    
        if (valueInputUser.length > 3) {
          dispatch(searchUser(valueInputUser));
          // setListUsers(dataTestUsers.filter(item => item.username.includes(valueInputUser)))
        } else {
          dispatch(restartUserFound());
          return;
        }
      }

    const renderReferTo = () => {
        return listReferTo.map(item => {
            const { username, _id, thumbnail } = item;
            return (
                <ItemReferToSelected
                    username={username}
                    _id={_id}
                    thumbnail={thumbnail}
                    handleDeleteReferTo={handleDeleteReferTo}
                />
            )
        })
    }

    return (
        <ReferToContainerStyles>
            <input
                type="text"
                value={inputReferTo}
                onChange={(e) => handleSearchUser(e)}
                placeholder='Mencionar'
            />
            <ListUserSearchedStyles isExistUserSearched={user.length}>
                {renderListUserSearched()}
            </ListUserSearchedStyles>
            <ListRefersToStyles>
                {renderReferTo()}
            </ListRefersToStyles>
        </ReferToContainerStyles>
    )
}

export default CreateReferTo