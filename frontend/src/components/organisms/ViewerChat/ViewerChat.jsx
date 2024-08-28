import React from 'react'
import { ViewerChatContainerStyles } from './ViewerChatStyles'

const ViewerChat = ({ children }) => {
  return (
    <ViewerChatContainerStyles>
      {children}
    </ViewerChatContainerStyles>
  )
}

export default ViewerChat