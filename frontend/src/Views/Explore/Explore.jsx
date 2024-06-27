import React, { useContext, useEffect } from 'react'
import ContainerFlexColumn from '../../components/Containers/ContainerFlexColumn/ContainerFlexColumn'
import TitleBold from '../../components/atoms/TitleBold/TitleBold'
import SearchBarTags from '../../components/molecules/SearchBars/SearchBarTags/SearchBarTags'
import PostsInExplore from '../../components/organisms/PostsInExplore/PostsInExplore'
import { useDispatch, useSelector } from 'react-redux'
import { restartPostsList } from '../../redux/slices/postSlices/postSlices'
import ContainerExploreSection from '../../components/Containers/ContainerExploreSection/ContainerExploreSection'
import TrendTags from '../../components/molecules/TrendTags/TrendTags'
import TrendMessage from '../../components/atoms/TrendMessage/TrendMessage'
import { ExploreContainerStyles } from './ExploreStyles'
import { ContainerExploreChildrens } from '../../components/Containers/ContainerExploreSection/ContainerExploreSectionStyles'
import { FaHashtag } from 'react-icons/fa'
import { GlobalContext } from '../../Context/GlobalContext'

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
            <ContainerExploreChildrens>
                <TitleBold title={'Explorar'} />
                <SearchBarTags placeholder={'Busca temas de tu interés'} hidden={false} />
                <TrendMessage message={name} />
                <PostsInExplore />
            </ContainerExploreChildrens>
            <FaHashtag className='iconTag' onClick={() => setIsOpenTrendTags(!isOpenTrendTags)}/>
            <TrendTags />
        </ContainerExploreSection>
    )
}

export default Explore


// return (
//     <ContainerExploreSection>
//         <TitleBold title={'Explorar'} />
//         <span>
//             <SearchBarTags placeholder={'Busca temas de tu interés'} hidden={false} />
//             <TrendMessage message={trendTags[0].name} />
//             <PostsInExplore />
//         </span>
//         <TrendTags />
//     </ContainerExploreSection>
// )