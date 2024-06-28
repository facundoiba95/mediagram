import React, { useEffect, useState } from 'react';
import { MessageNotFoundTagsByPostStyles, WrapperPostsInExploreStyles } from './PostsInExploreStyles';
import PostInExploreSection from '../../molecules/PostInExploreSection/PostInExploreSection';
import { useDispatch, useSelector } from 'react-redux';
import { getVisiblePosts } from '../../../redux/slices/postSlices/postSlices';
import SkeletonExplorePostSection from '../../molecules/Loaders/SkeletonExplorePostSection/SkeletonExplorePostSection';

const PostsInExplore = () => {
  const dispatch = useDispatch();
  const { post, isLoading } = useSelector(state => state.postSlices);
  const { nameTag, trendTags } = useSelector(state => state.tagSlices);
  const [sectionCard, setSectionCard] = useState([]);
  const defaultNameTag = trendTags.length ? trendTags[0].name : "";

  // minimo de letras para realizar la busqueda
  useEffect(() => {
    if (nameTag.length >= 3) {
      dispatch(getVisiblePosts(nameTag));
    } else if (defaultNameTag.length) {
      dispatch(getVisiblePosts(defaultNameTag)); // 
    }
  }, [nameTag, defaultNameTag, dispatch]);

  // separacion de los posts
  useEffect(() => {
    if (post.length > 0) {
      const relatedPosts = post[0].relatedPosts;
      splitPost(relatedPosts, 5);
    } else {
      setSectionCard([]);
    }
  }, [post]);

  const splitPost = (relatedPosts, separator) => {
    let arr = [];
    for (let i = 0; i < relatedPosts.length; i += separator) {
      arr.push(relatedPosts.slice(i, i + separator));
    }
    setSectionCard(arr);
  };

  const renderSectionPost = () => {
    if (!post.length && nameTag.length >= 3) {
      return (
        <MessageNotFoundTagsByPostStyles>
          <p>No se encontraron publicaciones relacionadas a "<b>{nameTag}</b>"</p>
        </MessageNotFoundTagsByPostStyles>
      )
    } else {
      return sectionCard.map((section, index) => (
        <PostInExploreSection key={index} posts={section} index={index} />
      ));
    }
  };

  return (
    <WrapperPostsInExploreStyles>
      {
        isLoading
          ? <SkeletonExplorePostSection />
          : renderSectionPost()
      }
    </WrapperPostsInExploreStyles>
  );
}

export default PostsInExplore;