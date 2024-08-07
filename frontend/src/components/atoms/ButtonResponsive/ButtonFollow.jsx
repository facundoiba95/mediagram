<<<<<<< HEAD
import React from 'react'
import { FaUserClock } from 'react-icons/fa'
import ButtonResponsive from './ButtonResponsive'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { IoMdPersonAdd } from 'react-icons/io'

const ButtonFollow = ({
  followUpRequest,
  handleFollowUser,
  handleUnfollowUser,
  isFollowing
}) => {
  if (isFollowing || followUpRequest.length) {
    if (followUpRequest.length) {
      const statusFollowUpRequest = followUpRequest[0].status;
      if (statusFollowUpRequest === 'PENDING') {
        return (
          <ButtonResponsive             // falta funcion para cancelar la solicitud
            id={followUpRequest[0]._id}
            title={`Pendiente`}
            icon={<FaUserClock
              data-id={followUpRequest[0]._id}
              className='icon' />}
            handleFunction={() => alert('Debes espearar a que el usuario acepte o no la solicitud.')}
            isAlternative={true}
            status={statusFollowUpRequest}
          />
        )
      } else if (statusFollowUpRequest === 'REJECTED') {
        return (
          <ButtonResponsive
            title={`Seguir`}
            icon={<BsFillPersonCheckFill
              className='icon' />}
            handleFunction={() => handleFollowUser()}
            id={followUpRequest[0]._id}
            isAlternative={true}
            status={statusFollowUpRequest}
          />
        )
      } else if (statusFollowUpRequest === 'ACCEPT') {
        return (
          <ButtonResponsive
            title={`Siguiendo`}
            icon={<BsFillPersonCheckFill
              className='icon' />}
            handleFunction={(e) => handleUnfollowUser(e)}
            id={followUpRequest[0]._id}
            status={statusFollowUpRequest}
          />
        )
      }
    } else {
      return (
        <ButtonResponsive
          title={`Seguir`}
          icon={<IoMdPersonAdd
            className='icon'
          />}
          handleFunction={() => handleFollowUser()}
          status={"REJECT"}
        />
      )
    }
  } else {
    return (
      <ButtonResponsive
        title={`Seguir`}
        icon={<IoMdPersonAdd
          className='icon'
        />}
        handleFunction={() => handleFollowUser()}
        status={"REJECT"}
      />
    )
  }
}

=======
import React from 'react'
import { FaUserClock } from 'react-icons/fa'
import ButtonResponsive from './ButtonResponsive'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { IoMdPersonAdd } from 'react-icons/io'

const ButtonFollow = ({
  followUpRequest,
  handleFollowUser,
  handleUnfollowUser,
  isFollowing
}) => {
  if (isFollowing || followUpRequest.length) {
    if (followUpRequest.length) {
      const statusFollowUpRequest = followUpRequest[0].status;
      if (statusFollowUpRequest === 'PENDING') {
        return (
          <ButtonResponsive             // falta funcion para cancelar la solicitud
            id={followUpRequest[0]._id}
            title={`Pendiente`}
            icon={<FaUserClock
              data-id={followUpRequest[0]._id}
              className='icon' />}
            handleFunction={() => alert('Debes espearar a que el usuario acepte o no la solicitud.')}
            isAlternative={true}
            status={statusFollowUpRequest}
          />
        )
      } else if (statusFollowUpRequest === 'REJECTED') {
        return (
          <ButtonResponsive
            title={`Seguir`}
            icon={<BsFillPersonCheckFill
              className='icon' />}
            handleFunction={() => handleFollowUser()}
            id={followUpRequest[0]._id}
            isAlternative={true}
            status={statusFollowUpRequest}
          />
        )
      } else if (statusFollowUpRequest === 'ACCEPT') {
        return (
          <ButtonResponsive
            title={`Siguiendo`}
            icon={<BsFillPersonCheckFill
              className='icon' />}
            handleFunction={(e) => handleUnfollowUser(e)}
            id={followUpRequest[0]._id}
            status={statusFollowUpRequest}
          />
        )
      }
    } else {
      return (
        <ButtonResponsive
          title={`Seguir`}
          icon={<IoMdPersonAdd
            className='icon'
          />}
          handleFunction={() => handleFollowUser()}
          status={"REJECT"}
        />
      )
    }
  } else {
    return (
      <ButtonResponsive
        title={`Seguir`}
        icon={<IoMdPersonAdd
          className='icon'
        />}
        handleFunction={() => handleFollowUser()}
        status={"REJECT"}
      />
    )
  }
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ButtonFollow