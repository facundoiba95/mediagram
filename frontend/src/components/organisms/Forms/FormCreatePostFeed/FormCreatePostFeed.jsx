import React, { useContext, useRef, useState } from 'react'
import { ContainerFormCreatePostFeedStyles, TextBoxCreatePostFeedStyles } from './FormCreatePostFeedStyles'
import ButtonCreatePostFeed from '../../../atoms/ButtonCreatePostFeed/ButtonCreatePostFeed'
import { useDispatch, useSelector } from 'react-redux';
import { addTagToList, resetListTags, resetNameTag, resetTags, resetTagState, searchTags } from '../../../../redux/slices/tagSlices/tagSlices'
import ListHashtagsFound from '../../ListHashtagsFound/ListHashtagsFound';
import { ItemHashtagFoundStyles } from '../../ListHashtagsFound/ListHashtagsFoundStyles';
import ItemCreateTag from '../../../atoms/ItemCreateTag/ItemCreateTag';
import { createPost, getPostsOfFollowings } from '../../../../redux/slices/postSlices/postSlices';
import { POST } from '../../../../libs/typePost';
import { GlobalContext } from '../../../../Context/GlobalContext';

const FormCreatePostFeed = () => {
  const [text, setText] = useState('');
  const [hashtag, setHashtag] = useState("");
  const [showListHashtags, setShowListHashtags] = useState(false);
  const { switchChecked, listReferTo } = useContext(GlobalContext)
  const { tags, isLoading, listTags } = useSelector(state => state.tagSlices);
  const textareaRef = useRef(null);
  const userAuth = useSelector(state => state.authSlices.user);

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);

    if (!inputValue.length) dispatch(resetListTags());

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
    const thousandPost_twoDigits = `${counter.toString().slice(0, 2)}.${counter.toString().slice(2, 3)}k`;
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

  const handleCreatePost = async () => {
    const form = document.getElementById("formCreatePost");
    await dispatch(createPost(form));
    await dispatch(getPostsOfFollowings());
    setText("");
    dispatch(resetTagState());
  }

  return (
    <ContainerFormCreatePostFeedStyles onSubmit={(e) => e.preventDefault()} id='formCreatePost'>
      <b>Publicar estado</b>
      <TextBoxCreatePostFeedStyles
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
      {/* Inputs hidden para backend */}
      <input type="text" name='referTo' value={JSON.stringify(listReferTo.map(usr => usr._id))} hidden />
      {/* <input type="text" name='location' value={locationSelected} hidden /> */}
      <input type="text" name='shareInExplore' value={JSON.stringify(switchChecked)} hidden />
      <input type="text" name='typePost' value={POST} hidden />
      <input type="text" name='postBy' value={userAuth._id} hidden />
      <input type="text" name='tags' value={JSON.stringify(listTags.map(tag => tag._id))} hidden />
      <input type="text" name='textContent' value={text} hidden />
      <ButtonCreatePostFeed active={text.length} handleFunction={handleCreatePost} />
    </ContainerFormCreatePostFeedStyles>
  );
};

export default FormCreatePostFeed;