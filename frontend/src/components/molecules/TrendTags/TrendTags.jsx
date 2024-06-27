import React, { useContext, useEffect } from 'react'
import { TrendTagsContainerStyles, TrendTagsListStyles } from './TrendTagsStyles'
import { FaHashtag } from "react-icons/fa";
import ItemTrendTag from '../../atoms/ItemTrendTag/ItemTrendTag';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendTags } from '../../../redux/slices/tagSlices/tagSlices';
import { GlobalContext } from '../../../Context/GlobalContext';

const TrendTags = () => {
  const { isOpenTrendTags } = useContext(GlobalContext);
  const dispatch = useDispatch();
  const { trendTags } = useSelector(state => state.tagSlices);

  useEffect(() => {
    dispatch(getTrendTags());
  }, [])

  const renderItems = () => {
    return trendTags.map((item) => (
      <ItemTrendTag
        name={item.name}
        count={item.count}
        _id={item._id}
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