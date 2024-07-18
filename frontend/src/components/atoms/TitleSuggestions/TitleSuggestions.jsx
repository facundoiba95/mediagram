import React from 'react'
import { TitleSuggestionsContainerStyles } from './TitleSuggestionsStyles'

const TitleSuggestions = ({title}) => {
  return (
    <TitleSuggestionsContainerStyles>
        <h3>{title}</h3>
    </TitleSuggestionsContainerStyles>
  )
}

export default TitleSuggestions