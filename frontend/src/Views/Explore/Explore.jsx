import React, { useContext, useEffect } from 'react'
import TitleBold from '../../components/atoms/TitleBold/TitleBold'
import SearchBarTags from '../../components/molecules/SearchBars/SearchBarTags/SearchBarTags'
import PostsInExplore from '../../components/organisms/PostsInExplore/PostsInExplore'
import { useDispatch, useSelector } from 'react-redux'
import { restartPostsList } from '../../redux/slices/postSlices/postSlices'
import ContainerExploreSection from '../../components/Containers/ContainerExploreSection/ContainerExploreSection'
import TrendMessage from '../../components/atoms/TrendMessage/TrendMessage'
import { ContainerExploreChildrens } from '../../components/Containers/ContainerExploreSection/ContainerExploreSectionStyles'
import { FaHashtag } from 'react-icons/fa'
import { GlobalContext } from '../../Context/GlobalContext'
import Trends from '../../components/organisms/Trends/Trends'

const Explore = () => {
    const { trendTags } = useSelector(state => state.tagSlices);
    const { isOpenTrendTags, setIsOpenTrendTags } = useContext(GlobalContext);
    const name = trendTags[0] ? trendTags[0].name : '';

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(restartPostsList())
    }, [])

    return (
        <ContainerExploreSection>
            <ContainerExploreChildrens isOpenTrendTags={true}>
                <TitleBold title={'Explorar'} />
                <SearchBarTags placeholder={'Busca temas de tu interés'} hidden={false} />
                <TrendMessage message={name} />
                <PostsInExplore />
            </ContainerExploreChildrens>
            <FaHashtag className='iconTag' onClick={() => setIsOpenTrendTags(!isOpenTrendTags)} />
            <Trends />
        </ContainerExploreSection>
    )
}

export default Explore