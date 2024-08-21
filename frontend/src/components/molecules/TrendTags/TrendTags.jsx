import React, { useContext, useEffect } from 'react'
import { TrendTagsContainerStyles, TrendTagsListStyles } from './TrendTagsStyles'
import ItemTrendTag from '../../atoms/ItemTrendTag/ItemTrendTag';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendTags } from '../../../redux/slices/tagSlices/tagSlices';
import { GlobalContext } from '../../../Context/GlobalContext';
import { getVisiblePosts } from '../../../redux/slices/postSlices/postSlices';

const TrendTags = () => {
  const { isOpenTrendTags, setIsOpenTrendTags } = useContext(GlobalContext);
  const dispatch = useDispatch();
  const { trendTags } = useSelector(state => state.tagSlices);

  useEffect(() => {
      dispatch(getTrendTags());
  }, [])

  const renderItems = () => {
    return trendTags.map((item,index) => (
      <ItemTrendTag
        name={item.name}
        count={item.count}
        _id={item._id}
        key={index}
      />
    ))
  }


  return (
    <TrendTagsContainerStyles isOpenTrendTags={isOpenTrendTags}>
      <TrendTagsListStyles>
        {renderItems()}
      </TrendTagsListStyles>
    </TrendTagsContainerStyles>
  )
}

export default TrendTags