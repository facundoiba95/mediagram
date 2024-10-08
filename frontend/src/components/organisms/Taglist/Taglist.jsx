import React, { useContext, useEffect } from 'react'
import ListHashtagsFound from '../ListHashtagsFound/ListHashtagsFound'
import ItemCreateTag from '../../atoms/ItemCreateTag/ItemCreateTag';
import { ItemHashtagFoundStyles } from '../ListHashtagsFound/ListHashtagsFoundStyles';
import setQuantity from '../../../libs/setQuantity';
import { useDispatch, useSelector } from 'react-redux';
import { getVisiblePosts } from '../../../redux/slices/postSlices/postSlices';
import { GlobalContext } from '../../../Context/GlobalContext';

const Taglist = () => {
    const { nameTag, tags, isLoading, trendTags, status} = useSelector(state => state.tagSlices);
    const { showList, setShowList } = useContext(GlobalContext);
    const dispatch = useDispatch();

    const handleSelectHashtag = (e) => {
        const hashtag = e.currentTarget.dataset.nametag;
        dispatch(getVisiblePosts(hashtag))
        setShowList(false);
    }

    useEffect(() => {
        if (nameTag.length) {
            setShowList(true)
        } else {
            setShowList(false);
        }
    }, [nameTag, trendTags]);
    
    const renderHashtags = () => {
        if (status === 404) {
            return (
                <ItemCreateTag tag={nameTag} />
            )
        }

        return tags.map(tags => {
            const { countPosts } = tags;

            return (
                <ItemHashtagFoundStyles
                    data-nametag={tags.name}
                    data-idtag={tags._id}
                    onClick={(e) => handleSelectHashtag(e)}
                >
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
        <>
            {
                showList && (<ListHashtagsFound isLoading={isLoading} maxWidth={"500px"}>
                    {renderHashtags()}
                </ListHashtagsFound>)
            }
        </>
    )
}

export default Taglist