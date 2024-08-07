import React, { useEffect, useRef } from 'react'
import { VideoPlayerContainerStyles } from './VideoPlayerStyles';

const VideoPlayer = ({ media_url, playVideo, isFeed}) => {
  const videoRef = useRef();
  
  useEffect(() => {
    playVideo ? videoRef.current.play() : videoRef.current.pause();
  }, [playVideo])

  return (
    <VideoPlayerContainerStyles isFeed={isFeed}>
      <video src={media_url} controls loop id='video' ref={videoRef} muted></video>
    </VideoPlayerContainerStyles>
  )
}

export default VideoPlayer