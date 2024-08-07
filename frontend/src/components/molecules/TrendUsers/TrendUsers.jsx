<<<<<<< HEAD
import React, { useEffect } from 'react'
import { TrendUsersContainerStyles } from './TrendUsersStyles'
import { TrendTagsListStyles } from '../TrendTags/TrendTagsStyles'
import ItemTrendUser from '../../atoms/ItemTrendUser/ItemTrendUser'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendUsers } from '../../../redux/slices/userSlices/userSlices'

const TrendUsers = () => {
    const dispatch = useDispatch();
    const { trendUsers } = useSelector(state => state.userSlices);

    useEffect(() => {
        dispatch(getTrendUsers());
    }, [])

    const renderItems = () => {
        return trendUsers.map((item, index) => (
            <ItemTrendUser
                username={item.username}
                _id={item._id}
                thumbnail={item.thumbnail}
                counterViews={item.counterViews}
                key={index}
            />
        ))
    }
    
    return (
        <TrendUsersContainerStyles>
            <h3>Cuentas más visitadas</h3>
            <TrendTagsListStyles isTrendUsers={true}>
                {renderItems()}
            </TrendTagsListStyles>
        </TrendUsersContainerStyles>
    )
}

=======
import React, { useEffect } from 'react'
import { TrendUsersContainerStyles } from './TrendUsersStyles'
import { TrendTagsListStyles } from '../TrendTags/TrendTagsStyles'
import ItemTrendUser from '../../atoms/ItemTrendUser/ItemTrendUser'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendUsers } from '../../../redux/slices/userSlices/userSlices'

const TrendUsers = () => {
    const dispatch = useDispatch();
    const { trendUsers } = useSelector(state => state.userSlices);

    useEffect(() => {
        dispatch(getTrendUsers());
    }, [])

    const renderItems = () => {
        return trendUsers.map((item, index) => (
            <ItemTrendUser
                username={item.username}
                _id={item._id}
                thumbnail={item.thumbnail}
                counterViews={item.counterViews}
                key={index}
            />
        ))
    }
    
    return (
        <TrendUsersContainerStyles>
            <h3>Cuentas más visitadas</h3>
            <TrendTagsListStyles isTrendUsers={true}>
                {renderItems()}
            </TrendTagsListStyles>
        </TrendUsersContainerStyles>
    )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default TrendUsers