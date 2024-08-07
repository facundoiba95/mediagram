import React, { useContext, useEffect } from 'react'
import { ContainerBlurWrapperStyles } from '../../../Containers/ContainerBlur/ContainerBlurStyles'
import { ModalSearchUsersContainerStyles } from '../ModalSearchUsers/ModalSearchUsersStyles'
import SearchBarTags from '../../SearchBars/SearchBarTags/SearchBarTags'
import FoundedTagsList from '../../FoundedTagsList/FoundedTagsList'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalContext } from '../../../../Context/GlobalContext'
import TagsSelectedList from '../../TagsSelectedList/TagsSelectedList'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { resetTagState, setListTags } from '../../../../redux/slices/tagSlices/tagSlices'
import ButtonResponsive from '../../../atoms/ButtonResponsive/ButtonResponsive'
import { updateTagsInPost } from '../../../../redux/slices/postSlices/postSlices'
import { useParams } from 'react-router-dom'

const ModalAddTags = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { tags, nameTag, listTags } = useSelector(state => state.tagSlices);
    const {  isOpenAddTags, setIsOpenAddTags  } = useContext(GlobalContext);
    const { post } = useSelector(state => state.postSlices);
    const tagsInPost = post[0] ? post[0].tags : [];

    const handleCloseModal = () => {
        setIsOpenAddTags(!isOpenAddTags)
        dispatch(resetTagState())
    }

    const handleUpdateTags = () => {
        const tags = {
            tags: listTags,
            idPost: params.idPost
        }

        dispatch(updateTagsInPost(tags))
        setIsOpenAddTags(false);
    };

    const renderBtnUpdateTags = () => {
        if(JSON.stringify(tagsInPost) !== JSON.stringify(listTags)){
            return (<ButtonResponsive title={'Actualizar tags'} handleFunction={handleUpdateTags}/>)
        } else {
            return (<></>)
        }
    }

    useEffect(() => {
        if(isOpenAddTags){
            dispatch(setListTags(tagsInPost))
        }
    },[])

    return (
        <ContainerBlurWrapperStyles isOpen={isOpenAddTags}>
            <ModalSearchUsersContainerStyles isOpen={true}>
                <AiOutlineCloseCircle className='iconCloseSearchBar' onClick={handleCloseModal}/>
                {renderBtnUpdateTags()}
                <p>Agregá tags de temas relacionados a tu publicación, para que sea visible en la sección <i>Explorar</i>.</p>
                <SearchBarTags placeholder={'Busca temas relacionados a tu publicación'} />
                <FoundedTagsList tags={tags} nameTag={nameTag} />
                <b>Tags seleccionados: </b>
                <TagsSelectedList listTags={listTags}/>
            </ModalSearchUsersContainerStyles>
        </ContainerBlurWrapperStyles>
    )
}

export default ModalAddTags