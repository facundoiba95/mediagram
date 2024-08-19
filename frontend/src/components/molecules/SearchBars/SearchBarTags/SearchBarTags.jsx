import React, { useContext, useEffect } from 'react'
import { ContainerSearchBarStyles, InputSearchBarStyles } from '../SearchBarFollowers/SearchBarFollowerStyles'
import { BiSearch } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { resetTagState, searchTags, setNameTag } from '../../../../redux/slices/tagSlices/tagSlices';
import { GlobalContext } from '../../../../Context/GlobalContext';

const SearchBarTags = ({ placeholder, hidden}) => {
    const dispatch = useDispatch();
    const { nameTag } = useSelector(state => state.tagSlices);
    const { switchChecked, setShowList} = useContext(GlobalContext);
    
    useEffect(() => {
        if(nameTag !== ""){
            setShowList(true)
            dispatch(searchTags(nameTag));
        }
    }, [nameTag, switchChecked])

    return (
        <ContainerSearchBarStyles hidden={hidden}>
            <InputSearchBarStyles
                value={nameTag}
                placeholder={placeholder}
                onChange={(e) => dispatch(setNameTag(e.target.value))}
            />
            <BiSearch className='iconSearch' />
        </ContainerSearchBarStyles>
    )
}

export default SearchBarTags