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
        if(isFollowing || followUpRequest.length){
          if(followUpRequest.length){
              if(followUpRequest[0].status === 'PENDING'){
                return (
                 <ButtonResponsive 
                  id={followUpRequest[0]._id} 
                  title={`Pendiente`} 
                  icon={<FaUserClock 
                  data-id={followUpRequest[0]._id} 
                  className='icon'/>}/>
                )
              } else if(followUpRequest[0].status === 'REJECTED') {
                return (
                  <ButtonResponsive 
                  title={`Seguir`} 
                  icon={<BsFillPersonCheckFill 
                  className='icon' />} 
                  handleFunction={() => handleFollowUser()}
                  id={followUpRequest[0]._id}/>
                )
              } else if(followUpRequest[0].status === 'ACCEPT') {
                return (
                  <ButtonResponsive 
                  title={`Siguiendo`} 
                  icon={<BsFillPersonCheckFill 
                  className='icon' />} 
                  handleFunction={(e) => handleUnfollowUser(e)}
                  id={followUpRequest[0]._id}/>
                )
              }
        } else {
          return (
            <ButtonResponsive  
              title={`Seguir`} 
              icon={<IoMdPersonAdd 
              className='icon' 
              />} 
              handleFunction={() => handleFollowUser()}/>
          )
        }
    } else {
      return (
        <ButtonResponsive  
          title={`Seguir`} 
          icon={<IoMdPersonAdd 
          className='icon' 
          />} 
          handleFunction={() => handleFollowUser()}/>
      )
    }
}

export default ButtonFollow