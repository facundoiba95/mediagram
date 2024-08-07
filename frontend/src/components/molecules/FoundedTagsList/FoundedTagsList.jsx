<<<<<<< HEAD
import React, { useContext } from 'react'
import { ContainerFoundedTagsListStyles } from './FoundedTagsListStyles'
import ItemTagsFounded from '../../atoms/ItemTagsFounded/ItemTagsFounded'
import ItemCreateTag from '../../atoms/ItemCreateTag/ItemCreateTag'
import { GlobalContext } from '../../../Context/GlobalContext'
import { useDispatch, useSelector } from 'react-redux'
import { addTagToList } from '../../../redux/slices/tagSlices/tagSlices'

const FoundedTagsList = ({ tags, nameTag }) => {
  const { switchChecked } = useContext(GlobalContext);
  const { listTags } = useSelector(state => state.tagSlices);
  const dispatch = useDispatch();

  const addTag = (e) => {
    const _id = e.currentTarget.dataset.id;
    const name = e.currentTarget.dataset.name;
    if(!_id || !name) return alert('Faltan valores de tags.')
    const newTag = {_id, name};
    dispatch(addTagToList(newTag))
  }

  const renderTags = () => {    
      if (!tags.length && nameTag.length >= 3) {
      return (<ItemCreateTag tag={nameTag} />)
    }

    return tags.map(tag => {
      const { _id, name } = tag;
      const isSelected = listTags.some(tag => tag._id === _id)
      return (
        <ItemTagsFounded name={name} _id={_id} addTag={addTag} isSelected={isSelected}/>
      )
    })
  }

  return (
    <ContainerFoundedTagsListStyles isHidden={nameTag.length >= 3}>
      {renderTags()}
    </ContainerFoundedTagsListStyles>
  )
}

=======
import React, { useContext } from 'react'
import { ContainerFoundedTagsListStyles } from './FoundedTagsListStyles'
import ItemTagsFounded from '../../atoms/ItemTagsFounded/ItemTagsFounded'
import ItemCreateTag from '../../atoms/ItemCreateTag/ItemCreateTag'
import { GlobalContext } from '../../../Context/GlobalContext'
import { useDispatch, useSelector } from 'react-redux'
import { addTagToList } from '../../../redux/slices/tagSlices/tagSlices'

const FoundedTagsList = ({ tags, nameTag }) => {
  const { switchChecked } = useContext(GlobalContext);
  const { listTags } = useSelector(state => state.tagSlices);
  const dispatch = useDispatch();

  const addTag = (e) => {
    const _id = e.currentTarget.dataset.id;
    const name = e.currentTarget.dataset.name;
    if(!_id || !name) return alert('Faltan valores de tags.')
    const newTag = {_id, name};
    dispatch(addTagToList(newTag))
  }

  const renderTags = () => {    
      if (!tags.length && nameTag.length >= 3) {
      return (<ItemCreateTag tag={nameTag} />)
    }

    return tags.map(tag => {
      const { _id, name } = tag;
      const isSelected = listTags.some(tag => tag._id === _id)
      return (
        <ItemTagsFounded name={name} _id={_id} addTag={addTag} isSelected={isSelected}/>
      )
    })
  }

  return (
    <ContainerFoundedTagsListStyles isHidden={nameTag.length >= 3}>
      {renderTags()}
    </ContainerFoundedTagsListStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default FoundedTagsList