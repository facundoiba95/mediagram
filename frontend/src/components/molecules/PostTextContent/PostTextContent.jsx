<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 60d7322 (first commit in Ubuntu)
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

<<<<<<< HEAD
=======
import React from 'react';
import findHashtag from '../../../libs/findHashtag';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNameTag } from '../../../redux/slices/tagSlices/tagSlices';
=======
import React from "react";
import findHashtag from "../../../libs/findHashtag";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNameTag } from "../../../redux/slices/tagSlices/tagSlices";
>>>>>>> ce9b3c9f (viewerPostText)

const PostTextContent = ({ textContent }) => {
	const navigator = useNavigate();
	const dispatch = useDispatch();

	const goHashtag = (hashtag) => {
		const getWord = hashtag.slice(1);
		dispatch(setNameTag(getWord));
		navigator("/explore");
	};

	const renderHashtag = (hashtag) => (
		<b
			key={hashtag}
			onClick={() => goHashtag(hashtag)}
			style={{
				cursor: "pointer",
				backgroundColor: "purple",
				fontStyle: "italic",
			}}
		>
			{hashtag}
		</b>
	);

	if (textContent) {
		const hashtags = findHashtag(textContent);
		if (hashtags) {
			textContent = textContent
				.split(/(#[\w]+)/g)
				.map((part, index) =>
					hashtags.includes(part) ? renderHashtag(part) : part
				);

			return (
				<pre
					style={{
						whiteSpace: "pre-wrap",
						fontFamily: "Red Hat Display",
						width: "100%",
						lineHeight: "22px",
						color: "white",
						backgroundColor: "transparent"
					}}
				>
					{textContent}
				</pre>
			);
		}
	}

	return <>{textContent && textContent}</>;
};

<<<<<<< HEAD
>>>>>>> b3173dc1 (first commit in Ubuntu)
export default PostTextContent;
=======
export default PostTextContent;
>>>>>>> ce9b3c9f (viewerPostText)
=======
export default PostTextContent;
>>>>>>> parent of 60d7322 (first commit in Ubuntu)
