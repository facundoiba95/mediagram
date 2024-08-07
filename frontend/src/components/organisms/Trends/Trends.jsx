<<<<<<< HEAD
import React, { useContext } from 'react'
import { ContainerExploreChildrens } from '../../Containers/ContainerExploreSection/ContainerExploreSectionStyles'
import TrendTags from '../../molecules/TrendTags/TrendTags'
import TrendUsers from '../../molecules/TrendUsers/TrendUsers'
import TrendPosts from '../../molecules/TrendPosts/TrendPosts'
import { GlobalContext } from '../../../Context/GlobalContext'

const Trends = () => {
    const { isOpenTrendTags } = useContext(GlobalContext);

    return (
        <ContainerExploreChildrens isOpenTrendTags={isOpenTrendTags}>
            <h2 className='titleTrends'>Tendencias</h2>
            <TrendTags />
            <TrendUsers />
            <TrendPosts />
        </ContainerExploreChildrens>
    )
}

=======
import React, { useContext } from 'react'
import { ContainerExploreChildrens } from '../../Containers/ContainerExploreSection/ContainerExploreSectionStyles'
import TrendTags from '../../molecules/TrendTags/TrendTags'
import TrendUsers from '../../molecules/TrendUsers/TrendUsers'
import TrendPosts from '../../molecules/TrendPosts/TrendPosts'
import { GlobalContext } from '../../../Context/GlobalContext'

const Trends = () => {
    const { isOpenTrendTags } = useContext(GlobalContext);

    return (
        <ContainerExploreChildrens isOpenTrendTags={isOpenTrendTags}>
            <h2 className='titleTrends'>Tendencias</h2>
            <TrendTags />
            <TrendUsers />
            <TrendPosts />
        </ContainerExploreChildrens>
    )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default Trends