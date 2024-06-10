import React from 'react'
import ContainerFlexColumn from '../../components/Containers/ContainerFlexColumn/ContainerFlexColumn'
import TitleBold from '../../components/atoms/TitleBold/TitleBold'
import SearchBarTags from '../../components/molecules/SearchBars/SearchBarTags/SearchBarTags'
import PostsInExplore from '../../components/organisms/PostsInExplore/PostsInExplore'

const Explore = () => {
    return (
        <ContainerFlexColumn>
            <TitleBold title={'Explorar'}/>
            <SearchBarTags placeholder={'Busca temas de tu interés'} hidden={false}/>
            <PostsInExplore/>
        </ContainerFlexColumn>
    )
}

export default Explore