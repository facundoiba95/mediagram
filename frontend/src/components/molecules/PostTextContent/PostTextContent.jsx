import React from 'react';
import findHashtag from '../../../libs/findHashtag';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNameTag } from '../../../redux/slices/tagSlices/tagSlices';

const PostTextContent = ({ textContent }) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const goHashtag = (hashtag) => {
    const getWord = hashtag.slice(1);
    dispatch(setNameTag(getWord));
    navigator("/explore")
  };

  const renderHashtag = (hashtag) => (
    <b key={hashtag} onClick={() => goHashtag(hashtag)} style={{cursor: "pointer", backgroundColor: "purple", fontStyle:"italic"}}>
      {hashtag}
    </b>
  );

  if (textContent) {
    const hashtags = findHashtag(textContent);
    if (hashtags) {
      textContent = textContent.split(/(#[\w]+)/g).map((part, index) => (
        hashtags.includes(part) ? renderHashtag(part) : part
      ));

      return <pre>{textContent}</pre>;
    }
  }

  return (
    <>
      {textContent && textContent}
    </>
  );
};

export default PostTextContent;