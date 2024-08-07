import React from 'react'
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer'
import { ChangeImageUserContainerStyles } from '../ChangeImageUser/ChangeImageUserStyles'
import { useSelector } from 'react-redux'
import FormChangeLocation from '../../organisms/Forms/FormChangeLocation/FormChangeLocation'

const ChangeLocation = () => {
    const { user } = useSelector(state => state.authSlices);
    const location = user.location || null;

    return (
        <TransitionContainer>
            <ChangeImageUserContainerStyles>
                <h2>Cambiar localidad.</h2>
                <FormChangeLocation location={location} />
            </ChangeImageUserContainerStyles>
        </TransitionContainer>
    )
}

export default ChangeLocation