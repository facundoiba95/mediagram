<<<<<<< HEAD
import React from 'react'
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer'
import { ChangeImageUserContainerStyles } from '../ChangeImageUser/ChangeImageUserStyles'
import FormChangeProfession from '../../organisms/Forms/FormChangeProfession/FormChangeProfession'
import { useSelector } from 'react-redux'

const ChangeProfession = () => {
    const { user } = useSelector(state => state.authSlices);
    const profession = user.profession || null;

    return (
        <TransitionContainer>
            <ChangeImageUserContainerStyles>
                <h2>Cambiar profesión y/o ocupación.</h2>
                <FormChangeProfession profession={profession} />
            </ChangeImageUserContainerStyles>
        </TransitionContainer>
    )
}

=======
import React from 'react'
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer'
import { ChangeImageUserContainerStyles } from '../ChangeImageUser/ChangeImageUserStyles'
import FormChangeProfession from '../../organisms/Forms/FormChangeProfession/FormChangeProfession'
import { useSelector } from 'react-redux'

const ChangeProfession = () => {
    const { user } = useSelector(state => state.authSlices);
    const profession = user.profession || null;

    return (
        <TransitionContainer>
            <ChangeImageUserContainerStyles>
                <h2>Cambiar profesión y/o ocupación.</h2>
                <FormChangeProfession profession={profession} />
            </ChangeImageUserContainerStyles>
        </TransitionContainer>
    )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ChangeProfession