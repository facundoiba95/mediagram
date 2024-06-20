import React, { useContext, useEffect, useState } from 'react'
import CubeSlider from '../../molecules/CubeSlider/CubeSlider'
import { ContainerBlurWrapperStyles } from '../../Containers/ContainerBlur/ContainerBlurStyles'
import { GlobalContext } from '../../../Context/GlobalContext'
import SwipeHistory from '../../molecules/SwipeHistory/SwipeHistory'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const ViewerHistory = () => {
    const { isOpenHistory, setIsOpenHistory } = useContext(GlobalContext);
    const [hiddenSwipe, setHiddenSwipe] = useState(false);
    const navigator = useNavigate();

    const handleCloseViewer = () => {
        setIsOpenHistory(false);
        navigator(-1);
    }

    useEffect(() => {
        if (isOpenHistory) {
            setTimeout(() => {
                setHiddenSwipe(true);
            }, 2000)
        }
    }, [isOpenHistory]);

    return (
        <ContainerBlurWrapperStyles isOpen={isOpenHistory}>
            <AiOutlineCloseCircle onClick={handleCloseViewer} className='iconClose' />
            <SwipeHistory isHidden={hiddenSwipe} />
            <CubeSlider />
        </ContainerBlurWrapperStyles>
    )
}

export default ViewerHistory