import React from 'react'
import { SuggestionItemStyles, SuggestionListGridStyles } from './SuggestionsStyles'
import user from '../../dataTestUsers'
import BasicSlider from '../BasicSlider/BasicSlider'

const SuggestedUsers = () => {

  const renderSuggestions = (usr) => {
    return (
      <SuggestionItemStyles data-id={usr._id}>
        <img src={usr.thumbnail} alt="" />
        <span>
          <b>{usr.username}</b>
          <small>Tienen {Math.floor(Math.random() * 10 +1)} amigos en común.</small>
          <small>{usr.countFollowers} seguidores.</small>
        </span>
      </SuggestionItemStyles>
    )
  }

  return (
    <BasicSlider data={user} itemSlide={renderSuggestions}/>
  )
}

export default SuggestedUsers