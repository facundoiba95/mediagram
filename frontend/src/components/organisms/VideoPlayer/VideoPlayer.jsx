import React from 'react'
import { VideoPlayerContainerStyles } from './VideoPlayerStyles'

const VideoPlayer = ({media_url}) => {
  
  return (
    <VideoPlayerContainerStyles>
        <video src={media_url} controls loop autoPlay muted></video>
    </VideoPlayerContainerStyles>
  )
}

export default VideoPlayer