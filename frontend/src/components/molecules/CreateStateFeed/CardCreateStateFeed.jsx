import React, { useRef, useState } from 'react'
import { ContainerCardCreateStateFeedStyles, TextBoxCreateStateFeedStyles } from './CardCreateStateFeedStyles'
import ButtonCreatePostFeed from '../../atoms/ButtonCreatePostFeed/ButtonCreatePostFeed'
import { useDispatch, useSelector } from 'react-redux';
import { addTagToList, resetNameTag, resetTags, searchTags } from '../../../redux/slices/tagSlices/tagSlices'
import ListHashtagsFound from '../../organisms/ListHashtagsFound/ListHashtagsFound';
import { ItemHashtagFoundStyles } from '../../organisms/ListHashtagsFound/ListHashtagsFoundStyles';
import ItemCreateTag from '../../atoms/ItemCreateTag/ItemCreateTag';

const CardCreateState = () => {
  const [text, setText] = useState('');
  const [hashtag, setHashtag] = useState("");
  const [showListHashtags, setShowListHashtags] = useState(false);
  const { tags, isLoading } = useSelector(state => state.tagSlices);
  const textareaRef = useRef(null);
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);

    const lastWord = inputValue.split(' ').pop();
    const hashtag_regex = /^#\w+/;

    if (hashtag_regex.test(lastWord)) {
      const query = lastWord.slice(1);
      dispatch(searchTags(query));
      setHashtag(query);
      setShowListHashtags(true);
    } else {
      setShowListHashtags(false);
    }
  };

  // tagSlices
  const handleSetListTag = (e) => {
    const name = e.currentTarget.dataset.nametag;
    const _id = e.currentTarget.dataset.idtag;
    dispatch(addTagToList({ name, _id }))
    dispatch(resetTags());
    dispatch(resetNameTag());
  }

  const handleSelectHashtag = (e) => {
    const valueTagSelected = e.currentTarget.dataset.nametag;
    const words = text.split(' ');
    words.pop();
    const newText = `${words.join(' ')} #${valueTagSelected} `;
    setText(newText);
    setShowListHashtags(false);
    handleSetListTag(e);
    textareaRef.current.focus();
  };

  const setQuantity = (counter) => {
    const thousandPosts = `${counter.toString().slice(0, 1)}.${counter.toString().slice(1, 2)}k`;
    const thousandPost_twoDigits = `${counter.toString().slice(0, 2)}.${counter.toString().slice(2, 3)}k`
    const thousandPost_threeDigits = `${counter.toString().slice(0, 3)}k`

    if (counter > 0 && counter < 999) {
      return counter;
    } else if (counter > 999 && counter < 9999) {
      return thousandPosts;
    } else if (counter > 9999 && counter < 99999) {
      return thousandPost_twoDigits
    } else if (counter > 99999 && counter < 999999) {
      return thousandPost_threeDigits
    }
  }

  const renderHashtags = () => {
    if (!tags.length) {
      return (
        <ItemCreateTag tag={hashtag} />
      )
    }

    return tags.map(tags => {
      const { countPosts } = tags;

      return (
        <ItemHashtagFoundStyles data-nametag={tags.name} data-idtag={tags._id} onClick={(e) => handleSelectHashtag(e)}>
          <b>#{tags.name}</b>
          {
            countPosts 
            ? <small>{setQuantity(countPosts)} publicaciones</small>
            : <small>Sin publicaciones</small>
          }
        </ItemHashtagFoundStyles>
      )
    })
  }

  return (
    <ContainerCardCreateStateFeedStyles>
      <b>Publicar estado</b>
      <TextBoxCreateStateFeedStyles
        ref={textareaRef}
        value={text}
        onChange={handleInputChange}
        rows="4"
        placeholder='Que estás pensando ?'
      />
      {showListHashtags && (
        <ListHashtagsFound isLoading={isLoading}>
          {renderHashtags()}
        </ListHashtagsFound>
      )}
      <ButtonCreatePostFeed active={text.length} handleFunction={() => alert(text)} />
    </ContainerCardCreateStateFeedStyles>
  );
};

export default CardCreateState;

