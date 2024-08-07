<<<<<<< HEAD
import React from 'react'
import { IMAGE, VIDEO } from '../../../libs/mediaType'
import VideoPlayer from '../../organisms/VideoPlayer/VideoPlayer'

export const PostMediaType = ({
    mediaType,
    media_url,
    playVideo,
    goPost
}) => {
    
    if (mediaType === VIDEO) {
        return (
          <VideoPlayer media_url={media_url} playVideo={playVideo} isFeed={true} />
        )
      } else if (mediaType === IMAGE) {
        return (
          <img src={media_url} alt="" onClick={goPost} loading='lazy' className='imgPost'/>
        )
      } else {
        return (<></>)
      }
}
=======
import React from 'react'
import { IMAGE, VIDEO } from '../../../libs/mediaType'
import VideoPlayer from '../../organisms/VideoPlayer/VideoPlayer'

export const PostMediaType = ({
    mediaType,
    media_url,
    playVideo,
    goPost
}) => {
    
    if (mediaType === VIDEO) {
        return (
          <VideoPlayer media_url={media_url} playVideo={playVideo} isFeed={true} />
        )
      } else if (mediaType === IMAGE) {
        return (
          <img src={media_url} alt="" onClick={goPost} loading='lazy' className='imgPost'/>
        )
      } else {
        return (<></>)
      }
}
>>>>>>> b3173dc1 (first commit in Ubuntu)
