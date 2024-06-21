import React, { useContext } from 'react'
import { ContainerShareInExploreStyles } from './ShareInExploreStyles'
import Switch from '../Switch/Switch';
import { useSelector } from 'react-redux';
import SearchBarTags from '../SearchBars/SearchBarTags/SearchBarTags';
import FoundedTagsList from '../FoundedTagsList/FoundedTagsList';
import TagsSelectedList from '../TagsSelectedList/TagsSelectedList';
import { GlobalContext } from '../../../Context/GlobalContext';
import { useParams } from 'react-router-dom';
import { EXCLUSIVEPOST } from '../../../libs/typePost';

const ShareInExplore = () => {
  const { user } = useSelector(state => state.authSlices);
  const { tags, nameTag, listTags } = useSelector(state => state.tagSlices);
  const { switchChecked } = useContext(GlobalContext);
  const params = useParams();

  const include_typeContent = {
    POST: true
  }


  return (
    <ContainerShareInExploreStyles isPrivate={user.isPrivate} typeContent={include_typeContent[params.typeContent]}>
      <span className='containerHeadShareInExplore'>
        <h3>Compartir en Explorar.</h3>
        <Switch />
      </span>
      <p>Tu publicación se compartirá en la sección <i>Explorar</i>.</p>
      <p>Es una sección de publicaciónes que se relacionan segun los <b>tags</b> que el agregue el creador del post.</p>
      <SearchBarTags placeholder={'Ingresa temas relacionados a tu publicación.'} hidden={!switchChecked}/>
      <FoundedTagsList tags={tags || listTags} nameTag={nameTag} />
      <TagsSelectedList listTags={listTags}/>
    </ContainerShareInExploreStyles>
  )
}

export default ShareInExplore