import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const useTitleDocument = () => {
    const { notifications } = useSelector(state => state.notificationSlices);

    const tabNotification = () => {
        notifications.filter(item => item.status === 'PENDING').length >= 1
            ? document.title = `Mediagram (${notifications.filter(item => item.status === 'PENDING').length})`
            : document.title = `Mediagram`
    }

    
    useEffect(() => {
        tabNotification();
    }, [notifications])

    return (
        <p>Set title notification</p>
    )
}

export default useTitleDocument